"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useService = exports.injectable = exports.inject = void 0;
require("reflect-metadata");
var serviceMap = new WeakMap();
var inject = function () {
    return function (target, key, descriptor) {
        var serviceIdentifier = Reflect.getMetadata('design:type', target, key);
        if (serviceMap.get(serviceIdentifier)) {
            target[key] = serviceMap.get(serviceIdentifier);
        }
        else {
            throw new Error("can not use un injectable class ".concat(serviceIdentifier.name));
        }
        return target;
    };
};
exports.inject = inject;
var injectable = function () {
    return function (target) {
        serviceMap.set(target, new target());
        return target;
    };
};
exports.injectable = injectable;
var useService = function (Service) {
    if (serviceMap.get(Service)) {
        return serviceMap.get(Service);
    }
    throw new Error("can not use un injectable class ".concat(Service.constructor.name));
};
exports.useService = useService;

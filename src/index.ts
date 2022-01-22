import 'reflect-metadata'
const serviceMap = new WeakMap<object, any>()
export const inject = function () {
  return function (target: any, key: any, descriptor?: any) {
    const serviceIdentifier = Reflect.getMetadata('design:type',target,key)
    if (serviceMap.get(serviceIdentifier)) {
      target[key] = serviceMap.get(serviceIdentifier)
    } else {
      throw new Error(`can not use un injectable class ${serviceIdentifier.name}`)
    }
    return target
  }
}

export const injectable = function () {
  return function (target: any) {
    serviceMap.set(target, new target())
    return target
  }
}

export const useService = function <T extends object>(Service: T): T{
  if (serviceMap.get(Service)) {
    return serviceMap.get(Service)
  }
  throw new Error(`can not use un injectable class ${Service.constructor.name}`)
}

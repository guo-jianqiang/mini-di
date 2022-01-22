import 'reflect-metadata';
export declare const inject: () => (target: any, key: any, descriptor?: any) => any;
export declare const injectable: () => (target: any) => any;
export declare const useService: <T extends object>(Service: T) => T;

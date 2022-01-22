# mini-di
Dependency injection based on typescript+reflect-metadata

## install
```shell
yarn add @rainbow_deer/mini-di
npm install @rainbow_deer/mini-di
```
## peerDependencies
```shell
yarn add reflect-metadata
```
## babel
```shell
yarn add @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties babel-plugin-transform-typescript-metadata - D
```
```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    "babel-plugin-transform-typescript-metadata"
  ]
}
```
## tsconfig
experimentalDecorators, emitDecoratorMetadata, types and lib compilation options in your tsconfig.json file.
```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["es6"],
        "types": ["reflect-metadata"],
        "module": "commonjs",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
## usage
```ts
import { injectable, inject, useService } from '@rainbow_deer/mini-di'

@injectable()
class A {
  sayHello () {
    console.log('hello! my name is A')
  }
}

@injectable()
class B {
  @inject() a: A
  sayHello () {
    console.log('hello! my name is B')
  }
}

class C {
  @inject() a: A
  @inject() b: B
  sayHello () {
    console.log('hello! my name is C')
  }
}

const c = new C()
const b = useService(B)
c.a.sayHello() // hello! my name is A
c.b.a.sayHello() // hello! my name is A
c.b.sayHello() // hello! my name is B
b.a.sayHello() // hello! my name is A
```

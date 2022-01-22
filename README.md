# mini-di
基于typescript+reflect-metadata实现的依赖注入

## install
```shell
yarn add @rainbow_deer/mini-di
npm install @rainbow_deer/mini-di
```
## peerDependencies
```shell
yarn add reflect-metadata
```
## tsconfig
```json
{
  ...,
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
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

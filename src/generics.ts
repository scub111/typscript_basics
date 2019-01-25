function identity<T>(arg: T): T {
   console.log(arg);
   return arg;
}

let resultg1 = identity<string>('Hello');
console.log(resultg1);

function loggingIdentity<T>(arg: T[]): T[] {
   console.log(arg.length);
   return arg;
}
let resultg2 = loggingIdentity<number>([1, 2, 3, 4, 5]);

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
   console.log(arg.length);
   return arg;
}
let resultg3 = loggingIdentity2<number>([1, 2, 3, 4, 5, 6, 7]);

let myIdentity: <U>(arg: U) => U = identity;
myIdentity<string>('Test');
let myIdentity2: <U>(arg: U[]) => U[] = loggingIdentity;
myIdentity2<number>([1, 2]);

interface GenericIdentityFn {
   <T>(arg: T): T;
}

class GenericClassWithInterface {
   move: GenericIdentityFn = (arg) => {
      console.log(arg);
      return arg;
   }
}

let myGenericObj = new GenericClassWithInterface();
myGenericObj.move<number>(123);

let myGenericIdentityFn: GenericIdentityFn = identity;

myGenericIdentityFn<string>('Hi');

console.log('---Generic Classes---');
class GenericNumber<T> {
   zeroValue: T;
   add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y };
let resultg4 = myGenericNumber.add(1, 3);
console.log(resultg4);

console.log('---Generic constraints---');
interface Lengthwise {
   length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
   console.log(arg.length);
   return arg;
}

loggingIdentity3([23, 33, 33]);
loggingIdentity3({ test: 2, length: 78 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
   return obj[key];
}

let vargx = { a: 1, b: 2, c: 3 };
getProperty(vargx, "a");
//getProperty(vargx, "a2"); --Compile error

console.log('---Class types in generics---');
class BeeKeeper {
   hasMask: boolean;
}

class ZooKeeper {
   nametag: string;
}

class Animal3 {
   name: string;
   numLegs: number;
   show() {
      console.log(`num legs: ${this.numLegs}`);
   }
   whoIam() {
      console.log(`Who I am: ${this.name}`);
   }
}

class Bee extends Animal3 {
   constructor() {
      super();
      this.name = 'Bee';
   }
   keeper: BeeKeeper;
}

class Lion extends Animal3 {
   constructor() {
      super();
      this.name = 'Lion';
   }
   keeper: ZooKeeper;
}

function createInstance<A extends Animal3>(c: new () => A): A {
   return new c();
}

let lion = createInstance(Lion);
lion.whoIam();
let bee = createInstance(Bee);
bee.whoIam();
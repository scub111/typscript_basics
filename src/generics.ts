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
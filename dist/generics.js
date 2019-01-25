"use strict";
function identity(arg) {
    console.log(arg);
    return arg;
}
let resultg1 = identity('Hello');
console.log(resultg1);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
let resultg2 = loggingIdentity([1, 2, 3, 4, 5]);
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
let resultg3 = loggingIdentity2([1, 2, 3, 4, 5, 6, 7]);
let myIdentity = identity;
myIdentity('Test');
let myIdentity2 = loggingIdentity;
myIdentity2([1, 2]);
class GenericClassWithInterface {
    constructor() {
        this.move = (arg) => {
            console.log(arg);
            return arg;
        };
    }
}
let myGenericObj = new GenericClassWithInterface();
myGenericObj.move(123);
let myGenericIdentityFn = identity;
myGenericIdentityFn('Hi');
console.log('---Generic Classes---');
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
let resultg4 = myGenericNumber.add(1, 3);
console.log(resultg4);
console.log('---Generic constraints---');
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity3([23, 33, 33]);
loggingIdentity3({ test: 2, length: 78 });
function getProperty(obj, key) {
    return obj[key];
}
let vargx = { a: 1, b: 2, c: 3 };
getProperty(vargx, "a");
//getProperty(vargx, "a2"); --Compile error
console.log('---Class types in generics---');
class BeeKeeper {
}
class ZooKeeper {
}
class Animal3 {
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
}
class Lion extends Animal3 {
    constructor() {
        super();
        this.name = 'Lion';
    }
}
function createInstance(c) {
    return new c();
}
let lion = createInstance(Lion);
lion.whoIam();
let bee = createInstance(Bee);
bee.whoIam();

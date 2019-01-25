"use strict";
function identity(arg) {
    console.log(arg);
    return arg;
}
var resultg1 = identity('Hello');
console.log(resultg1);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var resultg2 = loggingIdentity([1, 2, 3, 4, 5]);
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
var resultg3 = loggingIdentity2([1, 2, 3, 4, 5, 6, 7]);
var myIdentity = identity;
myIdentity('Test');
var myIdentity2 = loggingIdentity;
myIdentity2([1, 2]);
var GenericClassWithInterface = /** @class */ (function () {
    function GenericClassWithInterface() {
        this.move = function (arg) {
            console.log(arg);
            return arg;
        };
    }
    return GenericClassWithInterface;
}());
var myGenericObj = new GenericClassWithInterface();
myGenericObj.move(123);
var myGenericIdentityFn = identity;
myGenericIdentityFn('Hi');
console.log('---Generic Classes---');
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());

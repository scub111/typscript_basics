"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//Var
var a = 10;
function f() {
    var message = "hello, world";
}
//Variable capturing quirks
function capturing() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
    setTimeout(function () { console.log("Ready done"); }, 100 * i);
}
function capturingFix() {
    for (var i = 0; i < 10; i++) {
        (function (i) {
            setTimeout(function () { console.log(i); }, 100 * i);
        })(i);
    }
    setTimeout(function () { console.log("Ready done"); }, 100 * i);
}
//capturing();
//capturingFix();
//console.log('done');
//Let
function f2(input) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    return 0;
    //return b; --Compile error
}
f2(true);
function f3() {
    try {
        throw "oh no!";
    }
    catch (e) {
        console.log(e);
    }
}
f3();
//Shadowing
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var matrix = [[1, 2], [3, 4]];
var sum = sumMatrix(matrix);
console.log(`sum: ${sum}`);
//Let
function capturingFixWithLet() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
    //setTimeout(function () { console.log("Ready done"); }, 100 * i);
}
//capturingFixWithLet();
//Const
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
kitty.name = "test"; //Ok
console.log(kitty);
/*
kitty = {   //Runtime error
   name: "dsf"
}
*/
//Destructuring
console.log('---Array destructuring---');
let input = [1, 2];
let [first, second] = input;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
[first, second] = [second, first];
console.log(`first: ${first}`);
console.log(`second: ${second}`);
function f4([first, second]) {
    console.log(first);
    console.log(second);
}
f4([1, 2]);
let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2);
console.log(rest);
let [, second2, , fourth] = [1, 2, 3, 4];
console.log(second2);
console.log(fourth);
console.log('---Object destructuring---');
function f5() {
    let o = {
        a: 'foo',
        b: 12,
        c: true
    };
    let { a: a1, b: b1, c: c1 } = o;
    console.log(a1);
    console.log(b1);
    console.log(c1);
}
f5();
function f6() {
    let o = {
        a: 'foo',
        b: 12,
        c: true
    };
    let { a: a1 } = o, passthrough = __rest(o, ["a"]);
    console.log(a1);
    console.log(passthrough.b);
    console.log(passthrough.c);
}
f6();
console.log('---Property renaming in destructuring---');
function f7() {
    let o = {
        a: 'foo',
        b: 12,
        c: true
    };
    let { a: name1, b: name2 } = o;
    console.log(name1);
    console.log(name2);
}
f7();
console.log('---Default property in destructuring---');
function f8(wholeObject) {
    let { a, b = -1 } = wholeObject;
    console.log(a);
    console.log(b);
}
f8({ a: 8 });
console.log('---Function declarations in destructuring---');
function f9({ a, b }) {
    console.log(a);
    console.log(b);
}
;
f9({ a: "test", b: 123 });
function f10({ a, b = -1 } = { a: "empty" }) {
    console.log(a);
    console.log(b);
}
;
f10({ a: "10" });
f10();
//f10({}); --Compile error
//Spread
console.log('---Spread basics---');
function f11() {
    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];
    console.log(bothPlus);
}
;
f11();
function f12() {
    let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
    let search = Object.assign({}, defaults, { food: 'rich' });
    console.log(search);
}
;
f12();
console.log('---Spread basics---');
class C1 {
    constructor() {
        this.p = 12;
    }
    m() {
    }
}
function f13() {
    let c = new C1();
    let clone = Object.assign({}, c);
    console.log(c);
    console.log(clone);
}
f13();

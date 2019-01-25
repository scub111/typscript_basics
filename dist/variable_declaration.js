"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
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
    var a = 100;
    if (input) {
        var b = a + 1;
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
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var matrix = [[1, 2], [3, 4]];
var sum = sumMatrix(matrix);
console.log("sum: " + sum);
//Let
function capturingFixWithLet() {
    var _loop_1 = function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
    //setTimeout(function () { console.log("Ready done"); }, 100 * i);
}
//capturingFixWithLet();
//Const
var numLivesForCat = 9;
var kitty = {
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
var input = [1, 2];
var first = input[0], second = input[1];
console.log("first: " + first);
console.log("second: " + second);
_a = [second, first], first = _a[0], second = _a[1];
console.log("first: " + first);
console.log("second: " + second);
function f4(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f4([1, 2]);
var _b = [1, 2, 3, 4], first2 = _b[0], rest = _b.slice(1);
console.log(first2);
console.log(rest);
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
console.log(second2);
console.log(fourth);
console.log('---Object destructuring---');
function f5() {
    var o = {
        a: 'foo',
        b: 12,
        c: true
    };
    var a1 = o.a, b1 = o.b, c1 = o.c;
    console.log(a1);
    console.log(b1);
    console.log(c1);
}
f5();
function f6() {
    var o = {
        a: 'foo',
        b: 12,
        c: true
    };
    var a1 = o.a, passthrough = __rest(o, ["a"]);
    console.log(a1);
    console.log(passthrough.b);
    console.log(passthrough.c);
}
f6();
console.log('---Property renaming in destructuring---');
function f7() {
    var o = {
        a: 'foo',
        b: 12,
        c: true
    };
    var name1 = o.a, name2 = o.b;
    console.log(name1);
    console.log(name2);
}
f7();
console.log('---Default property in destructuring---');
function f8(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? -1 : _a;
    console.log(a);
    console.log(b);
}
f8({ a: 8 });
console.log('---Function declarations in destructuring---');
function f9(_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
}
;
f9({ a: "test", b: 123 });
function f10(_a) {
    var _b = _a === void 0 ? { a: "empty" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? -1 : _c;
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
    var first = [1, 2];
    var second = [3, 4];
    var bothPlus = [0].concat(first, second, [5]);
    console.log(bothPlus);
}
;
f11();
function f12() {
    var defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
    var search = __assign({}, defaults, { food: 'rich' });
    console.log(search);
}
;
f12();
console.log('---Spread basics---');
var C1 = /** @class */ (function () {
    function C1() {
        this.p = 12;
    }
    C1.prototype.m = function () {
    };
    return C1;
}());
function f13() {
    var c = new C1();
    var clone = __assign({}, c);
    console.log(c);
    console.log(clone);
}
f13();

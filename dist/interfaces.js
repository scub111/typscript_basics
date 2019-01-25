"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('---Basics---');
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var obj = { label: "test123" };
printLabel(obj);
function createSqure(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    if (config['temp']) {
        console.log(config['temp']);
        for (var propName in config) {
            console.log(propName + ": " + config[propName]);
        }
    }
    return newSquare;
}
var result1 = createSqure({ color: "black", width: 3 });
console.log(result1);
var result2 = createSqure({ color: "red", width: 5, temp: 8 });
console.log(result2);
var result3 = createSqure({ color: "red", width: 5, temp: 18 });
console.log(result3);
console.log('---Readonly properties---');
function f1() {
    var p1 = { x: 1, y: 2 };
    //p1.x = 7; --Compile Error
    console.log(p1);
}
f1();
console.log('---Function types---');
var mySearchFunc = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearchFunc2 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var result4 = mySearchFunc("Hello, everybody", "Hello2");
console.log(result4);
console.log('---Indexed types---');
function fi2() {
    var myArray = ['Bob', 'Tom'];
    myArray[0] = 'Test';
    console.log(myArray[0]);
}
fi2();
function fi3() {
    var myArray = ['Bob1', 'Tom2'];
    //myArray[0] = 'Test';
    console.log(myArray[0]);
}
fi3();
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        _this.breed = 'Dogi';
        return _this;
    }
    return Dog;
}(Animal));
console.log('---Class types---');
var Clock = /** @class */ (function () {
    //constructor(date: Date = new Date()) {
    function Clock(date) {
        if (date === void 0) { date = new Date(); }
        this.currentTime = date;
    }
    Clock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    Clock.prototype.print = function () {
        console.log(this.currentTime);
    };
    Clock.prototype.tick = function () {
        console.log('beep, beep');
    };
    return Clock;
}());
function fi4() {
    var clock = new Clock(new Date('2018-01-01'));
    clock.print();
}
fi4();
function createClock(ctor, date) {
    return new ctor(date);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
        this.currentTime = new Date();
    }
    DigitalClock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    DigitalClock.prototype.tick = function () {
        console.log("DigitalClock: " + this.currentTime.toTimeString());
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock() {
        this.currentTime = new Date();
    }
    AnalogClock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    AnalogClock.prototype.tick = function () {
        console.log("AnalogClock: " + this.currentTime.toTimeString());
    };
    return AnalogClock;
}());
//let digitalClock = new DigitalClock();
var digitalClock = createClock(DigitalClock, new Date());
digitalClock.tick();
//let analogClock = new AnalogClock();
var analogClock = createClock(AnalogClock, new Date());
analogClock.tick();
console.log('---Extending interfaces---');
//let square = <Square>{};
var square = {};
square.color = 'blue';
square.sideLength = 10;
console.log("square: " + square.color + ", " + square.sideLength);
console.log('---Hybrid Types---');
function getCounter() {
    var counter = function (start) { return "dfs"; };
    counter.interval = 15;
    counter.reset = function () { console.log("counter: " + this.interval); };
    return counter;
}
var c2 = getCounter();
c2(10);
c2.interval = 5.0;
c2.reset();
console.log('---Interface extending classes---');
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
/*
class Image2 implements SelectableControl {
   private state: any;
   constructor() {
      this.state = {};
   }
   select(): void {
      //throw new Error("Method not implemented.");
   }
}
*/ 

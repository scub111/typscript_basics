"use strict";
console.log('---Basics---');
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let obj = { label: "test123" };
printLabel(obj);
function createSqure(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    if (config['temp']) {
        console.log(config['temp']);
        for (let propName in config) {
            console.log(`${propName}: ${config[propName]}`);
        }
    }
    return newSquare;
}
let result1 = createSqure({ color: "black", width: 3 });
console.log(result1);
let result2 = createSqure({ color: "red", width: 5, temp: 8 });
console.log(result2);
let result3 = createSqure({ color: "red", width: 5, temp: 18 });
console.log(result3);
console.log('---Readonly properties---');
function f1() {
    let p1 = { x: 1, y: 2 };
    //p1.x = 7; --Compile Error
    console.log(p1);
}
f1();
console.log('---Function types---');
let mySearchFunc = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
let mySearchFunc2 = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
let result4 = mySearchFunc("Hello, everybody", "Hello2");
console.log(result4);
console.log('---Indexed types---');
function fi2() {
    let myArray = ['Bob', 'Tom'];
    myArray[0] = 'Test';
    console.log(myArray[0]);
}
fi2();
function fi3() {
    let myArray = ['Bob1', 'Tom2'];
    //myArray[0] = 'Test';
    console.log(myArray[0]);
}
fi3();
class Animal {
    constructor() {
        this.name = '';
    }
}
class Dog extends Animal {
    constructor() {
        super();
        this.breed = 'Dogi';
    }
}
console.log('---Class types---');
class Clock {
    //constructor(date: Date = new Date()) {
    constructor(date = new Date()) {
        this.currentTime = date;
    }
    setTime(date) {
        this.currentTime = date;
    }
    print() {
        console.log(this.currentTime);
    }
    tick() {
        console.log('beep, beep');
    }
}
function fi4() {
    let clock = new Clock(new Date('2018-01-01'));
    clock.print();
}
fi4();
function createClock(ctor, date) {
    return new ctor(date);
}
class DigitalClock {
    constructor() {
        this.currentTime = new Date();
    }
    setTime(date) {
        this.currentTime = date;
    }
    tick() {
        console.log(`DigitalClock: ${this.currentTime.toTimeString()}`);
    }
}
class AnalogClock {
    constructor() {
        this.currentTime = new Date();
    }
    setTime(date) {
        this.currentTime = date;
    }
    tick() {
        console.log(`AnalogClock: ${this.currentTime.toTimeString()}`);
    }
}
//let digitalClock = new DigitalClock();
let digitalClock = createClock(DigitalClock, new Date());
digitalClock.tick();
//let analogClock = new AnalogClock();
let analogClock = createClock(AnalogClock, new Date());
analogClock.tick();
console.log('---Extending interfaces---');
//let square = <Square>{};
let square = {};
square.color = 'blue';
square.sideLength = 10;
console.log(`square: ${square.color}, ${square.sideLength}`);
console.log('---Hybrid Types---');
function getCounter() {
    let counter = function (start) { return "dfs"; };
    counter.interval = 15;
    counter.reset = function () { console.log(`counter: ${this.interval}`); };
    return counter;
}
let c2 = getCounter();
c2(10);
c2.interval = 5.0;
c2.reset();
console.log('---Interface extending classes---');
class Control {
}
class Button extends Control {
    select() { }
}
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

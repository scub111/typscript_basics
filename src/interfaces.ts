console.log('---Basics---');
interface Labelledvalue {
   label: string;
}

function printLabel(labelledObj: Labelledvalue) {
   console.log(labelledObj.label);
}

let obj: Labelledvalue = { label: "test123" };
printLabel(obj);

interface SquareConfig {
   color?: string;
   width?: number;
   [propName: string]: any;
}

interface SquareResult {
   color?: string;
   area?: number;
}

function createSqure(config: SquareConfig): SquareResult {
   let newSquare: SquareResult = { color: "white", area: 100 };
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

let result2 = createSqure({ color: "red", width: 5, temp: 8 } as SquareConfig);
console.log(result2);

let result3 = createSqure({ color: "red", width: 5, temp: 18 });
console.log(result3);

console.log('---Readonly properties---');
interface Point {
   readonly x: number;
   readonly y: number;
}

function f1() {
   let p1: Point = { x: 1, y: 2 };
   //p1.x = 7; --Compile Error
   console.log(p1);
}
f1();

console.log('---Function types---');
interface SearchFunc {
   (source: string, subString: string): boolean;
}

let mySearchFunc: SearchFunc = (source: string, subString: string): boolean => {
   let result = source.search(subString);
   return result > -1;
}

let mySearchFunc2: SearchFunc = (source, subString) => {
   let result = source.search(subString);
   return result > -1;
};

let result4 = mySearchFunc("Hello, everybody", "Hello2");
console.log(result4);

console.log('---Indexed types---');
interface StringArray {
   [index: number]: string;
}

function fi2() {
   let myArray: StringArray = ['Bob', 'Tom'];
   myArray[0] = 'Test';
   console.log(myArray[0]);
}
fi2();

interface ReadonlyStringArray {
   readonly [index: number]: string;
}

function fi3() {
   let myArray: ReadonlyStringArray = ['Bob1', 'Tom2'];
   //myArray[0] = 'Test';
   console.log(myArray[0]);
}
fi3();

class Animal {
   name: string;
   constructor() {
      this.name = '';
   }
}

class Dog extends Animal {
   breed: string;
   constructor() {
      super();
      this.breed = 'Dogi';
   }
}

interface NotOkay {
   //[x: number]: Animal;
   [y: number]: Dog;
}

console.log('---Class types---');
interface ClockInterface {
   currentTime: Date;
   setTime(date: Date): void;
   tick(): void;
}

interface ClockConstructor {
   new(date: Date): ClockInterface;
}

class Clock implements ClockInterface {
   currentTime: Date;
   //constructor(date: Date = new Date()) {
   constructor(date: Date = new Date()) {
      this.currentTime = date;
   }
   setTime(date: Date): void {
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

function createClock(ctor: ClockConstructor, date: Date): ClockInterface {
   return new ctor(date);
}

class DigitalClock implements ClockInterface {
   currentTime: Date;

   constructor() {
      this.currentTime = new Date();
   }

   setTime(date: Date): void {
      this.currentTime = date;
   }

   tick(): void {
      console.log(`DigitalClock: ${this.currentTime.toTimeString()}`);
   }
}

class AnalogClock implements ClockInterface {
   currentTime: Date;

   constructor() {
      this.currentTime = new Date();
   }

   setTime(date: Date): void {
      this.currentTime = date;
   }
   tick(): void {
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
interface Shape {
   color: string;
}

interface PenStroke {
   sideLength: number;
}

interface Square extends Shape, PenStroke {
   print(): void;
}

//let square = <Square>{};
let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
console.log(`square: ${square.color}, ${square.sideLength}`);

console.log('---Hybrid Types---');
interface Counter {
   (start: number): string;
   interval: number;
   reset(): void;
}

function getCounter(): Counter{
   let counter = <Counter> function (start: number) {return "dfs";};
   counter.interval = 15;
   counter.reset = function() {console.log(`counter: ${this.interval}`)};
   return counter;
}

let c2 = getCounter();
c2(10);
c2.interval = 5.0;
c2.reset();

console.log('---Interface extending classes---');
class Control {
   private state: any;
}

interface SelectableControl extends Control {
   select(): void;
}

class Button extends Control implements SelectableControl {
   select(): void {}
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
class Greeter {
   greeting: string;
   constructor(message: string) {
      this.greeting = message;
   }
   greet() {
      console.log(`Hello, ${this.greeting}`);
   }
}

let greeter = new Greeter('world');
greeter.greet();

console.log('---Inheritance---');
class Animal2 {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
   move(distanceInMeter: number = 0) {
      console.log(`Animal moved ${distanceInMeter}`);
   }
}

class Dog2 extends Animal2 {
   constructor(name: string) {
      super(name);
      console.log('Dog constructor was invoked');
   }
   bark() {
      console.log(`Woof! Woof, I am ${this.name}`);
   }
}

const dog = new Dog2("Dog");
dog.bark();
dog.move(10);

console.log(`---Understanding protected---`);
class Person {
   protected name: string;
   protected constructor(name: string) {
      this.name = name;
   }

   Greet() {
      console.log(`My name is ${this.name}`);
   }
}

class Employee extends Person {
   private department: string;
   constructor(name: string, department: string) {
      super(name);
      this.department = department;
   }

   public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}`;
   }
}

//let person = new Person('Kostya');
//person.Greet();

let howard = new Employee('Howard', "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); --Compile error

console.log('---Readonly modifier---');
class Octopus {
   readonly name: string;
   readonly numberOfLegs: number = 8;
   constructor (name: string) {
      this.name = name;
   }
}

let dad = new Octopus('Man with the 8 strong legs');
//dad.name = 'sdf'; --Compile error

console.log('---Parameter properties---');
class Octopus2 {
   constructor(public name: string) {}
   say() {
      console.log(`I am ${this.name}`);
   }

   tryChangeName(name: string) {
      this.name = name;
   }
}

let dad2 = new Octopus2('Scub111');
dad2.name = "Igor";
dad2.say();

console.log('---Accessors---');
let passcode = 'secret passcode';
class Employee2 {
   private _fullName: string = '';
   get fullName() {
      return this._fullName;
   }
   set fullName(name: string) {
      if (passcode && passcode === 'secret passcode') {
         this._fullName = name;
      } else {
         console.log('Error: Unauthorized update of employee!');
      }
   }
}

let employee2 = new Employee2();
employee2.fullName = 'Test fullName';
if (employee2.fullName) {
   console.log(employee2.fullName);
}

console.log('---Static properties---');
type PointType = {x: number, y: number};

class Grid {
   static origin: PointType = {x: 0, y: 0};
   constructor (public scale: number) {}
   calculateDistanceFromOrigin(point: PointType) {
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
   }
}

let grid1 = new Grid(1);
let grid2 = new Grid(5);
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

console.log('---Abstract classes---');
abstract class Department2 {
   constructor(public name: string) {}

   printName(): void {
      console.log(`Department name: ${this.name}`);
   }

   abstract printMeeting(): void;
}


class AccountingDeparment extends Department2 {
   constructor() {
      super('Accounting and Auditing');
   }

   printName(): void {
      super.printName();
      console.log('Overrided printName');
   }

   printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am');
   }

   generateReport(): void {
      console.log('Generate Report');
   }
}

let accountingDeparment = new AccountingDeparment();
accountingDeparment.printName();
accountingDeparment.printMeeting();
accountingDeparment.generateReport();

console.log('---Using a class as an interface---');
class Point4 {
   x: number = 0;
   y: number = 0;
}

interface Point3d extends Point4 {
   z: number
}

const printPoint3d = (point3d: Point3d) => {
   console.log(`${point3d.x} - ${point3d.y} - ${point3d.z}`);
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
printPoint3d(point3d);
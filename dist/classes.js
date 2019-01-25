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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.greet();
console.log('---Inheritance---');
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log("Animal moved " + distanceInMeter);
    };
    return Animal2;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        var _this = _super.call(this, name) || this;
        console.log('Dog constructor was invoked');
        return _this;
    }
    Dog2.prototype.bark = function () {
        console.log("Woof! Woof, I am " + this.name);
    };
    return Dog2;
}(Animal2));
var dog = new Dog2("Dog");
dog.bark();
dog.move(10);
console.log("---Understanding protected---");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.Greet = function () {
        console.log("My name is " + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Person));
//let person = new Person('Kostya');
//person.Greet();
var howard = new Employee('Howard', "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); --Compile error
console.log('---Readonly modifier---');
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.numberOfLegs = 8;
        this.name = name;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
//dad.name = 'sdf'; --Compile error
console.log('---Parameter properties---');
var Octopus2 = /** @class */ (function () {
    function Octopus2(name) {
        this.name = name;
    }
    Octopus2.prototype.say = function () {
        console.log("I am " + this.name);
    };
    Octopus2.prototype.tryChangeName = function (name) {
        this.name = name;
    };
    return Octopus2;
}());
var dad2 = new Octopus2('Scub111');
dad2.name = "Igor";
dad2.say();
console.log('---Accessors---');
var passcode = 'secret passcode';
var Employee2 = /** @class */ (function () {
    function Employee2() {
        this._fullName = '';
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = name;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = 'Test fullName';
if (employee2.fullName) {
    console.log(employee2.fullName);
}
console.log('---Static properties---');
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log('---Abstract classes---');
var Department2 = /** @class */ (function () {
    function Department2(name) {
        this.name = name;
    }
    Department2.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department2;
}());
var AccountingDeparment = /** @class */ (function (_super) {
    __extends(AccountingDeparment, _super);
    function AccountingDeparment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDeparment.prototype.printName = function () {
        _super.prototype.printName.call(this);
        console.log('Overrided printName');
    };
    AccountingDeparment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDeparment.prototype.generateReport = function () {
        console.log('Generate Report');
    };
    return AccountingDeparment;
}(Department2));
var accountingDeparment = new AccountingDeparment();
accountingDeparment.printName();
accountingDeparment.printMeeting();
accountingDeparment.generateReport();
console.log('---Using a class as an interface---');
var Point4 = /** @class */ (function () {
    function Point4() {
        this.x = 0;
        this.y = 0;
    }
    return Point4;
}());
var printPoint3d = function (point3d) {
    console.log(point3d.x + " - " + point3d.y + " - " + point3d.z);
};
var point3d = { x: 1, y: 2, z: 3 };
printPoint3d(point3d);

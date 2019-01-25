"use strict";
//Boolean
let isDone = false;
//Number
let decimal = 6;
let hex = 0xf000d;
let binary = 0b111;
let octal = 0o744;
//String
let color = 'blue';
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, name is ${fullName}

I'll be ${age + 1} years old next month
`;
//Array
let list = [1, 2, 3];
let list2 = [1, 2, 3];
//Tuple
let x;
x = ["hello2", 10];
console.log(x[0].substr(1));
//console.log(x[1].substr(1)); --Compile error
//Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(`c: ${c}`);
//Any
let noSure = 4;
//noSure.ifItExist(); --Runtime error
noSure.toFixed();
let prettySure = 4;
//prettySure.toFixed(); --Compile error
let list3 = [1, true, "free"];
console.log(list3);
list3[1] = 100;
console.log(list3);
//Void
function warnUser() {
    console.log('This is may warning message');
}
warnUser();
function create(o) {
    console.log(`object ${o} was created`);
}
create({ prop: 0 });
//create(123); --Compile error
//create(false); --Compile error
//create(undefined); --Compile error
//Type assertions
let someValue = "this is string";
let strLength = someValue.length;
let strLength2 = someValue.length;
console.log(`${strLength} - ${strLength} `);

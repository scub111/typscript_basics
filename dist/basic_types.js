"use strict";
//Boolean
var isDone = false;
//Number
var decimal = 6;
var hex = 0xf000d;
var binary = 7;
var octal = 484;
//String
var color = 'blue';
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, name is " + fullName + "\n\nI'll be " + (age + 1) + " years old next month\n";
//Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple
var x;
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
var c = Color.Green;
console.log("c: " + c);
//Any
var noSure = 4;
//noSure.ifItExist(); --Runtime error
noSure.toFixed();
var prettySure = 4;
//prettySure.toFixed(); --Compile error
var list3 = [1, true, "free"];
console.log(list3);
list3[1] = 100;
console.log(list3);
//Void
function warnUser() {
    console.log('This is may warning message');
}
warnUser();
function create(o) {
    console.log("object " + o + " was created");
}
create({ prop: 0 });
//create(123); --Compile error
//create(false); --Compile error
//create(undefined); --Compile error
//Type assertions
var someValue = "this is string";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength + " - " + strLength + " ");

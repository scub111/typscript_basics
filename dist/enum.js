"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum[ResponseEnum["No"] = 0] = "No";
    ResponseEnum[ResponseEnum["Yes"] = 1] = "Yes";
})(ResponseEnum || (ResponseEnum = {}));
function response(recipient, message) {
}
response('Hello', ResponseEnum.Yes);
function getSomeValue() {
    return 11;
}
var E;
(function (E) {
    E[E["A"] = getSomeValue()] = "A";
    E[E["B"] = 12] = "B";
})(E || (E = {}));
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum["Up"] = "UP";
    DirectionEnum["Down"] = "Down";
    DirectionEnum["Left"] = "Left";
    DirectionEnum["Right"] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
var BooleanWithStringEnum;
(function (BooleanWithStringEnum) {
    BooleanWithStringEnum[BooleanWithStringEnum["No"] = 0] = "No";
    BooleanWithStringEnum["Yes"] = "Yes";
})(BooleanWithStringEnum || (BooleanWithStringEnum = {}));
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["Spy"] = 8] = "Spy";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["ReadSpy"] = 10] = "ReadSpy";
    FileAccess[FileAccess["All"] = 14] = "All";
})(FileAccess || (FileAccess = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "Hello";
    ShapeKind["Square"] = "Nope";
})(ShapeKind || (ShapeKind = {}));
let c43 = {
    kind: ShapeKind.Circle,
    radius: 233
};
console.log(ShapeKind.Square);
console.log('---Enums at runtime---');
var E3;
(function (E3) {
    E3[E3["X"] = 0] = "X";
    E3[E3["Y"] = 1] = "Y";
    E3[E3["Z"] = 2] = "Z";
})(E3 || (E3 = {}));
function f(obj) {
    return obj.X;
}
console.log(f(E3));
console.log(E3);
console.log(E3[0]);
console.log(0 /* X */);
let direction2 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(direction2);
console.log('---Ambition enums---');
console.log(E5);

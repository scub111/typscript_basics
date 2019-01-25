enum Direction {
   Up = 1,
   Down,
   Left,
   Right
}

enum ResponseEnum {
   No,
   Yes
}

function response(recipient: string, message: ResponseEnum): void {

}

response('Hello', ResponseEnum.Yes);

function getSomeValue() {
   return 11;
}

enum E {
   A = getSomeValue(),
   B = 12
}

enum DirectionEnum {
   Up = "UP",
   Down = "Down",
   Left = "Left",
   Right = "Right"
}

enum BooleanWithStringEnum {
   No = 0,
   Yes = 'Yes'
}

enum E1 {
   X
}

enum E2 {
   A = 1,
   B,
   C
}

enum FileAccess {
   None,
   Read = 1 << 1,
   Write = 1 << 2,
   Spy = 1 << 3,
   ReadWrite = Read | Write,
   ReadSpy = Read | Spy,
   All = Read | Write | Spy
}

enum ShapeKind {
   Circle = "Hello",
   Square = "Nope"
}

interface Circle {
   kind: ShapeKind.Circle;
   radius: number
}

interface Square {
   kind: ShapeKind.Square;
   sideLength: number;
}

let c43: Circle = {
   kind: ShapeKind.Circle,
   radius: 233
}

console.log(ShapeKind.Square);

console.log('---Enums at runtime---');
enum E3 {
   X = 0,
   Y,
   Z
}

function f(obj: { X: number, Z: number }) {
   return obj.X;
}

console.log(f(E3));
console.log(E3);
console.log(E3[0]);

const enum E4 {
   X = 0,
   Y,
   Z
}
console.log(E4.X);

const enum Direction2 {
   Up,
   Down,
   Left,
   Right
}

let direction2 = [Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right];
console.log(direction2);

console.log('---Ambition enums---');
declare enum E5 {
   X = 1,
   Y,
   Z = 2
}

//console.log(E5.Y);
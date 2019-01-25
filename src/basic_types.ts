//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf000d;
let binary: number = 0b111;
let octal: number = 0o744;

//String
let color: string = 'blue';
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, name is ${fullName}

I'll be ${age + 1} years old next month
`;

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];

x = ["hello2", 10];

console.log(x[0].substr(1));
//console.log(x[1].substr(1)); --Compile error

//Enum 
enum Color {
   Red = 1,
   Green = 3,
   Blue
}

let c: Color = Color.Green;
console.log(`c: ${c}`);

//Any
let noSure: any = 4;
//noSure.ifItExist(); --Runtime error
noSure.toFixed();

let prettySure: Object = 4;
//prettySure.toFixed(); --Compile error

let list3: any[] = [1, true, "free"];
console.log(list3);
list3[1] = 100;
console.log(list3);

//Void
function warnUser(): void {
   console.log('This is may warning message');
}

warnUser();

function create(o: object): void {
   console.log(`object ${o} was created`);
}

create({prop: 0});
//create(123); --Compile error
//create(false); --Compile error
//create(undefined); --Compile error

//Type assertions
let someValue: any = "this is string";
let strLength: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;
console.log(`${strLength} - ${strLength} `);


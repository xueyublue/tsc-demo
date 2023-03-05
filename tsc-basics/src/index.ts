// Basic Types
let id: number = 5;
let company: string = "OCBC";
let isPublished: boolean = false;
let x: any = "Hello World";
x = true;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple - type must be in sequence
let person: [number, string, boolean] = [1, "XY", true];
// Tuple Array
let employee: [number, string][] = [
  [1, "E1"],
  [2, "E2"],
];

// Union
let uniqueId: number | string = 123;
uniqueId = "123";

// Enum
enum Direction1 {
  Up = 1, // value = 0 by default
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up", // value = 0 by default
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: {
  id: number;
  name: string;
} = { id: 1, name: "John" };

const user2: User = {
  id: 2,
  name: "Doe",
};

// Type - Able to union, Interface cannot union
type Point = number | string;

// Type Assertion
let cid: any = 1;
let customertId = <number>cid;
let customerId2 = cid as number;

// Functions
function addNumber(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interface - Object
// cannot union primative types
interface StudentInterface {
  readonly id: number; // readyonly
  name: string;
  age?: number; // optional
}

const student: StudentInterface = {
  id: 1,
  name: "Eric",
};

// Interface - Function
interface MathFunc {
  (x: number, y: number): number;
}
const addTwoNum: MathFunc = (x: number, y: number): number => x + y;
const subTwoNum: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}
const person1 = new Person(1, "John Doe");

// Class - Extend
class MyPerson extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const myPerson = new MyPerson(1, "Eric", "Software Developer");
console.log(myPerson.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["John", "Doe", "Eric"]);
// numArray.push("1");  // we should not able to  push non-number items
// strArray.push(1);    // we should not able to push non-string items

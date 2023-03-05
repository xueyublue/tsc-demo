"use strict";
// Basic Types
let id = 5;
let company = "OCBC";
let isPublished = false;
let x = "Hello World";
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple - type must be in sequence
let person = [1, "XY", true];
// Tuple Array
let employee = [
    [1, "E1"],
    [2, "E2"],
];
// Union
let uniqueId = 123;
uniqueId = "123";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = { id: 1, name: "John" };
const user2 = {
    id: 2,
    name: "Doe",
};
// Type Assertion
let cid = 1;
let customertId = cid;
let customerId2 = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const student = {
    id: 1,
    name: "Eric",
};
const addTwoNum = (x, y) => x + y;
const subTwoNum = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const myPerson = new MyPerson(1, "Eric", "Software Developer");
console.log(myPerson.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["John", "Doe", "Eric"]);
// numArray.push("1");  // we should not able to  push non-number items
// strArray.push(1);    // we should not able to push non-string items

// Primitive data types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const preciseScore = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const userId1 = Symbol("123");
const userId2 = Symbol("123");
// console.log(userId1 === userId2);
const bigNumber = 1234567890n;
// console.log(bigNumber);


// Non-primitive(Reference) data types
// Array, Objects, Functions
const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Naren",
    age: 25
}
const myFunc = function () {
    console.log("Hello world!");
}
myFunc();


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Naren";
let anotherName = myName;
anotherName = "Narendra";
console.log(anotherName);
console.log(myName);

let userOne = {
    name: 'user 1',
    email: 'user1@gmail.com'
}
let userTwo = userOne;
userTwo.email = "user2@gmail.com";
console.log(userTwo);
console.log(userOne);
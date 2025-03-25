// const userEmail = [];

// if (userEmail) {
//     console.log("Got email");
// } else {
//     console.log("Do not have email");
// }

// Falsy Values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy Values
// "0", 'false', " ", [], {}, function () {}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// const obj = {};
// if(Object.keys(obj).length === 0) {
//     console.log("object is empty")
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 14;
val1 = null ?? undefined ?? "0";

console.log(val1);


// Ternary operator
// Condition ? true : false;
const price = 5;
price <= 2 ? console.log("price less than 2") : console.log("price greater than 2")
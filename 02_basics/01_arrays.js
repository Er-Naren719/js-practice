// Arrays

let myArray = [0, 1, 2, 3, 4, 5, 6];
let mixValueArray = [7, "naren", true, {age: 25, city: "pune"}];
// console.log(mixValueArray);
// console.log(mixValueArray[3]);


// Array methods
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof newArray);


// Slice, Splice
console.log("A ", myArray);

const myNewArray1 = myArray.slice(1, 3);
console.log(myNewArray1);
console.log("B ", myArray);

const myNewArray2 = myArray.splice(1, 3);
console.log(myNewArray2);
console.log("C ", myArray);

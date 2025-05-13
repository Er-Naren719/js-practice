// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter);

const course = {
    name: 'Javascript',
    price: 999,
    isAvailable: true,
    logMessage: function () {
        console.log("Log the message here");
    }
}
console.log(Object.getOwnPropertyDescriptor(course, "name"));

Object.defineProperty(course, "name", {
    // writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(course, "name"));

for (const [key, value] of Object.entries(course)) {
    if (typeof value !== 'function') {
        console.log(key, value);
    }
}

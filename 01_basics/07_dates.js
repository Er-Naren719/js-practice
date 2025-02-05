// Dates
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let randomDate = new Date(2025, 8, 7);
// let randomDate = new Date(2025, 8, 7, 17, 12);
let randomDate = new Date("01-01-2025");
// console.log(randomDate.toString());
// console.log(randomDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(randomDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(myDate.getMonth());
// console.log(myDate.getDay());

let newDate = myDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);
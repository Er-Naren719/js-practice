const balance = new Number('345');
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 23.3453;
// console.log(otherNum.toPrecision(3));

const hundreds = 231233545344321;
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
// console.log(Math.abs(-9));
// console.log(Math.round(4.24));
// console.log(Math.random());
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);
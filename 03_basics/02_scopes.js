let a = 10;
const b = 20;
var c = 30;

if(true) {
    let a = 11;
    const b=22;
    console.log(a, " Inner a");
    console.log(b, " Inner b");
    c=33;
}
console.log(a);
console.log(b);
console.log(c);
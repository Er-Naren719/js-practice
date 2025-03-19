let a = 10;
const b = 20;
var c = 30;

if (true) {
    let a = 11;
    const b = 22;
    // console.log(a, " Inner a");
    // console.log(b, " Inner b");
    c = 33;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Naren";
    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if (true) {
    const username = "Naren";
    if (username) {
        const website = "Youtube";
        console.log(`${username} ${website}`);
    }
    // console.log(website);
}
// console.log(username);


console.log(one(5))
function one(num) {
    return num + 1;
}

// console.log(addition(5))
const addition = function two(num) {
    return num + 2;
}
// Object Literals
const mySymb = Symbol("Key 1");

const user = {
    name: "Naren",
    "full name": "Narendra patil",
    [mySymb]: "Key 1",
    age: 24,
    location: "Pune",
    email: "naren@google.com",
    isLoggedIn: false,
    lastWorkingDays: ["Monday", "Wednesday"]
}

user.email = "naren@facebook.com";
// Object.freeze(user);
user.email = "naren@instagram.com";
console.log(user);
user.greeting = function () {
    console.log(`Hello ${this.name}`);
}
console.log(user.greeting());
// console.log(user["full name"]);
// console.log(typeof user[mySymb]);


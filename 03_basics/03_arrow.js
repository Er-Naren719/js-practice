const user = {
    username: "Naren",
    price: 999,
    welcomeUser: function () {
        console.log(`Welcome to the website ${this.username}`);
        console.log(this);
    }
}
// user.welcomeUser();
// user.username = "Name";
// user.welcomeUser();

// console.log(this);


// function ride() {
//     let username = "Naren";
//     console.log(this.username);
// }
// ride()


// let ride = function() {
//     let username = "Naren";
//     console.log(this.username);
// }
// ride()


// let ride = () => {
//     let username = "Naren";
//     console.log(this);
// }
// ride()


// const addTwoNums = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return methods
// const addTwoNums = (num1, num2) => num1 + num2
// const addTwoNums = (num1, num2) => (num1 + num2)
const addTwoNums = (num1, num2) => ({username: "Naren"})
console.log(addTwoNums(7, 19));

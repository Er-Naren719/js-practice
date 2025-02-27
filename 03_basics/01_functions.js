function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log(result);

function loginUseMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUseMessage());

function calculateCartPrice(val1, val2, ...values) {
    return values;
}
// console.log(calculateCartPrice(10, 20, 30, 40, 50))

const user = {
    username: "Naren",
    price: 199
}
function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}
// handleObject(user);

const myArray = [1, 5, 7, 4, 9];
function returnSecondValue(arr) {
    return arr[2]
}
console.log(returnSecondValue(myArray));
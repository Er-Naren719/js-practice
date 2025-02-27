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

console.log(loginUseMessage());
const user = {
    username: "Naren",
    loggedInCount: 8,
    isLoggedIn: true,
    getUserDetails: function () {
        console.log(`Username is ${this.username}`);
    }
}

// console.log(user.getUserDetails());

function userObj(username, loggedInCount, isLoggedIn) {
    this.username = username;
    this.loggedInCount = loggedInCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new userObj("Narendra", 8, true);
const userTwo = new userObj("Mac", 9, false);
const userThree = new userObj();
console.log(userOne);
console.log(userTwo);
console.log(userThree);

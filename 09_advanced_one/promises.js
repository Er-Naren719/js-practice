// Promise 1
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise One");
//     resolve();
//   }, 1500);
// });

// promiseOne.then(() => {
//   console.log("Promise consumed");
// });


// Promise 2
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Two");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("Async Two Resolved");
// });


// Promise 3
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Code", email: "code@example.com" });
//   }, 1000);
// });
// promiseThree.then((user) => {
//   console.log(user);
// });


// Promise 4
// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Naren", password: "123" })
//     } else {
//       reject('ERROR: Something went wrong')
//     }
//   }, 1000)
// });
// promiseFour.then((user) => {
//   console.log(user);
//   return user.username;
// }).then((username) => {
//   console.log(username);
// }).catch(function(error) {
//   console.log(error);
// }).finally(function() {
//   console.log("The promise is either resolved or rejected.");
// });


// Promise 5
// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" })
//     } else {
//       reject('ERROR: JS went wrong')
//     }
//   }, 1000)
// });
// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();


// Async Await with Fetch API
// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();


// Fetch with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
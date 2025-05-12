// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     // Encrypt the password
//     return `encrypted_${this.password}`;
//   }
// }

// const user = new User('John', 'john@example.com', 'password');
// console.log(user.encryptPassword());


// Behind the scenes
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  this.encryptPassword = function () {
    // Encrypt the password
    return `encrypted_${this.password}`;
  }
}
const user = new User('John', 'john@example.com', 'password');
console.log(user.encryptPassword());
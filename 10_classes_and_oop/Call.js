function SetUserName(name) {
  this.name = name;
}

function CreateUser(userName, email, password) {
  SetUserName.call(this, userName)
  this.email = email;
  this.password = password;
}

const user = new CreateUser('John', 'john@gmail.com', 'password');
console.log(user);
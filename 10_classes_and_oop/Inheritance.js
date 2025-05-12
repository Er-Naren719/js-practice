class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  logUserEmail() {
    console.log(`User email: ${this.email}`);
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }
  showUserPassword() {
    console.log(`role is: ${this.role}`);
  }
}

const user = new User('John', 'john@gmail.com');
user.logUserEmail();

const admin = new Admin('Jane', 'jane@gmail.com', 'admin');
admin.showUserPassword();

console.log(admin instanceof User);
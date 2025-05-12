class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static createId() {
    return `user_id_${this.name}`;
  }
}
const user = new User('John');
// console.log(user.createId());

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}
const admin1 = new Admin('Jane', 'admin');
console.log(admin1.createId());
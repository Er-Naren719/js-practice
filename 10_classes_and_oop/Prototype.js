let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderManPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.getHeroPower = function () {
  console.log(`Hero power is present in prototype`);
}

Array.prototype.getMessage = function () {
  console.log(`Hello from array prototype`);
}

// heroPower.getHeroPower();
// myHeros.getHeroPower();

// myHeros.getMessage();
// heroPower.getMessage();

const user = {
  name: "User",
  email: "user@dummy.com"
}

const Teacher = {
  makeVideo: true,
}

const TeachingSupport = {
  isAvailable: false,
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

// Old way of prototypal inheritance
Teacher.__proto__ = user;

// New way of prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "Narendra     ";
String.prototype.trueLength = function () {
  console.log(`True length is ${this.trim().length}`);
}
myName.trueLength();
"Naren".trueLength();
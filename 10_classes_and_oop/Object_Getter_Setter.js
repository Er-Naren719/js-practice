const User = {
    _email: "test@dummy.in",
    _password: "asdrwerdcvd",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const Person = Object.create(User);
console.log(Person.email);
console.log(Person.password);

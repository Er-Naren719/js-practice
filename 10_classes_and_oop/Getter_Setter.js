class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        // return this._email.toUpperCase();
        return `${this._email.toUpperCase()}`;
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return `qweas${this._password}dasd`
    }
    set password(value) {
        this._password = value
    }
}

const Naren = new User("dummy@test.in", "passkey123");
console.log(Naren.email);
console.log(Naren.password);

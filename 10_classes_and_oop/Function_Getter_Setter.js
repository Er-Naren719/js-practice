function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return `weqe${this._password}xcvxc`;
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const Naren = new User("dummy@test.in", "passkey123");
console.log(Naren.email);
console.log(Naren.password);
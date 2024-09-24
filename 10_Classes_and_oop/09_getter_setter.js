class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    return this._email = value
  }
  get password() {
    return `${this._password}upendra`
  }
  set password(value) {
    this._password = value
  }
}

const upendra = new User("upendra@pdl.ai", "123")
console.log(upendra.password);
console.log(upendra.email);


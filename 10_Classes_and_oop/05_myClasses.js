// //ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`
  }
  changeEmail() {
    return `${this.email}`
  }
}

const chai = new User("upendra", "upendrapaudel0@mgail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log(chai.changeEmail());

//behind the scrence 

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}ab`
}
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const tea = new User("upendra", "l0@mgail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
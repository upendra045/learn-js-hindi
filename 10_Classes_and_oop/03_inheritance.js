// const User = {
//   name: "chai",
//   email: "chai@google.com"
// }

// const Teacher = {
//   makeVideo: true
// }

// const TeachingSupport = {
//   isAvailable: false
// }

// const TaSupport = {
//   makeAssignment: 'js assignment',
//   fullTime: true,
//   __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

//modern syntax

// Object.setPrototypeOf(TeachingSupport.Teacher)

// let anotherUsername = "chaiAurcode   "
// let anotherUsername2 = "chai   Aur   fuck  "

// String.prototype.truelength = function () {
//   console.log(`${this}`);
// console.log(`${this.name}`);
//   console.log(`True length is : ${this.trim().length}`);
// }

// String.prototype.truelength = function () {
//   console.log(`${this}`);
// console.log(`${this.name}`);
//   console.log(`True length is : ${this.trim().length}`);
// }
// String.prototype.toUpDown = function () {
//   console.log(`${this}`);
// console.log(`${this.name}`);
//   console.log(`True length is : ${this.trim().toUpperCase()}`);
// }


// anotherUsername.truelength()
// anotherUsername2.truelength()

// "upendra".truelength()
// "iceTea".truelength()
// "upendra".toUpDown()


class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);

  }
}

const chai = new Teacher("upendra", "upendrapaudel0@mgail.com", "123")

chai.addCourse();
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

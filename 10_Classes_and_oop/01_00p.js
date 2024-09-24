// const user = {
//   username: "upendra",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`Got user details from database : ${this.loginCount}`);

//   }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);

  }
}

const userOne = new User("Upendra", 12, true);
const userTwo = new User("chaiaurcode", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);





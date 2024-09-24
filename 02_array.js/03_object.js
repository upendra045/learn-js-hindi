// singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "upendra",
  "full name": "Upendra paudel",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "upendra@google.com",
  isloggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "upendra@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "upendra@chatgptmicrosoft.com"
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
}

jsUser.greetingTwo = function () {
  console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigInt = 234324324324232323n



//Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
  name: "upendra",
  age: 22
};


const myFunction = function () {
  console.log("Hello world");
}
myFunction()

console.log(typeof scoreValue);

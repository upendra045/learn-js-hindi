const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("ARray is empty");

// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");

}

//Nullish Coalescing operator (??): null undefined

let val1;
val1 = null ?? 10

console.log(val1);

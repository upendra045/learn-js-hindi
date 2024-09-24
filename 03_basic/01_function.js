function sayMyname() {
  console.log("U");
  console.log("p");
  console.log("e");
  console.log("n");
  console.log("d");
  console.log("r");
  console.log("a");
}

//sayMyname()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
  let result = number1 + number2
  return result;
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter a username");
    return

  }
  return `${username} just logged in `
}

// console.log(loginUserMessage("upendra"));
console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "upendra",
  price: 199
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  username: "upendra",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

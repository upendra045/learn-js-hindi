// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = `orange`
// }

// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = `yellow`
// }

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`
  }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")


// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();



// const sayDate = function (str) {
//   console.log(str, Date.now());

// }
// const intervalId = setInterval(sayDate, 1000, "hi")


// document.querySelector('#stop').addEventListener('click', function () {
//   clearInterval(intervalId)
//   console.log("STOPPED");
// });

// document.querySelector('#start').addEventListener('click', function (str) {
//   console.log(str, Date.now());
//   const intervalId = setInterval(sayDate, 1000, "hi")
//   setInterval(intervalId)
// });

let intervalId; // Declare intervalId in the outer scope

const sayDate = function (str) {
  console.log(str, Date.now());
}

document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) { // Only start if it's not already running
    intervalId = setInterval(sayDate, 1000, "hi");
    console.log("STARTED");
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  if (intervalId) { // Only stop if it's running
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
    console.log("STOPPED");
  }
});

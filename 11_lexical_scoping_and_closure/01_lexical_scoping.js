function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

function outer() {
  let username = "upendra";
  function inner() {
    let secret = "my123"
    console.log("inner", username);

  }
  function innerTwo() {
    console.log("innerTwo", username);

  }
  inner()
  innerTwo()
}
outer()
// console.log("Too Outer", username);



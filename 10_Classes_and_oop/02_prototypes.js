// let myName = "upendra   ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy powe is ${this.spiderman}`);
  }
}

Object.prototype.upendra = function () {
  console.log(`upendra is present in all objects`);

}

Array.prototype.heyUpendra = function () {
  console.log(`upendra says helo`);

}
// heroPower.upendra()

myHeros.upendra()
myHeros.heyUpendra()
// heroPower.heyUpendra()


//for of

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);

}

//Maps

const map = new Map()
map.set('NP', "Nepal");
map.set('USA', "Unites States of America");
map.set("FR", "France");
// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}


const myObject = {
  js: 'javascript',
  cpp: 'c++',

  rb: 'ruby',
  swift: 'swift by apple'
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ["js", "rb", "py", "java", "cpp"];


for (const key in programming) {
  console.log(programming[key]);

}
const name = "upendra"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

// Create a new String object with the value 'upendra'
const gameName = new String('upendra')

console.log(gameName);
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('r'));

// Use the substring method to extract characters from index 0 to 4 (not including 4)
// This will extract the substring 'upen' from 'upendra'
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 3)
console.log(anotherString);

const newStringOne = " upendra "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://upendrapaudel.com/upendra%20paudel"

console.log(url.replace('%20', '-'));

console.log(url.includes('upendra'))

console.log(gameName.split('-'));

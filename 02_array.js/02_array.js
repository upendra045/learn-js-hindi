const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "falsh", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//spread is used to concat or join two aray in same aray
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//flat is used to merge all array together
const real_another_array = another_array.flat(2)
console.log(real_another_array);

console.log(Array.isArray("upendra"))
console.log(Array.from("upendra"))
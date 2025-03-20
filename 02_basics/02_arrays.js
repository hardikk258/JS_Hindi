const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // existing m push krdega

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // add krkr new array dia
// console.log(allHeros);


// kach ka glass lijiye chordijiye spread hojyga glass

const all_new_heroes = [...marvel_heros, ...dc_heros]
console.log(all_new_heroes);


const another_arr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
const real_another_arr = another_arr.flat(Infinity)   // sbh ek array m store hogyi
console.log(real_another_arr);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting // keys sae array bnanan prega to btana prega


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
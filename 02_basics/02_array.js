/********************* Lec 15 ****************/
// Array

const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heros =["superman","flash","batman"]
//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   /* concat return new array */

// console.log(allHeros);

// const allNewheros = [...marvel_heros,...dc_heros]
// console.log(allNewheros);

// const another_array =[1,2,3,[4,5,6,],7,[6,7,[4,5]]]

// let realArray = another_array.flat(Infinity)
// console.log(realArray);


// console.log(Array.isArray("Avanish"));
// console.log(Array.from("Avanish"));
// console.log(Array.from({name: "Avanish"}));  /*it will give empty array because it cannot convert  it */

let score1 = 300;
let score2 = 400;
let score3 = 500;

console.log(Array.of(score1,score2,score3));


/*****************  end of lecture 29/07/2026 *****************/


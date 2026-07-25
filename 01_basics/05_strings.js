// ******* Lec - 11 ***************//

const name="Avanish"
const repoCount = "4";

//console.log(name + repoCount+"Value");
// the below is string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Avanish-ydv')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "  Avanish  "
console.log(newStringOne);
console.log(newString.trim()); /* ye extra spaces ko remove kar deta hai */

const url ="https://avanish.com/avanish%20ydv"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split());

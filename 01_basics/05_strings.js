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

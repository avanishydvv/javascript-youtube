// lec-8

// Primitive Data types

// 7 types : String,Number,Boolean,Null,undefined,Symbol,
// BigInt 

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('321')
// const anotherId = symbol('321')

// console.log(id === anotherId);

// const bigNumber = 36756368368768558n





//Reference(Non-Primitive)

// Array,Objects,Functions

// const heros = ["shaktiman","doga","b=naagraj"];
// {
//     name:"avanish";
//     age:20;
// }

// const myFunction=function(){
//     console.log("Hello bro");
// }

// console.log(typeof heros)

// lec 10
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap(Non-primitive)
// copy milta hai ,    refrence milta hai 
let myYtName = "Avanish"

let anotherName = myYtName

anotherName= "Chaiaurcode"

console.log(anotherName);
console.log(myYtName);

let userOne = {
    email:"avn@gmail.com",
    upi: "user@axl",
}
let userTwo = userOne
userTwo.email="Hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

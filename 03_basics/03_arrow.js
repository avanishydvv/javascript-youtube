/********************* LEC 23 *****************/

const user ={
    username: "Avanish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }

// chai()

// const chai = function(){
//         let username = "Avanish"
//         console.log(this.username);
        
// }



// const chai = () => {
//     let username = "Avanish"
//     console.log(this);
    
// }


// chai()

// arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => ( num1 + num2 )

const addTwo = (num1,num2) => ({username: "Avanish"})

console.log(addTwo(3,6));

// const myArray = [2,5,6,8,9,4]

// myArray.forEach()

/************************LEC 23 completed ***********/
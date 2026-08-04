/************************ Lec 26 **********/
/*************** Control flow ***************/

// if

// const isUserLoggedIn = true;

// if(isUserLoggedIn){

// }
// const temperature = 401;

// if(temperature === 41){
//     console.log("less than 50");
    
// }else{ 
//     console.log("temperature is greater than 50");

// }



// comparison operator

/*
< , > , <= , >= , == , != , === , !==,

*/

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);

// }
//     console.log(`user power: ${power}`);


// const balance = 1000

//if (balance > 500) console.log("test"),console.log("test");

// upar implicit scope hai , laga ke multiple line likh sakte hai 
// generally 1 line me likhte hai last me ; ye laga ke band karte hai 

// nesting

// if (balance > 500 ) {
//     console.log("less than");
    
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else  {
//     console.log("less than 1200");
// }


const isUserLoggedIn = true 
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true 

if (isUserLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
    
}

if (loggedInFromGoggle || loggedInFromEmail) {
    console.log("User logged in");
    
}

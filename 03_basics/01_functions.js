/********************** Lec 19 *******************/
/// Functions
function sayMyname(){
console.log("A");
console.log("V");
console.log("A");
console.log("N");
console.log("I");
console.log("S");
console.log("H");
}

// sayMyname()

// function addtwoNum(num1,num2){    /* ye parameter hai jaha se value pass ho rahi hai */
//     console.log(num1+num2);
    
// }


function addtwoNum(num1,num2){    
    // let result = num1 +num2
    // return result

    return num1 + num2
    
    
}
const result = addtwoNum(3,5)   /* ye jo pass kar rahe wo argument hai */

// console.log("Result",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("Avanish")
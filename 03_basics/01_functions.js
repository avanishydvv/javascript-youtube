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

function loginUserMessage(username = "sam"){
    if(username===undefined){
        console.log("Please Enter a username");
        return
    }
    else{
    return `${username} just logged in`
    }
}

// console.log(loginUserMessage("Avanish"));
//console.log(loginUserMessage("Avanish"));    /*jab kuch pass nahi karte to undefined aata hai */

/*********** completed till Lec 19 ******************/
//////////////////////////////////////////////////////////////////////////////



/*******************Lec 20 ********************/

/**           ... = ye rest operator hai sab item ek bundel (array) me kar ke de deta hai  *****/

function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));


const user={
    username: "Avanish",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}
         and price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200,500,800,9000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,800,9000]));


/******************** Lec 20completed   30/07/2026 *****************/
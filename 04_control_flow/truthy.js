// const userEmail = []

// if (userEmail) {
//     console.log("got user Email");
    
// }else{
    //     console.log("Don't have user email");
    
// }

// falsy value
/*
false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN 
    in sab ke alawa sab truthy values hai 

    */ 

   // truthy value
/* 
"0" , 'false' , " " , [] ,{} , function(){} ,

*/

const userEmail = []
// if (userEmail.length ===0 ) {
//     console.log("array is empty");
       
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);


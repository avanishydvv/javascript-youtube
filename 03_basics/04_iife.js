// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();
// yaha last me semicolon lagega tabhi aage koi iife run hoga 
// global scope ke pollution ko hatane ke liye iife ka 
// istemmal kiya gay a () ye pahle me function wrap hai () dusre me 
// call ho raha hai immediately


// 2 IIFE ek sath likhne ke liye mujhe ek IIFE me ; semicolon lagana pageda


( (name) => {
    // ye unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ('Avanish')





/*********************** LEC 24 COmpleted 02/08/2026 *******/


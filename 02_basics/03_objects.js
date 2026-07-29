// ************* lec 16 *********/ 
/*********** Objects  ***************/
//Object Create
//Singleton

// Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Avanish",
    "full name": "Avanish Yadav",
    [mySym] : "myKey1",
    age: 19,
    location: "Gorakhpur",
    email: "Avanish@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

// JsUser.email = "avn@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "Hitesh@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
/******************* completed till Lec 16 ****************/
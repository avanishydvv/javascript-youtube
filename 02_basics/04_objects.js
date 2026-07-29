/****************** Lec 17 **************/

//const tinderUser = new objects()
const tinderUser={}

tinderUser.id= "1234abc"
tinderUser.name = "Samay Raina"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email:"avn@bit.ac.in",
    fullname: {
        userfullname: {
            firstname: "Avanish",
            lastname: "Yadav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 4: "b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1[1],...obj2}     /* Most usable glass tut gaya format */
// console.log(obj3);


const users = [
    {
        id: 45,
        email: "hotmail@yahoo.com"
    },
    {
        id: 45,
        email: "hotmail@yahoo.com"
    },
    {
        id: 45,
        email: "hotmail@yahoo.com"
    },
    {
        id: 45,
        workEmail: "hotmail@yahoo.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));             /* Most importtant to extract keys */
// console.log(Object.values(tinderUser));            
// console.log(Object.entries(tinderUser));            

console.log(tinderUser.hasOwnproperty('isLoggedIn'));

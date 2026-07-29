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

const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);

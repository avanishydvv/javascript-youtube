const { useActionState } = require("react");

/*************** Lec 40 Promises *******************/
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // db calls,cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// 2nd method 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"avanish",
            email:"avn@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"hitesh",password:"12345"})
            
        }
        else{
            reject('ERROR : Something went wrong')
        }

    },2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username 
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
})



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

/************************ Lec 29  ***************/

// for of 

// ["","",""]
// [{},{},{}]


// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello Avanish"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
// map.set('IN',"India")  also filter duplicate values
map.set('Fr',"France")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
    
}

const myObject ={
    'game1': 'FPS',
    'game2': 'BGMI',
    
}

// for (const [key,value] of myobject) {
//     console.log(key,':-',value);
    
// }


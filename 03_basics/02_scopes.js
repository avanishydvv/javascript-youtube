/****************** lec 21  *********************/
// Scope

//var c = 300
// let a = 300

// if(true){ 
//     let a = 10
//     const b = 20
//     //console.log("Inner",a);             /* Block Scope */
    
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



//console.log(a);           
//console.log(b);
//console.log(c);


/******************Completed till Lec 21   30/07/2026 ******************************/

/********************* LEC 22 ********************/

function one(){
    const username = "Avanish"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username = "Avanish";
    if(username="Avanish"){
        const website = " Youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
}
//console.log(username);

/**************************** Interesting concept  **************/


function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)

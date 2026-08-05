/********************** Lec 27  **************/

// for loop

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);
//     if (element== 5) {
//         console.log("5 is the best number");
        
//     }
    
//     console.log(element);
// }

//console.log(element);

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    
    for (let j = 0; j < 10; j++) {
        
        //console.log(`Inner loop ${j} and inner loop ${i}`);
        console.log(i + '*' + j +  '=' + i*j);
        
        
    }
    
}
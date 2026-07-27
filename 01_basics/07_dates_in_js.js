/*********** Lec - 13 *******************/
/*********** Date and Time*******************/

let myDate = new Date()
// console.log(myDate.toString());   /*Sun Jul 26 2026 15:30:44 GMT+0530 (India Standard Time)*/
// console.log(myDate.toISOString()); /*2026-07-26T10:00:44.672Z */
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);  // object//

// let myCreatedDate = new Date(2026,0,24)  /*monts starts from 0 */
//let myCreatedDate = new Date(2026,0,24,5,6)  
//let myCreatedDate = new Date("2023-01-14")  
let myCreatedDate = new Date("01-14-2026")  
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


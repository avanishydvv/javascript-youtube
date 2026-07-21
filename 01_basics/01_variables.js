const accountId = 14451
let accountEmail = "avn@gmail.com"
var accoutpassword = "12345"
accountcity = "Gorakhpur"
let accountState; /* ye udefined aayega output me  */

//accountId = 2 // not allowed

accountEmail = "asd@gmail.com"
accoutpassword = "1274"
accountcity = "kota"

console.log(accountId);

/*
prefer not to use var:
because of issue in block scope and
 functional scope


*/

console.table([accountEmail,accountId,accoutpassword,accountcity,accountState])



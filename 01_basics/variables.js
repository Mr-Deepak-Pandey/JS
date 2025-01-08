const accountId=13232;
let accountEmail="example@some.com"
var accountPassword="12345"
accountCity="Raipur"

//accountId=3 //not allowed bcz constant
accountEmail="example2@some.com";
accountPassword="5678";
accountCity="Delhi";
console.log(accountId);
/*
always prefer to use let instead of var to declare variables because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity])



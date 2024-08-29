// console.log(2>1)
// console>log(2>=1)
// console.log(2==1)
// console.log(2<1)

// console.log("2">1);  //true type conversion
// console.log("02">1)   //true

console.log(null>0)
console.log(null==0)
console.log(null>=0)
//The reason is that an equality check == and comparisons (>,<,<=,>=) work diiferently
//Comparisons convert null to a number,treating it as 0.
//that's why null>=0 is true and null>0 is false


console.log(undefined==0)//false 
console.log(undefined>0)//false
console.log(undefined<0)//false

//=== strict check it also compares datatype with value

console.log("2"==2)//true
console.log("2"===2)//false as different datatype

//so the main summary is always try to avoid the comparisions in which type conversion involves in javascript....as we have focus on writing business logic not on handling what type of type conversion here takes place

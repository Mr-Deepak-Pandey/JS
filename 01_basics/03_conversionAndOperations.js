let score="33abc";

console.log(typeof score);
console.log(typeof(score));

let value=Number(score);
console.log(typeof value)
console.log(value)

//datatype conversion to int
//"33"=>33
//"33abc "=>Nan
//true=>1, false=>0
//null=>0
//undefined=>Nan

let val="deep"

let bool=Boolean(val)
console.log(typeof bool)
console.log(bool)

//datatype conversion to boolean
//1=>true 0=>false
// ""=>false
//"deep"=>true

let num=33
let str=String(num)
// console.log(typeof str)
// console.log(str)

// ********************Operations ********************
let value1=3
let negvalue =-value1
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)


let str1="hello"
let str2=" Deepak"
let str3=str1 +str2
console.log(str3)


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2)//agar pehle string hai toh sbhi ko string ki trah treat kiya jayega
console.log(1+2+"2")//agar string baad me hai toh pehle conversions ho jayega

//refer to ecma standards(tc39)  abstract operations for better understanding

// "https://tc39.es/ecma262/#sec-abstract-operations"


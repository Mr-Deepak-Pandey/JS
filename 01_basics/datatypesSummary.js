//primitive data types

//7 types: String ,Number ,Boolean,null,undefined,Symbol,BigInt
//In primitive type call by value


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.




//Reference type(Non primitive)

//Array,Objects,Functions
//ye sbb reference type (Call by reference)

const car=["honda city","dzire","Scorpio"];

let myObj={
    naam:"Deep",
    age:22,

}

const MyFunction=function(){
    console.log("Hello duniya")

}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// Type of val                                          	Result
// Undefined =>	                                             "undefined"
// Null 	  =>                                                "object"
// Boolean   =>                                        	"boolean"
// Number 	   =>                                             "number"
// String 	   =>                                       "string"
// Object (native and does not implement [[Call]]) =>	 "object"
// Object (native or host and does implement [[Call]]) =>	"function"
// Object (host and does not implement [[Call]]) =>	Implementation-defined except may not be "undefined", "boolean", "number", or "string".





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive type)  by value    ,Heap(Non-primitive type) by reference
let aName="Abhi"
let otherName=aName;
otherName="Ram"

console.log(aName)
console.log(otherName)


let userOne={
    email:"abs@gmail.com",
    upi:"xy@ybl",

}

let userTwo=userOne

userTwo.email="def@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

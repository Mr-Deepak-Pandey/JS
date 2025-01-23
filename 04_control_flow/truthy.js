//truth values jisko assume kr liya jaata hai ki true hi hogi
//falsy values: jisko assume kr liya jaata hai ki false hi hogi

const username="hbhjebjh"
const str=""
if(username){
    console.log("true")
}

if(!username)
    console.log("false")
    

//falsy values
// false,0,-0, BigInt me 0n, "",null,undefined,NaN
//inn sbko falsy maana jaata hai

//baaki sbb true
//truthy values
//"0",'false'," "(space hai string me empty nhi hai), [],{},function(){}
//toh empty array ,empty string ,empty function sbb truth values hoti hai

//to check if array is empty
const arr=[]
if(arr.length===0)
{
    console.log("Array is empty")
}

const emptyObj={}
//Obejct.keys()//saare keys ko array me return kr deta hai

if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty")
}

//ye teeno true hai
//false==0
//false==''
//''==0


//+++++++++++Nullish Coalescing operator(??): null undefined+++++++

// null aur undefined ke liye use hota hai
// maan lo hum database se jo value return  ho rhi thi woh nhi hui aur null ya undefined aa gya toh unn cases ko handle krne ke liye
let val1;
//val1=10??15
//val1=null??10
val1=undefined??45

console.log(val1)

let val2;
val2=null??5??10;
console.log(val2) //jo null ke baad pehli value milti hai wahi le lete hai

//NULLISH coalescing operator aur ternary operator dono alg hai

//ternary operator
//condition > if true:if false

const price=100

price<=100?console.log("less than or equal to 100"):console.log("greater than 100")
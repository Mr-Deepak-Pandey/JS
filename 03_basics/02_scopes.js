
let a=200
var c=300
if(true){
    let a=100
    const b=20
    var c=30
    console.log("Inner:",a)
}
//console.log(a); not defined aayega a kyonki out of scope
//console.log(b);//same not defined aayega
console.log(c);//pr ye 30 dega block scope ke baahar hone ke baad bhi..
//yhi hai problem var ki iss liye hi use nhi krna isse
//use let

//jo {} ke andar likthe hai woh hotya hai apna block scope
//baahar apna poora hota hai global scope


console.log(a)

//Important note: jb hum windows me browser me console me jaakr scope check krte hai  aur jb hum environment me node ka sue krke scope cchek krte hai toh dono alag hai 



//nested scopes

function one(){
    const userName="deepak"

    function two(){
        const website="youtube"
        console.log(userName)
    }
    //console.log(website)//ye nhi chlega kyonki out of block space
  
    two()//chal jayega
}
//child function parent function ke variables ko use kr paata hai kaafi hdd tkk issi ko closure kehte hai..but there is more into it..we will studdy it in detail while studying DOM

one()
//jb bhi hum aise functions bnate aur nestedly call hote hai toh unke liye ek alg se stack bnta hai ki kya scope hai kaise cal hoga ...baad me dekhenge detail me


if(true)
{
    const username="deepak"
    if(username==="deepak")
    {
        const website =" youtube"
        console.log(username + website)
    }
    //console.log(website)//nhi chlega
}
//console.log(username)//nhi chlega




//++++++++++++++++++++++++++++Interesting+++++++

//different ways to define functions


console.log(addOne(8))
//ye ek tareeka hai function define krne ka
//jb iss method se define krte hai toh even hum function ke initialization ke pehle bhi function ko call kr skte hai
function addOne(num)
{
    return num+1
}
console.log(addOne(5))



//console.log(addTwo(9)) //gives error
//ek method ye hai aur isko kbhi kbhi expression bhi bol dete hai 
//but isme hum function definition ke pehle function call nhi kr skte
const addTwo=function(num){
return num+2;
}
console.log(addTwo(5))

//JS me ek concept hai hoisting
//hoisting : ki function kaise declare hote hai,kaha rkhe jaate hai,kya unka execution context hai,kis trah se variables ko JS treat krti ai,kaise ek  tree bnati hai jaha prr saare variables rkhe jaate hai saare functions rkhe jaate

//aage pdhenge in detail  about hoisting
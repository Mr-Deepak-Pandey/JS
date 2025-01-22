
function sayMyName(){
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
}

//sayMyName //ye hogya function reference
sayMyName()//ye ho gya execution function call

//functions ki jb definition bnate hai toh uske andar jo values passs hotu hai usko bolte hai parameters


// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2)
// }
// addTwoNumbers()//gives NaN as No parameters passed
// addTwoNumbers(5,9)//call krte waqt jo pass krte hai unko bolte hai arguments

// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,"a")//3a
// addTwoNumbers(3,null)//3

// const result=addTwoNumbers(3,5)
// console.log(result)//undefined aayega bcz we haven't returned anything from function

function addTwoNumbers(number1,number2)
{
    // let result=number1+number2
    // return result;

    return number1+number2;
}

const result=addTwoNumbers(3,6)
console.log(result)//9

function userLoginMessage(username){
    if(username===undefined)
     {   console.log("Please enter username")
     return
    }
    return `${username} just logged in`
}

console.log(userLoginMessage('Deepak'))//Deepak just logged in
console.log(userLoginMessage())//kuch paas nhi kiya undefined
//output:undeined just logged in
console.log(userLoginMessage("abcde"))


function multiply(number1=2,number2=5)
{
    return number1*number2
}
console.log(multiply())//kuch pass nhi krenge toh default values le lega
console.log(multiply(8,9))//pass krenge toh override kr dega



//Rest operator(...) same representation as spread operator...so it deends on the usecase whether to call it rest or spread

//when you don't know ho many arguments will be passed

function calcCartPrice(num1)
{
    return num1
}

console.log(calcCartPrice(100))//100
console.log(calcCartPrice(200,300,500))//pehli value ko num1 me le leta hai bss

//rest operator lga diya
function calcCartPrice1(...num1)
{
    return num1
}
console.log(calcCartPrice1(200,200,500,1000))//ab kitni bhi value pass kr do rest operator handle kr lega 

function calcCartPrice2(val1,val2,...num1)
{
    return num1
}
console.log(calcCartPrice2(100,200,344,50,900,1000))//ab yha pe pehli do value val1 aur val2 me chali jaati hai baaki num1 me jaati hai 
//o/p: [344,50,900,1000]


//Passing objects as parameters
const user={
    userName:"Deepak",
    Price:200
}

//iss trah ke methods me jha hum objects handle krr rhe hai waha typesafety check krni pdti hai brfore performing operaion
//ki whether jo values hum extract krna chah rhe hai object se woh actual me hai ki nhi
//aur jo argument pass kr rhe hai woh object hai ki nhi
//Typescript me ye direct ho jaati hai
//In js can be done using if else or some extra code
function handleObject(anyObject)
{
    return `Username is ${anyObject.userName} and the price is ${anyObject.price}`
}

console.log(handleObject(user))
console.log(handleObject({
    userName:"robin",
    price:89
}))//direct yha pe bhi pass kr skte hai object create krke

const myNewArray=[300,599,200,100]

function returnSecondValue(anyArray){
    return anyArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([900,500,200,800]))
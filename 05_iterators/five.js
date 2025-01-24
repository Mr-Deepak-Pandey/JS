//for each loop

const coding=['Js','c++','php','Java','ruby','go']

//for each loop pehle se hi inject aata hai array prototype me


//for each
//Syntax: forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.


// Performs the specified action for each element in an array.
//ye ek high order array loop hai

// coding.forEach( function (item){
// console.log(item);
// })

//abb arrow function using as call back function

coding.forEach( (item)=> {
    console.log(item)
})


function printMe(item){
console.log(item)
}
//ab iss function ko bhi as a callback function pass kr skte hai hum

coding.forEach( printMe)//sirf reference paas krna hai function ka function call nhi krna andar


//for each me sirf ek parameter nhi hota teen hote hai {item,index,array}
coding.forEach( (item,index,arr)=>{
    console.log(item ,index,arr);
})


//abb array of objects

const myCoding=[
    { languageName:"Js",
        languageFullName:"Javascript"

},{
    languageName:"C++",
    languageFullName:"C plus plus"
}
,{
    languageName:"Py",
    languageFullName:"Python"
}
]


//theek ab isko access krna hai

myCoding.forEach( (item)=>{
    console.log(`${item.languageName}'s fullname is ${item.languageFullName}`)
})
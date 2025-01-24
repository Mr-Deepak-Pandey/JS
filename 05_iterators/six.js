//for each loop 
const coding=['Js','c++','php','Java','ruby','go']


//toh ye jo for each loop hota hai apna ye kuch return nhi krta chaahe hum call back function se return kre ya na kare
const copy=coding.forEach( (item)=>{
 //console.log(item)
 return item;
})

console.log(copy)


//filter
//syntax :1/2
// filter(predicate: (value: string, index: number, array: string[]) => value is string, thisArg?: any): string[]
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


// Returns the elements of an array that meet the condition specified in a callback function

//filter return krta hai
// aur ye bhi call back function ko leta hai
const number=[1,2,3,4,5,6,7,8,9,10]
// const numberReturn=number.filter( (num)=> num>4)

const numberReturn=number.filter( (num)=>{ return num>4})
console.log(numberReturn)

//ab filter me andar callback function me return accordingly implicit return ya explicit return ke hisab se krts hai

//maan lo agar implicit return kr rhe yaani parenthesis se toh direct return kr deta hai
//pr agar hmne curly braces lgaye toh scope aa jaata hai hme value return krni pdegi

//aur usingfor each hi krna hai toh hme new array leke usme hi push krna pdega

const newNums=[]
number.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }

})

console.log(newNums);
//both ways are good use whichever you find more convenient


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks=books.filter( (bk)=> bk.genre==="History")

let userBooks=books.filter( (bk)=> 
    { return bk.publish>=1995 && bk.genre==="History"})
    
  console.log(userBooks)
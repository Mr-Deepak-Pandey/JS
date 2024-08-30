//array

const myArr=[0,1,2,3,4,5,6]
console.log(myArr[1])
const myHeroes=["shaktiman","naagraj"]
console.log(myHeroes)

const myArr2=new Array(1,2,3,4,5)
console.log(myArr2)


//Array methods
// myArr.push(7)
// myArr.push(8)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

myArr.unshift(9)//like push pushes 9 but in starting
console.log(myArr)

myArr.shift()
console.log(myArr)//like pop,,,bt pops from starting

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

const newArr=myArr.join()//join coverts the array into comma seperated string
console.log(newArr);

//slice ,splice

console.log("Normally myArr =",myArr);

const arr1=myArr.slice(1,3);//ek portion nikal dega index 1 se le kr 3 tk prr 3 ko nahi lega usme
console.log(arr1)

console.log("After slicing myArr= ",myArr);

const arr2=myArr.splice(1,3);//splice kya krta hai ki woh given index waale portion ko return kr deta hai aur dono starting aur ending index ko include krta hai..
//aur original array me se spliced portion ko hta bhi deta hai smjha bachua


console.log(arr2);

console.log("After splicing myArr= ",myArr);






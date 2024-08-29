const name="Deepak"
const repoCount=30;

console.log(name + repoCount +"Value")

//string interpolation
//using back tick
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("deepak-Pan-dey")
//string object hai toh value key value pair me store hogi
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())


console.log(gameName.charAt(2));//bracket me index paas krte hai to check char at that index

console.log(gameName.indexOf('e'))//to check index of given characte

//ye pehle starting index aur doosra length
const newString=gameName.substring(0,4);
console.log(newString);


//slice negative value  bhi le leta hai starting index ki yaani reverse me pichre se bhi count krke
//yha length 8 thi toh starting -8 diya hai
const anotherString=gameName.slice(-8,4)
console.log(anotherString)


const newStringOne="     deep   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://deepak.com//deepak%20pandey"

console.log(url.replace('%20','-'));//replaces the value paased by searching it with the desired value

console.log(url.includes('deepak'))//checks if the string contains the value passed in parenthesis and return true or false

console.log(gameName.split('-'));//splits the string on the basis of separator and gives an array





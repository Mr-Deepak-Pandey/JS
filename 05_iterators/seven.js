const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//map 
// const newNums=myNumbers.map( (num)=> num+10)

//filter me woh automaticaaly filter kr deta hai jo condition satisfy krte hai unhi values ko bhejta hai
// pr map me woh sbb pr iterate krega hi krega
// aur aisa nhi hai ki sirf jo values condition satisfy kr rhe unko filter kr dega
const newList=myNumbers.map( (num)=>num>4)
console.log(newList)
const newNums=myNumbers.map( (num)=> {
    return num+10})
console.log(newNums)


//chaining 
//ab ek saath do ya do se zyada methods ko (map ya filter unko chain kr skte hai)
//toh chaining me pehle ka result subsequently agle ko paas kr dete hai

const new1=myNumbers.map( (num)=> num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>40);

console.log(new1)
//smjha bachua simple

 //dates
 let myDate=new Date()

//  console.log(myDate)
//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString())

 console.log(typeof myDate)

//different ways to declare date
 //let createdDate=new Date(2023,0,12)
 //let createdDate=new Date(2023,0,12,10,12)
 //let createdDate=new Date("2023-10-30")
 let createdDate=new Date("03-24-2024")

 console.log(createdDate.toLocaleString());

let myTimeStamp=Date.now()//gives value in milliseconds from 1 january 1970 se abhi tkk ka
console.log(myTimeStamp)
console.log(createdDate.getTime())//gives time of date by calculating it in milliseconds

console.log(Math.floor(Date.now()/1000))//to convert time into seconds
 

let newDate=new Date();
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)//as starts from 0
console.log(newDate.getTime())


newDate.toLocaleDateString('default',{ weekday:"narrow"})
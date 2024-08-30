//singleton
//jbhi hum object constructor se bnate hai tbb woh singleton bnta hai
//aur jbb bhi hum object literals se bnate hai tbb woh singleton nahi bnta uske multiple instace bnte hai

//dono tarikke se object hi bnta hai ..koi performance improvement bhi nhi hota bss wahi singleton ka diiference rehta hai

// Object.create() //constructor method yhi singleton bnta hai

//normal ek symbol define krnge aapan yha
const mySymbol=Symbol("keySym");

//object literals
const Jsuser={
    name:"Deepak",
    "Full name":"Deepak pandey",
    [mySymbol]:"myKey123",//abb jb hame symbol ko as a key use krna hota hai object ke andar tbb hum uss symbol ko [symbol] ke andar likh dete hai ... ye syntax hai
    age:22,
    location:"Raipur",
    email:"abcd@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Sunday"]

}
//Andar saare keys ko as a string hi trat krte hai system me

console.log(Jsuser.email)

//better way to access objects
console.log(Jsuser["email"])//string ki trah hi dena pdega key ko

console.log(Jsuser["Full name"]);

//to access the symbol passed as a key
console.log(Jsuser[mySymbol])//bbs simple sa uss symbol ko directly paas krr dena hai square brackets me without ""

Jsuser.email="def@gmail.com"

//Object.freeze(Jsuser)//jbb hum chaahe ki value update na ho tbb freeze kr do usko

Jsuser.email="xyz@gmail.com"//yha value update nahi hogi kyonki hmne freeze kr diya tha object ko
console.log(Jsuser);
  
//adding functions to objects 
Jsuser.greeting= function(){
    console.log("Heloo Js user")
}

console.log(Jsuser.greeting())

Jsuser.greetingTwo=function(){
    console.log(`Heloo Js user ,${this["Full name"]}`)//string interpolation
}

console.log(Jsuser.greetingTwo())




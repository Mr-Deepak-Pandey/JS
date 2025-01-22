//singleton objects

const tinderUser=new Object();//singleton bnega object using constructor hai kyonki

//const tinderUser={}//aise bnayega toh singleton nhi bnega

//console.log(tinderUser) //empty object

tinderUser.id="123def"
tinderUser.name="Darren"
tinderUser.isLoggedin=false;

//console.log(tinderUser)

//Nested Objects

const regularUser={
    email:"abcz@def.com",
    fullName:{
        userFullName:{
            first:"Deepak",
            last:"pandey"
        }
    }

}

console.log(regularUser.fullName.userFullName.first)
//there is a thing called optional chaining (?) jisk a ude krte jhai aise obejct ke andar object ko access ko krte waqt .. 

//to concqatenate two objects
const obj1={ 1:'a' , 2:'b'}
const obj2={3:'a',4:'b'}

// const obj3={obj1,obj2}
// console.log(obj3)//Dono as an object obje3 ke andar aa jate hai  

// const obj3=Object.assign(obj1,obj2)//return krta hai value isliye obj3 me store kr rhe\
//Object.assign() ke andar pehli value hmari target hoti hai,baaki source toh saari values target ke andar copy ho jaati hai

const obj3=Object.assign({},obj1,obj2)//aise kre toh zyada shi rehta hum ek empty object le lete hai uske andar saari values aa jaati hai
console.log(obj3)

//spread operator
const obj4={...obj1,...obj2}
console.log(obj4)


//databses mostly returns data as an array of objects

//iss type me
const users=[
    {
        id:"2345",
        email:"def@gmail.com",
        isLoggedIn:false
    },
    {

    },{

    },
    {

    },
    {

    }
]

users[0].email//toh bss array ki trah index ko access kr skte hai aurr aage dot lga ke phir object waala method

console.log(tinderUser)

console.log(Object.keys(tinderUser))//keys ko as an array return kr deta ahi

console.log(Object.values(tinderUser))//values ko 
console.log(Object.entries(tinderUser))//return as array of array ,key value pair ko array bna deta hai

 console.log(tinderUser.hasOwnProperty('isLoggedin'))//checks whether object has that property or not



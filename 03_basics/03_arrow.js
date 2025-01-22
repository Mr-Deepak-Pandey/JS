const user={
    username:"deepak",
    price :999,
    welcomeMsg:function(){
        console.log(`${this.username},welcone to website`)
    }

}
//toh jo bhi hmara current context ko refer krna  hai tbb hum use krte hai this
//context se mtlb hai simple values ki uss time pe uske andar jo variables hai woh kya kya value hold kr rhe hai

// user.welcomeMsg //kuch nhi aayega kyonki function call nhi kiya sirf reference hai

// user.welcomeMsg()//Hitesh,welcome to website
// user.username="sam"
// user.welcomeMsg()//ab current context change kr diya hmne
// //toh ab sam,welcome to website dega 


const user1={
    username:"deepak",
    price :999,
    welcomeMsg:function(){
        console.log(`${this.username},welcone to website`)
        console.log(this)//simple this likh du toh kya context hai
    }

}

user1.welcomeMsg();
user1.username="deep"
user1.welcomeMsg()

console.log(this)//yha pr empty {} dega 
//kyon ki yha pr hum node ka use krke code environment me run kr rhe hai
//aur hmara node ke andar global ka kuch context hi nhi hai mtlb global scope pe kuch hai hi nhi empty hai

//lekin
//ab pehle kya hota tha hmra JS browser pe hi run hota tha sirf ussi ke andar engine merged hota tha JS run krne ke liye
//pr abb hmare paas standAlone JS environments ya engines hai run krne ke liye jaise ki node ya dino

//toh hum jbb yhi console.log(this) window broser ke console pe krenge toh waha empty nhi dega
//waha window{} dega kyonki waha jo hmara window hai woh global object hai 


// function chai()
// {   
//     let username="deepak"
//     //console.log(this)//bhut saari cheeze deta hai yaani kuch toh global context hai
//     console.log(this.username)//ye undefined output deta hai

//     //yaani hum this ko functions me aake aise use nhi kr paa rha hu ye sirf objects me kaam kr rha hai

// }
// chai()

//aise define krte hai functions ko tbb bhi yhi deta hai
// const chai1=function(){
//     let username="deepak"
//     console.log(this.username)
// }
//chai1()

//

//function keyword ko hta ke aise arrow lga do bnngya arroow function
const chai=()=>{
    let username="deepak"
    console.log(this.username)//yha pe bhi undefined aar rha
    console.log(this)//yha empty parenthesis aa rha


}
chai()

//Basic Syntax of arrowFunction
//()=>{}

    // normal arrow function
    //explicit return:JB return lggana pdd rha
    // const addTwo=(num1,num2)=>{
    //     return num1+num2
    // }

    // IMplicit return
    // const addTwo=(num1,num2)=> num1+num2
    //yaa toh aise likh lo
    const addTwo=(num1,num2)=>(num1+num2)
    //simple aise ki curly brces use kiye toh return kiya aur parenthesis use kiye toh direct aise hi IMplicit return

    console.log(addTwo(4,5))

    //ab maan lo aise hi agar object return krna ho toh

    // yha kuch return nhi krta udefined
    const printName=()=> {username:"deepak"}

    console.log(printName())//aise undefined dega kyonki yha implicit return ke liye object ko parenthesis me wrap krna hi pdega
    
    //ye return krega wrap kr diya parenthesis me
    const printName1=()=> ({username:"deepak"})
    console.log(printName1())


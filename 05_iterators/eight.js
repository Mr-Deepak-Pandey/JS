//about reduce 

const myNums=[1,2,3,4,5,6,98]

//smjha ye toh ho gyi working reduce ki in detail

// const total=myNums.reduce( function (accumulator,currVal){
//     console.log(`accumulator : ${accumulator} and Current value:${currVal}`);

//     return accumulator+currVal;
// },0)//ye last me ,0 hum accumulator ko value initialise krne ke liye dete hai

//  console.log(total)

//ab in short using arrow Function
const myTotal=myNums.reduce( (acc,currVal)=> acc+currVal,0)//implicit return kr rhe
console.log(myTotal)


const shoppingCart=[
    {
        itemName:"Javascript course",
        price:999

    },
    {
        itemName:"Java dev course",
        price:9999

    },
    {
        itemName:"Python course",
        price:799

    },
    {
        itemName:"Fullstack dev course",
        price:12999

    },
]
//ye ho gya simple array of objects pe
const totalPrice=shoppingCart.reduce( (acc,item)=> acc+item.price ,0)

console.log(totalPrice)
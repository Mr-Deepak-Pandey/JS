//for of

// ["","",""]
// [{},{},{},{}]

const arr=[1,2,3,4,5,6,7,8]

//syntax
// for (const element of object) {
    
// }

for(const val of arr)
{
    console.log(val)
}

const greetings="hello world"

for(const greet of greetings)
{
    console.log(`each char of greetings are ${greet}`)
}


//MAps
//The MAp object holds the key value pair and remembers the original insertion order of the keys.Any value(both objects and primitive values ) may be used as either a key value pair
//contains unique key value pairs
//duplicate nhi store krta

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set("Jp","Japan")
map.set("IN","India")//doobara nhi jayega
//aur jis order me jayega maintain krke rkhega

//console.log(map)

// for(const key of map)
// {//aise array bna ke de deta hai key ,values ka
//     console.log(key)
// }
for(const [key,value] of map)
    {
        console.log(key,':-',value)
    }
    
//ab map pe iterate krne ke liye toh kaam kr rha hai for of

//object pe bhi check kr lete hai

const myObject={
    game1:"NFS",
    game2:"spiderman"
}


//toh ye nhi hota hai
//object is not iterable using for of 
// for(const [key,value] of myObject)
// {console.log(key,':-',value)

// }

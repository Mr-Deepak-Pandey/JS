const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

//for in loop

for (const key in myObject) {
   //console.log(key)//saari keys de dega
   console.log(`${key} is shortcut for ${myObject[key]}`)
}

//abb for in arrays pr lga ke dekthe hai

const pro=["js","ruby","C++","php","java"]

//toh yha hmara for in loop me key ko uthata hai
//aur for of loop me poori value ko uthata tha
for (const key in pro) {
   console.log(pro[key])
}


//ab mao pe lgaa ke dekthe hai for in loop

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United states of america")
// map.set("Jp","Japan")
// map.set("IN","India")


//ye nhi chalta hai kuch nhi deta 
//maps are not iterable 
//so iterable nhi hai toh aise for in loop nhi lga skte hum isme

// for(const key in map)
// {
//     console.log(key)
// }


//toh jbb bhi object aaye for in loop use kr lena
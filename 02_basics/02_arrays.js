//arrays
const marvel_heroes=["thor","Ironman","SpiderMan","captain"]

const dc_heroes=["SuperMan","BatMan","flash"]
//marvel_heroes.push(dc_heroes);//yha pr dcheroes waala array bhi as a array chla jayega marvel heroes ke andar
//aur js array hmara kisi bhi datatype ko le leta hai toh array ko bhi as a element le leta hai


//push jo hai hmara woh existing array me hi push kr deta hai
//pr agar concat krte hai toh dono array ko concat krne pe hme ek naya array return kkrta hai
//smjha bachua
console.log(marvel_heroes)
//console.log(marvel_heroes[3][1]);

const All_heroes=marvel_heroes.concat(dc_heroes)//isko ek naye variable me daalna pdega

console.log(All_heroes)  

//pr hame jb aise do arrays koo jodna hota hai toh hum spread use krte hai

const newHeroes=[...marvel_heroes,...dc_heroes]
console.log(newHeroes)


const arr4=[1,3,4,5,[0,9,3],6,[2,3,[4,1,11]]];
//ye ek array liya pan ne jisme aray ke andar array ke andar array hai theek hai
//tojh abb apan chahte hai ki aise hi ek array apan ko mil jaaye jisme saare elements aise hi aa jaaye baahar
//toh uske liye flat ka use kr le 
//flat kya krta hai apna:: to the maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const usableArr=arr4.flat(Infinity)//ab yha flat ke andar exact depth deni chahiye jaise yha 2 hai array ke andar aarray pr ab hum infinity de de rhe chal jaata hai woh bhi
console.log(usableArr)


console.log(Array.isArray("Deepak"))//check krega arry hai ki nahi

console.log(Array.from("deepak"));//yha pr ye dekhega jaise bhi array bnap payega given data type se waise hi bna dega

console.log(Array.from({name:" Deepak   "}))//yha given input se array nahi bna paaya isliye empty array de diya






 
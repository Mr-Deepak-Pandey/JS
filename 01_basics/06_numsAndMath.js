const score=400
console.log(score)

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber=123.345
console.log(otherNumber.toPrecision(4));

const hundreds=100000000;
console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-34))
// console.log(Math.round(4.3))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.1))
// console.log(Math.min(12,3,1,1,22))
// console.log(Math.max(234,12,3,1,2,4,5))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))
//Math.random() jo hai hmara woh 0 se 1 ke beech value deta hai theek hai
//prr abb maan lo koi situation hai hame 1 se 10 kee beech chahiye toh kya krenge ki...Math.random() ko *10 krr denge prr kai baar math.random() agar 0.04 ya aisi values bhi deta hai toh inko handle krne ke liye +1 bhi kr deta hai

//same wahi upar waale logic ka general way agar kahi pe use krna hai 

const min=100
const max=110

console.log(Math.floor((Math.random()*(max-min+1))+min))



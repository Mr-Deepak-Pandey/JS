//IIFE (Immeditely invoked function expression)
//jaise hi function likha usko turant execute krwana hai
//jo function immdiately execute ho jaaye
//BUt why?
//global scope ke pollution se problem hoti hai kai baar toh uss global scope ke variables se ya jo bhi waha functions hai uske pollution se bchane ke liye IIFE ka use krte hai

(function chai(){
    //named IIFE hai,kyonki function ka name hai
    console.log("Database connected")
})();
//yha pr IIFE function invoke toh ho jaata hai prr isko context nhi pta hai ki kaha pr stop krna hai 
//****************NOTE*****************
//isliye IIFE function ke end me isko end krne ke liye semicolon necessary hai

//Synatx:
// ()() pehle parenthesis me hum krte hai function definition  aur doosra parenthesis hai execution ke liye

( ()=> {//simple IIFe without function name
    console.log("Database two connected")
})();

( (name)=> {
    console.log(`My name is ${name}`)
})('Deepak');

//ye dhyan rkhna hmesh ki jb bhi fo IIFE likho ek saath toh IIFe ke baad semi colon lgana
//if

if(2=='2'){
console.log("executed")
}
if(2===2)
    console.log("same type")


//< ,>,<=,>=
// == check ki equal hai ki nhi
//!=
//=== ye equal ke saath saath type bhi check krta hai ki same hai ki nhi

const balance=1000
//implicit
//aise hum comma lga ke dono ko block space me laa skte hai if ke
//but not a good practice
if(balance>1000) console.log("test"),
    console.log("deep")

    const userLoggedIn=true
    const debitCard=true
    const loggedInFromGoogle=true
    const loggedInFromFb=false

    if(userLoggedIn && debitCard){
        console.log("allow to buy")
    }

    if(loggedInFromGoogle|| loggedInFromFb){
        console.log("user logged in")
    }
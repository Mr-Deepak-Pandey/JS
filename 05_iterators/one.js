//for loop

for(let i=0;i<10;i++)
{
console.log(i);
}

let myArray=["batman","flash","superman"]

for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i])
}

//break and continue

for(let i=0;i<20;i++)
{
    // if(i==5)
    // {
    //     console.log("detected 5")
    //     break
    // }
    if(i==5)
        {
            console.log("detected 5")
            continue
        }
    console.log(`value of i is ${i}`)
}

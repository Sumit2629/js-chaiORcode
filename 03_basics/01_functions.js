function sayMyName(){
    console.log("sumit")
    console.log("arora")
}
// sayMyName// this is reference
// sayMyName()// this is excution



// function addTwoNumbers(num1, num2){ // don't require to give type
//     console.log(num1 + num2)
// }

// nums1 and nums2 called parameters
// 2,3 are called arguments
// addTwoNumbers(2,3)
// addTwoNumbers(2,"3") //23 
// addTwoNumbers(2,"a") //2a
// checking require 


// const result=addTwoNumbers(3,5)
// console.log(result) // undefined


function addTwoNumbers(num1, num2){ // don't require to give type
    // let result=num1 + num2
    // return result

    return num1+num2
}

const result=addTwoNumbers(3,5)
// console.log(result) // know print 8



function loginUserMessage(username){//  if we write username="sam" this means giving default value then we don't need to do if statement
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    if(!username){ // same meaning
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sumit"))
// console.log(loginUserMessage()) //undefined
// after if it show message








// function calculateCartPrice(...num1){ // rest operator 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500,2000)) // this show only 200 but after rest operator it all store in an array


function calculateCartPrice(val1, val2, ...num1){ // rest operator 
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000)) // val1 and val2 stre 200 and 400 it print 500 and 2000



const user={
    username: "sumit",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({ // we can pass object inside function also
    username:"sam",
    price:399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 600, 800])) // we can pass array also



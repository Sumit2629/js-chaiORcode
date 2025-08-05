// const userEmail="sumit@gmail.com" // yes
// const userEmail="" // don't
const userEmail=[] // yes got user email

if(userEmail){
    console.log("got user email")
}
else{
    console.log("user don't have email")
}


// falsy values->

// false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN


// truthy values->

// "0" , 'false' , " "  , [] , {} , function(){} 



// to check object is empty or not

// const emObj={}

// if(Object.keys(emObj).length===0){   // Object.keys(emObj) -> we get all keys in emObj then we get length with the help of .length if it is equal to 0 print the message we want
//     console.log("object is empty");
// }



// nullish coalescing operator (??): null undefined

// let val1;
// val1=5 ?? 10
// console.log(val1); // 5
// val1=null ?? 10  // for tackling null or undefined 
// console.log(val1); // 10
// val1=undefined ?? 15
// console.log(val1); // 15
// val1=null ?? 10 ?? 20 // 10 after print









// terniary operator
// conditon ? true : false // syntax

const pri=100;
pri>=80 ? console.log("greater then 80") : console.log("less then 80");
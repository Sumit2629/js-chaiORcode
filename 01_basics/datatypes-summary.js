// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt




// Reference (Non Primitive)

// Array, Objects, Functions


// JS are dynamically typed means we don't need to declare that it is int, string etc


const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
// let userEmail;
// const id=Symbol('123') 
 const anotherId=Symbol('123') // they both are different id and anotherID
// console.log(id===anotherId);

// const bigNumber = 34534543532432349549n // exampleof BigInt

const heros=["shaktiman","naagraj","doga"] //array
let myObj={ // this is object syntax in key-value pair
    name:"sumit",
    age: 22, 
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);
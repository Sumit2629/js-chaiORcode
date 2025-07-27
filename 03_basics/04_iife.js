// Immediately Invoked Function Expressions (IIFE)

(function chai(){
console.log(`DB CONNECTED`)
})(); // when we wrap function in paranthesis this is iife means Imediate invokation
// global scope ke pollution se problem hoti ha kai baar to uss global scope ke pollution ko htane ke liye IIFE use kiya


( (name) => { // using arrow function 
    console.log(`DB connected two ${name}`)
} ) ('hitesh'); // semicolon mandatory to tell where to stop


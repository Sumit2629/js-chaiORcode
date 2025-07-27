const user={
    username: "sumit",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`); // this means current context means used all variables of scope
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam" // here we change value 
// user.welcomeMessage()// that's why it print sam

// browser ke andr global object window ha
// console.log(this); // empty


// function chai(){
//     let username="sumit"
//     console.log(this)
//     // console.log(this.username); // undefined
// }
// chai()





// const chai=function(){
//     let username="sumit"
//     console.log(this.username) // undefined
// }



// const chai = () => { // arrow function
//     let username="sumit"
//     console.log(this) // empty paranthesis
// }
// chai()




// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// console.log(addTwo(2,3))



// const addTwo = (num1, num2) => num1 + num2  // implicit

// const addTwo = (num1, num2) => (num1 + num2)  // No need to type return if we put {} then we have to use return

// const addTwo = (num1, num2) => ( {username:"sumit"})
// console.log(addTwo(2,3))



// Arrow functions do not have their own this.

// const obj = {
//   name: "Sumit",
//   greet: () => {
//     console.log(this.name); // undefined 
//   }
// };
// obj.greet();




// this is only for  learning
// const myArray= [2, 5, 3, 6, 7]

// myArray.forEach(() => {}) 
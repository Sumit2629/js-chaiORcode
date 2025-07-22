// we  have two types of memory Stack and heap

// ALL the primitive type use Stack memory and element which use stack memory it give copy of that  element

// ALL non-primitive use Heap memory and element which use heap memory it give reference to original value


// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)
// Array, Objects, Functions



// let myFname="sumit"
// let Aname=myFname;
// console.log(Aname)
// Aname="sumit arora" 
// console.log(Aname)
// console.log(myFname) // we don't give original value we only give copy of original that's why when we change Aname it doesn't change original myFname






let user1={
    email:"sumit@gmail.com",
    upi:"user@okaxis"
}
let user2=user1
user2.email="user2@gmail.com"
console.log(user1.email)
console.log(user2.email)  // this is object which is store in heap memory that's why when we change value in user2 it will change original value of user1
// singleton 
// object literals

// Object.create // isse bhi object bnn skta ha


const mySym=Symbol("Key1")


const JsUser={
    name:"sumit",
    "full name": "Sumit Arora",
    [mySym]:"myKey1", // syntx for symbol
    age: 20,
    location: "Rajpura",
    email: "sumit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])  we can use this we can't use dot method because it can't call full name

// console.log(JsUser.mySym) // datatype is not symbol
// console.log(typeof(JsUser.mySym)) // so we have to use square brackets

// console.log(JsUser[mySym])


// JsUser.email="sumit@google.com"
// Object.freeze(JsUser) // we can't change anything in this
// JsUser.email="sumit@microsoft.com"
// console.log(JsUser)




JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo= function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting()) // shows undefined
console.log(JsUser.greetingTwo()) // shows undefined
// let a=10
// const b=20
// var c=30

// {} // this is called function of that program

// var c=300
// let a=300
// if(true){
//     let a=10
//     const b=20
//     // var c=30
//     console.log("Inner: ", a)
// }


// console.log(a)
// console.log(b)
// console.log(c) // this is problem it print 30  // var is always global scope that why it always changed if we change value 






function one(){
    const username="sumit"

    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website) // this show error bcause website is local scope of two
    two()
}
one()


if(true){
    const username="sumit"
    if(username==="sumit"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website) // show  error print outside scope
}

// console.log(username) // show error print outside scope










//++++++++++++++++++     interesting     +++++++++++++++++++++
console.log(addone(5)) // we can write here also not show error
function addone(num){
    return num + 1
}
// console.log(addone(5))

// technique to declare functions

console.log(addtwo(5)) // this show error because it store in one variable
const addtwo = function(num){
    return num+2
}



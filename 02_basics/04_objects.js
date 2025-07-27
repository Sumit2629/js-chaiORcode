// const tinderUser=new Object()  // this is singleton object
//  const tinderUser={} // this is non singleton

// tinderUser.id="123abc"
// tinderUser.name="sumit"
// tinderUser.isLoggedIn=false;
// console.log(tinderUser)



// const regularUser={
//     email: "sumit@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"sumit",
//             lastname:"arora"
//         }
//     }
// }
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname?.userfullname.firstname) // ? to check if it exsists we can talk about it in future videos




// const obj1={1: "a", 2: "b"}
// const obj2={3: "a", 4: "b"}
// const obj4={5: "a", 6: "b"}
// // const obj3=Object.assign({}, obj1, obj2, obj4) // interesting // we use empty array to look code good and easy understandable it is not necessary but we can understand braces as target and fit the source in a target

// const obj3={...obj1, ...obj2} // spread operator
// // console.log(obj3)


// const users=[  // inside array object
//     {
//         id: 1,
//         email: "sumit@.com"
//     },
//     {
//         id: 2,
//         email: "sumit@.com"
//     },
//         {
//         id: 3,
//         email: "sumit@.com"
//     }
// ]

// console.log(users[1].email)
// console.log(tinderUser);


// console.log(Object.keys(tinderUser))  // we get all keys in array know we can also use loop to get all element iteration
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser)) // give entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isIn'))






const course={
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
// course.courseInstructor


const {courseInstructor: ins}=course // this is called obj destructour

console.log(ins) // we can extract value like this also


// this is for react
// const navbar=({company}) =>{ // this is only for learning uses in react destructuring 

// }
// navbar(company="sumit")




// {
//     "name":"sumit",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//this is data in format of JSON this is for learning



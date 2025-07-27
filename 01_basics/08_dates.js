// let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// console.log(typeof(myDate))  // object



// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString()) // month zero se shuru hotey ha javascript me



// let myCreatedDate=new Date(2023,0,23,3,5)
// let myCreatedDate=new Date("2023-01-14") // in this case we have to initialize month from 1

// console.log(myCreatedDate.toLocaleString())


// let myCreatedDate=new Date("01-14-2023")


// let myTimeStamp=Date.now()
// console.log(myTimeStamp)  // this isin milli second
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)); // to convert in seconds



let newDate=new Date();
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{  // importent 
    weekday:"long",
    month:"numeric",
    
})
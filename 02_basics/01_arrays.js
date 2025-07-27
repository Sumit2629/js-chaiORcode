const myArr=[0,1,2,3,4,5,true,"sumit"]  // array are resizable mixed types also allowed 
// console.log(myArr)
// console.log(myArr[6])

// // array make shallow copy when we copy element shallow copy means when we change in copy array it will change original array means it give reference

// const myHeros=["shaktiman","ironman"]

// const myArr2=new Array(1,2,3,4)
// console.log(myArr2[0]);


// Array Methods

// myArr.push(6) // push at last
// myArr.push(7)
// myArr.pop()  // remove last elememt

// myArr.unshift(9) // it add in start  // not optimize we have to shift one one character
// myArr.shift() // it remove starting element 

// console.log(myArr.includes(9)) // return false
// console.log(myArr.indexOf(9)) // -1
// console.log(myArr.indexOf(3)) // 3
// console.log(myArr)



// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)




//slice , splice

console.log("A ",myArr)

const myn1=myArr.slice(1,3) // in slice last index not included but not change original array
console.log(myn1)
console.log("B ",myArr)


const myn2=myArr.splice(1,3) // in this included 
console.log("C ",myArr) // in splice all portion remove from original array
console.log(myn2)
//  const score =400 // it detect auto that it is number 
//  console.log(score);

//  const balance=new Number(100) // but it is number when we print this this specially show number
// //  console.log(balance);



// console.log(typeof(balance.toString())); // string
// console.log(balance.toString().length); // it print length like 3 also we have more string property like concat charAt

// console.log(balance.toFixed(2)); // toFixed means after point numbers this return like 100.00

//  const otherNumber=23.8966  // it give 23.9
  const otherNumber=123.8966 // it give 124
// const otherNumber=1123.8966 // it give in exponential like 1.12e+3
// so we have to use precision carefully
// console.log(otherNumber.toPrecision(3)); // return number in type string it give roundof

console.log(otherNumber.toPrecision(4));  // 123.9 when we increse precision



// const hundreds=1000000
// console.log(hundreds.toLocaleString()); // this in US value
// console.log(hundreds.toLocaleString('en-IN')); // this in indian value




// ++++++++++++++++++++  MATHS  +++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6));// 5
// console.log(Math.ceil(4.2)); // return 5 choose top value
// console.log(Math.floor(4.9)); // return 4 choose bottom value


// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))


// console.log(Math.random()); // always value in between 0 and 1
// console.log((Math.random()*10)+1); // to get one decimal value we multiply with 1 and we also do +1 because if value is 0.1 then it returns 0 so know our minimum value is 1
// console.log(Math.floor(Math.random()*10)+1);  when we want one number

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // this is formula to get random number in between given two number
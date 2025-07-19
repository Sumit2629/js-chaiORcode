// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);



// console.log("2">1); both datatypes should be same it may vary result if two differnt datatypes are compared
// console.log("02">1);


// console.log(null > 0); // false
// console.log(null == 0); //false
// console.log(null >= 0); // predictable result not come it return true
/* the reason is that an equality check == and comparisons > < , >= <= work differnently
   comparisons to convert null to a number, treating it as 0.
   that's why(3) null>=0 is true and null>0 is false; 
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// === also check dataTypes with number also called strict check

// console.log("2" === 2); // false 
// console.log("2" == 2);  // true 



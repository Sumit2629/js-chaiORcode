const Fname="sumit"
const value=50
// console.log(Fname+value+ " value")   // this is old method we can prefer the method written on next line

// console.log(`Hi my name is ${Fname} and the value is ${value}`) // this is traditional method and we can prefer this to use

// to declare string we can declare
const game=new String("spiderMan");
// console.log(game);
// console.log(game[0]);
// console.log(game.__proto__); // we can also access prototype
// console.log(game.toLowerCase());
// console.log(game.toUpperCase());
// console.log(game.length);
// console.log(game.charAt(0));
// console.log(game.indexOf('d'));

// const newString=game.substring(0,5); // it print one less character and we don't use negative values in substring
// console.log(newString)

// const anotherString=game.slice(-8,4);  // only in slice we can use negative values  and also it print from reverse direction if we give negative values
// console.log(anotherString)


// const newString1="    sumit    ";
// console.log(newString1)
// console.log(newString1.trim()) // remove extra spaces


// const url="http://sumit.com/sumit%20arora"
// console.log(url.replace('%20','-'))

// console.log(url.includes('sumit'))
// console.log(url.includes('-'))




const subject=new String('Cse-java-DSA')

console.log(subject.split('-')) // use to convert string to array on based on anything like in this we use'-'
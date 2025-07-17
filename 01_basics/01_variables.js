const accountId=122323 // cannot be changed
let accountEmail="sumit@gmail.com"
var accountPass=1234  // we don't use it 
accountCity="Muktsar" // also we don't use this but this is possible
let accountState // it shows undefined

//accountId=2 // not allowed because const can't be changed  
accountEmail="asf#ds"
accountPass=123
accountCity="bengaluru"
// console.log(accountId)
// console.log(accountEmail)
// console.log(accountPass)
// console.log(accountCity)



console.table([accountId,accountEmail,accountPass,accountCity,accountState])


/* we don't use var because it is global scope means if we use var with name 
 and if anybody use name for different thing it will change both
 (because of issue in bloack scope and functional scope)
 */

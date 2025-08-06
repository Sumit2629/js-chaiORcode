// for of  loop
// const arr=[1,2,3,4,5]
// for(const val of arr){
//     console.log(val);
// }

// const greet="Hello sumit"
// for(const v of greet){
//     console.log(v);
// }







// Maps // only unique values and order maintain
const map=new Map()
map.set('Ind','India')
map.set('USA','United States of America')
map.set('Fr','France')
// console.log(map)



// for(const key of map){
//     console.log(key)
// }  give all map and one key and value in array

for(const [key,value] of map){
    console.log(key, ':-' ,value)
}
// key value not ru for objects

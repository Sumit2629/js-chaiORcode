const marvel_heros=["thor","Ironman","spideman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros) // it shows array inside array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros= marvel_heros.concat(dc_heros) // return new array 
// console.log(allHeros)



// const all_new_heors=[...marvel_heros, ...dc_heros] // spread operator

// console.log(all_new_heors)





// const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array=another_array.flat(Infinity) // concat array
// console.log(real_another_array)

console.log(Array.isArray("sumit"))
console.log(Array.from("sumit")) // convert value to array
console.log(Array.from({name:"sumit"}))  // interesting give empty array it doesnot recognise keys and values and value as an array


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)) // we can use .of also to put elements in an array
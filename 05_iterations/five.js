const coding =["js","python","ruby","java"]

// coding.forEach(function (i){
//     console.log(i)
// })

// coding.forEach((i)=>{
//     console.log(i)
// })


// function print(item){
//     console.log(item);
// }
// coding.forEach(print)





// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })



const mycoding=[{
    languageName:"JavaScript",
    languagefile:"Js"
    },
    {
    languageName:"Java",
    languagefile:"Java"
    },
    {
    languageName:"python",
    languagefile:"py"
    }
]

// mycoding.forEach((i)=>{
//     console.log(i)
// })

mycoding.forEach((i)=>{
    console.log(i.languageName)
})

mycoding.forEach((i)=>{
    console.log(i.languagefile)
})
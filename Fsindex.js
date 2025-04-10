//const fs =require('fs')
 
//sync operation
// fs.writeFileSync('./sample.txt',"Hello Aviral")
// fs.writeFileSync('./sample.txt'," kaise ho",{flag:"a"})

//async operation mei callback function dena hota hai jo error ko handle karte hai
// fs.writeFile('./sample.txt',"Hey Guys",(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("file written")
//     }
// })
//ab yaha se comment hatakar dekh sakte ho code kaise run hota hai sync aur async
// console.log(1)
// const result=fs.readFileSync('./Fssample.txt','utf-8')
// console.log(result)
// console.log(2)

// fs.readFile('./sample.txt','utf-8',(error,result)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(result)
//     }
// })
// console.log(3)

// //jab tak necessary na ho tab tak hamko async operation hi use karne hai


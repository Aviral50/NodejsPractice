// //creating nodejs server and sending html response also see routing in node js
// const http = require("http");
// const { json } = require("stream/consumers");

//const { error } = require("console")

// const server = http.createServer((req, res) => {
//   //res.setHeader('content-type','json')
//   if (req.url === "/") {
//     res.setHeader("content-type", "text/html");
//     res.write(`
//         <html>
//         <head>
//             <title>
//                 Aviral Mishra
//             </title>
//         </head>
//         <body>
//             <h1>Pranam Aviral</h1>
//         </body>
//     </html>)
//     `);
//     return res.end();
//   } else if (req.url === "/Products") {
//     res.setHeader("content-type", "text/html");
//     res.write(`
//             <html>
//             <head>
//                 <title>
//                     Aviral Mishra
//                 </title>
//             </head>
//             <body>
//                 <h1>Pranam Sagar</h1>
//             </body>
//         </html>)
//         `);
//     res.end();
//   }
// });
// const port = 3000;
// server.listen(port, () => {
//   console.log("server running at this port  http://localhost:3000");
// });


// const fs= require('fs')
// fs.readFile('text.js',(error,data)=>{//read file is asynchronous thats why first come hello i am aviral then come error
//   if(error)
//     console.log('error')
//   else
//   data
// })
// console.log('heelo ia am viral')

//const { error } = require('console')
// const fs=require('fs')        
// const a=fs.readFileSync('Fssample.txt','utf-8')//read file sync is synchronous
// console.log(a)  
// console.log('hello mr')

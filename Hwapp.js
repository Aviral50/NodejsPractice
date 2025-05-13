
const http = require('http');
const { type } = require("os");



const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.setHeader("content-type","text/html");
    res.write(`
        <html>
    <head>
    <title>hello avi</title>
    </head>
    <body>
    <h1>congratulations avi</h1>
    </body>
        </html>
        
        
        `)
        return res.end()
   }else if (req.url==='/home'){
    res.setHeader("content-type","text/html");
    res.write(`
        <html>
    <head>
    <title>hello avi</title>
    </head>
    <body>
    <h1>congratulations aviral</h1>
    </body>
        </html> `)}




})
const port=5000
server.listen(port,()=>{
    console.log("server running at this port http://localhost:5000")
})




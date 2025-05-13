const http=require('http')
const fs =require('fs') //for reading index.html file we add this

const home=fs.readFileSync('./index.html')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end('home')
    }
     if(req.url==='/home'){
        return res.end('<h1>Hello avi</h1>')
     }
})
const port=5000
server.listen(port,()=>{
    console.log('we now listen at http://localhost3000')
})
const http=require('http');
const 
const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Hello World</h1>");
});

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server is running on http://Localhost:${PORT}`);
});
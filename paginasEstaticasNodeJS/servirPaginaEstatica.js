const http = require('http')
const fs = require('fs')

const servidor = http.createServer((req, res)=>{

    if(req.url === '/' || req.url === '/index.html'){
        fs.readFile('index.html', (err, data)=>{
            if(err){
                console.log("Error: ", err)
                res.writeHead(404, { "Content-Type": 'text/html' })
                res.end('404 Not found 1')
            }else{
                res.writeHead(200, { "Content-Type": 'text/html' })
                res.end(data)
            }
      });
    }
        else{            
            res.writeHead(404, { "Content-Type": 'text/html' })
            res.end('404 Not found 2')
        }
});

const port = 4000

servidor.listen(port, () => {
    console.log(`Servidor web escuchando en el puerto ${port}`)
})
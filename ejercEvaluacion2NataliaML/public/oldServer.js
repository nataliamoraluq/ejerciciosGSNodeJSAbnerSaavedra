//PRACTICA EVALUADA 1 - NATALIA ML. - PAGS ESTATICAS CON NODEJS
//importaciones
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url')
//
let studentsList = []
//
const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url, true)
    if (req.method === 'GET' && (urlParsed.pathname === '/' || urlParsed.pathname === '/index.html')) {
        fs.readFile('./index.html', (err, data)=>{
            if(err){
                console.log("Error: ", err)
                res.writeHead(404, { "Content-Type": 'text/html' })
                res.end('404 Not found 1')
            }else{
                res.writeHead(200, { "Content-Type": 'text/html' })
                res.end(data)
            }
        });

        ///------------ fill and read JSON
        let newJson = {
            author:'Natalia ML - V.30.416.997',
            localeDate: new Date().toLocaleDateString()
        }
        //in the .json insert the data here
        fs.writeFile("./files/autor.json", JSON.stringify(newJson), (err, data) =>{
            if(err)
                console.error(err)
            else
                console.log("Json author here!")
        })
        
    }
    else if (req.url === '/styles.css') {
        const cssPath = path.join(__dirname, '/styles.css');
  
        fs.readFile(cssPath, 'utf8', (err, cssContent) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading CSS file.');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/css',
                });
                res.end(cssContent);
            }
        });
    }
    else if(req.method === 'GET' && urlParsed.pathname === '/autorJSON') {
        fs.readFile('./files/autor.json', (err, data)=>{
            if(err){
                console.log("Error: ", err)
                res.writeHead(404, { "Content-Type": 'text/json' })
                res.end('404 Not found 1')
            }else{
                res.writeHead(200, { "Content-Type": 'text/json' })
                res.end(data)
            }
        });
    
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada o método no permitido.');
    }
});

//const PORT = 3000;
// Iniciar el servidor en el puerto 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
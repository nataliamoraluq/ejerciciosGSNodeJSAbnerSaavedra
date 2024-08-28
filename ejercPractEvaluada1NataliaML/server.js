//PRACTICA EVALUADA 1 - NATALIA ML. - PAGS ESTATICAS CON NODEJS
//importaciones
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url')
//


const server = http.createServer((req, res) => {
    const datosURL = url.parse(req.url, true)
    console.log(datosURL)
    if (req.method === 'GET' && datosURL.pathname === '/index') {
        if(datosURL.query['id']){
            console.log(datosURL['id'])
            console.log(1)
        }
        // Serving the HTML index
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Intern Err0r of Server.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/styles.css') {
        const cssPath = path.join(__dirname, '/styles.css');
  
        fs.readFile(cssPath, 'utf8', (err, cssContent) => {
            if (err) {
                res.writeHead(500);
                res.end('Err0r loading CSS file.');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/css',
                });
                res.end(cssContent);
            }
        });
    }
    else if (req.method === 'POST' && req.url === '/students') {
        // Procesar datos del formulario y guardar en un archivo
        let data = '';
        req.on('data', student => {
            data += student;
        });
        req.on('end', () => {
            // Parsear los datos del formulario
            console.log(data)
            const parsedData = new URLSearchParams(data);
            console.log(parsedData)
            const name = parsedData.get('name');
            const age = parsedData.get('age');
            const course = parsedData.get('course');
            // Guardar en un archivo JSON
            let studToAdd = {
                Name: name, 
                Age: age, 
                Course: course
            }

            
            //in the .json insert the data here
            fs.appendFile("./files/students.json", JSON.stringify(studToAdd), (err, data) =>{
                if(err){
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Path wrong or not found!.');
                }

                else{
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Student added to json!.');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada.');
    }
});

const PORT = 3000;
// Iniciar el servidor en el puerto 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
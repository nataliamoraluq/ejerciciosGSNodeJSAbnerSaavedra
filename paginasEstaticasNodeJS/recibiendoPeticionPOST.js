const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
        fs.readFile('rutaForm.html', (err, data)=>{
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
    else if(req.method === 'POST' && req.url === '/ruta') {
    let data = '';
        req.on('data', (chunk) => { data += chunk; });
        req.on('end', () => {
            console.log('Datos POST recibidos:', data);
            try {
                    //const postData = JSON.parse(data);

                    const parsedData = new URLSearchParams(data);

                    console.log('Datos POST recibidos:', parsedData);

                    res.writeHead(200, { 'Content-Type': 'text/plain', 'charset': 'UTF-8' });
                    res.end('¡Peticion POST recibida con exito!');

                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Error al analizar los datos POST');
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Ruta no encontrada o método no permitido.');
        }
});

const PORT = 5000;
// Iniciar el servidor en el puerto 3000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
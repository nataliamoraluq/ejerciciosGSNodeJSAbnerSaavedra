const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url')

const server = http.createServer((req, res) => {
    const datosURL = url.parse(req.url, true)

    console.log(datosURL)
    if (req.method === 'GET' && datosURL.pathname === '/index') {

        if(datosURL.query['id']){
            console.log(1)
        }
        // Servir el archivo HTML
        const filePath = path.join(__dirname, 'formEstudiante.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/guardar') {
        // Procesar datos del formulario y guardar en un archivo
        let data = '';
        req.on('data', arepa => {
            data += arepa;
        });
        req.on('end', () => {
            // Parsear los datos del formulario
            console.log(data)
            const parsedData = new URLSearchParams(data);
            console.log(parsedData)
            const nombre = parsedData.get('nombre');
            const edad = parsedData.get('edad');
            const curso = parsedData.get('curso');
            // Guardar en un archivo de texto
            const textoAGuardar = `Nombre: ${nombre}, Edad: ${edad}, Curso: ${curso}\n`;
            fs.appendFile('estudiantes.txt', textoAGuardar, err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error al guardar la información.');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Información guardada correctamente.');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada.');
    }
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`);
});
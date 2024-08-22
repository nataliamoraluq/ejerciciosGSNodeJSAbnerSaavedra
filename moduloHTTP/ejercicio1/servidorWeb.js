const http = require('http')

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': "text/html"})
    res.write(` <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                         <style>
                            h1{
                                font-weight: bolder;
                                font-family: Georgia, 'Times New Roman', Times, serif;
                            }
                            p{
                                color: brown;
                                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Página servida por por servidor HTTP NodeJS</h1>
                        <p>Autor: Abner Saavedra</p>
                        <p>Fecha actual: <span id="fecha"></span></p>
                    </body>
                    <script>
                        const fecha = new Date().toLocaleDateString();
                        document.getElementById("fecha").innerHTML = fecha;
                    </script>
                </html>`)
    res.end()
});

servidor.listen(3000)

console.log('Servidor web iniciado')
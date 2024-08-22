const http = require('http')

const servidor = http.createServer((pedido, respuesta) => {
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    respuesta.write(`<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title> EJERCICIIO 1</title>
                        </head>
                        <body>
                            <style>
                                .divInfo{
                                    background-color: rgb(175, 201, 255);
                                    width: auto;
                                    height: fit-content;
                                }
                                h1{
                                    color: blueviolet;
                                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                                    font-size: 4rem;
                                }
                                h4, p{
                                    color: rgb(86, 24, 144);
                                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                                    font-size: 2rem;
                                }
                            </style>
                            <div class="divInfo">    
                                <h1> Tu propio servidor HTTP</h1>
                                <h4>Autor: Natalia ML</h4>
                                <p>Fecha: <span id="dateHere"></span></p>
                            </div>
                        </body>
                        <script>
                            const fechaHoy = new Date().toLocaleDateString();
                            document.getElementById("dateHere").innerHTML =fechaHoy;
                        </script>
                    </html>`)
    respuesta.end()
})

servidor.listen(8888)

console.log('Servidor web iniciado')
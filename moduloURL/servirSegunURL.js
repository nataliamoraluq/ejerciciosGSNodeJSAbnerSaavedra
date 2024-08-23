const url = require('url');
const http = require('http');
const fs = require('fs');
const path = require('path');
//
const port = 3000;
//
const server = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url, true)
  if (urlParsed.pathname === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
  
      `<!DOCTYPE html>
      <html>
      <head>
          <title>¡Bienvenido al Servidor Web!</title>
          <meta charset="UTF-8">
          <link rel="stylesheet" href="http://localhost:3000/estilos.css">
      </head>
      <body>
          <header style="background-color: #333; color: white; text-align: center; padding: 20px;">
              <h1>¡Bienvenido al Servidor Web!</h1>
          </header>
          <div style="text-align: center; padding: 20px;">
              <p style="font-size: 18px; color: #555;">Este es un servidor web de ejemplo con estilos en línea.</p>
          </div>
      </body>
      <script>
        alert('mensaje ${urlParsed}')
      </script>
      </html>`
  
    );
    res.end();
  } else if (req.url === '/estilos.css') {
      const cssPath = path.join(__dirname, 'estilos.css');

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
  }  else if (req.url === '/script.js') {
    const jsPath = path.join(__dirname, '/script.js');

    fs.readFile(jsPath, 'utf8', (err, jsContent) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading JS file.');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/js',
            });
            res.end(jsContent);
        }
    });
  }  else {
      // Handle other routes or 404
      res.writeHead(404);
      res.end('Page not found.');
  }
});


server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});

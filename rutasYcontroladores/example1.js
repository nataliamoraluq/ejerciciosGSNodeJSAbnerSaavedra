const express = require('express');
const app = express();
// Ruta GET para la página principal
app.get('/', (req, res) => {
 res.send('Ur ass');
});
// Ruta GET para la página de "about"
app.get('/about', (req, res) => {
 res.send('Página About');
});
// Ruta POST para el manejo de formularios
app.post('/submit', (req, res) => {
 res.send('Formulario enviado');
});

// Definir una ruta con un parámetro de ruta
app.get('/user/:id', (req, res) => {
    res.send(`Usuario ID: ${req.params.id}`);
});

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
 console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
const express = require('express')
const rutas = require('./ejemplo1')

const app = express()

app.use('/ruta', rutas)

const port = 8000

app.listen(port, ()=>{
    console.log(`Aplicación funcionando en localhost:${port}`)
})


const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended:true
}));

const port = 3003


const tareas = [
    {
        id: 1,
        title: "Hacer tarea",
        descripcion: "Hacer tarea",
        estatus: true
    },
    {
        id: 2,
        title: "Hacer tarea 2",
        descripcion: "Hacer tarea 2",
        estatus: true
    }

]

app.get('/tareas', (req, res)=>{

    return res.status(200).json(tareas)
})

app.get('/tareas/:id', (req, res)=>{
    console.log("Id: ", req.params.id)
    const tarea = tareas.find(t => t.id == req.params.id)
    if(tarea)
        res.status(200).json({tarea: tarea})
    else
        res.status(400).json({mensaje: "Tarea no encontrada"})
})

app.post('/agregar', (req, res)=>{
    const {title, descripcion, estatus} = req.body
    console.log("Request body: ", req.body)
    res.status(200).json("devolucion")


})

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})
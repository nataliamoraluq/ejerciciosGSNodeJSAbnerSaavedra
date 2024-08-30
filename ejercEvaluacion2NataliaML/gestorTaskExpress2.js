const express = require('express')
const bodyParse = require('body-parser')
//
const app = express()
//
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))
//
const port = 3000

app.listen(port, ()=>{
    console.log(`Servidor funcionando en http://localhost:${port}`)
})

var tareas = []
//
//NOTA! CONSIDERAR QUE ------- app.tipoDeRequest por cada func/metodo, si es app.get el req es tipo GET, etc
// Mostrar tareas 
app.get('/', (req, res)=>{
    res.status(200).json(tareas)
})

// Agregar tarea 
app.post('/agregar', (req, res)=>{

    console.log("Cuerpo de petición: ", req.body)
    const {title, description, status } = req.body
    const tarea = {title, description, status }
    tarea.id = tareas.length + 1
    tareas.push(tarea)
    res.status(200).json("Tarea agregada exitosamente")
})

// Consultar
app.get('/tareas/:id', (req, res)=>{
    console.log("Id: ", req.params.id)
    const tarea = tareas.find(t => t.id == req.params.id)
    if(tarea)
        res.status(200).json({tarea: tarea, mensaje: "Tarea encontrada!"})
    else
        res.status(400).json({mensaje: "Tarea no encontrada"})
})

// Modificar tarea
app.put('/tareas/:id', (req, res)=> {
    const tarea = tareas.find((t) => t.id == req.params.id);

    if(tarea){
        const { title, description, status } = req.body
        tarea.title = title;
        tarea.description = description;
        tarea.status = status;
        res.status(200).json({message: 'Tarea Actualizada exitosamente'})
    }
    else{
        res.status(400).send('Tarea no existe')
    }
})

// Eliminar tarea
app.delete('/tareas/:id', (req, res) =>{
    var tarea = tareas.find((t) => t.id == req.params.id);

    if(tarea){
       tareas = tareas.filter(t => t.id != tarea.id);
        res.status(200).json({message: 'Tarea eliminada exitosamente!'})
    }
    else{
        res.status(400).send('Tarea no existe')
    }
})
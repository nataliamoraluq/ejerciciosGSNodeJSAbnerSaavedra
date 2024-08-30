//PRACTICA EVALUADA 1 - NATALIA ML. - PAGS ESTATICAS CON NODEJS
//importaciones
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url')
//
const express = require('express')
const bodyParse = require('body-parser')
//
const app = express();
//
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))
//
const port = 3000

app.listen(port, ()=>{
    console.log(`Server working in http://localhost:${port}`)
})

var students = []
//
// url of the static files
app.use('/public', express.static(__dirname + '/public'))
// SET EL MOTOR DE LAS PLANTILLAS
app.set('view engine', 'hbs');
// SET THE FOLDER TO VIEW
app.set('view', __dirname + '/view');
// render the update hbs file 
app.get('/updateStud', (req, res)=>{
    res.render('updateStudent')
})

// Enviamos un archivo estático / (main page)
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

// SHOW STUDENTS
app.get('/', (req, res)=>{
    res.status(200).json(students)
})

// POST GET STUDENT INFO for the form
app.post('/students', (req, res)=>{

    console.log("Request body: ", req.body)
    //para traer y gaurdar la info del form ----> req.bod
    const { name, age, course } = req.body
    const estudiante = {name, age, course }
    estudiante.id = students.length + 1
    students.push(estudiante)
    //
    res.status(200).json("Try done right!")
})

// ADD STUDENT
app.post('/add', (req, res)=>{

    console.log("Request body: ", req.body)
    const { name, age, course } = req.body
    const estudiante = {name, age, course }
    estudiante.id = students.length + 1
    students.push(estudiante)
    res.status(200).json("Student add sucesfully!")
})

// FIND STUDENT
app.get('/students/:id', (req, res)=>{
    console.log("Stud. Id: ", req.params.id)
    const student = students.find(t => t.id == req.params.id)
    if(student)
        res.status(200).json({student: student, mensaje: "Student found!"})
    else
        res.status(400).json({mensaje: "Student not found!"})
})

// UPDATE STUDENT
app.put('/students/:id', (req, res)=> {
    const stud = students.find((s) => s.id == req.params.id);

    if(stud){
        const { name, age, course } = req.body
        stud.name = name;
        stud.age = age;
        stud.course = course;
        res.status(200).json({message: 'Student updated!'})
    }
    else{
        res.status(400).send('Student not found/non existing')
    }
})

// DELETE STUDENT
app.delete('/students/:id', (req, res) =>{
    var student = students.find((s) => s.id == req.params.id);

    if(student){
        students = students.filter(s => s.id != student.id);
        res.status(200).json({message: 'Student deleted correctly!'})
    }
    else{
        res.status(400).send('Student not found/non existing')
    }
})

/*
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
        const cssPath = path.join(__dirname, './public/styles.css');
  
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
});*/
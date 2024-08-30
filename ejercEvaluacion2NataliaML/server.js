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
const port = 3020

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
app.set('views', __dirname + '/view');
// render the update hbs file 
/*app.get('/updateStud', (req, res)=>{
    res.render('updateStudent')
})*/

// send static file / (main page)
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

// SHOW STUDENTS
app.get('/', (req, res)=>{
    res.status(200).json(students)
})

// ADD STUDENT
app.post('/add', (req, res)=>{

    //console.log("Request body: ", req.body)
    const { name, age, course } = req.body
    const estudiante = {name, age, course }
    estudiante.id = students.length + 1
    students.push(estudiante)

    //

    fs.readFile("./files/students.json", (err, data) =>{
        if(err){
            res.send('Path wrong or not found!.');
            console.log(err)
        }
        else{
            let objData = JSON.parse(data);
            objData.push(estudiante);
            let objToJsoN = JSON.stringify(objData)

            fs.writeFile("./files/students.json", objToJsoN, (err, data) =>{
                if(err)
                    console.error(err)
                else
                    console.log("OBJT TO JSON" +objToJsoN)
                    res.status(200).json("json working!")
            })

        }
    });
    //
})

// FIND STUDENT  ---- TO FIND BEFORE UPDATE
app.get('/students/:id', (req, res)=>{
    //console.log("Stud. Id: ", req.params.id)
    students = JSON.parse(fs.readFileSync("./files/students.json"))
    const student = students.find(t => t.id == req.params.id)
    //console.log(student)
    if(student)
        res.render('updateStudent', {stud:student})
    else
        res.status(400).json({mensaje: "Student not found!"})
})

// UPDATE STUDENT
app.post('/students/:id', (req, res)=> {
    const stud = students.find((s) => s.id == req.params.id);
    console.log(stud)
    if(stud){
        const { name, age, course } = req.body
        stud.name = name;
        stud.age = age;
        stud.course = course;
        console.log(stud)
        students[req.params.id-1] = stud

        fs.writeFileSync("./files/students.json", JSON.stringify(students))
        //
        res.redirect('/')
        //res.status(200).json({message: 'Student updated!'})
    }
    else{
        res.status(400).send('Student not found/non existing')
    }
})

//SHOW STUDENTS LIST
app.get('/students', (req, res)=>{
    console.log("Stud. Id: ", req.params.id)
    students = JSON.parse(fs.readFileSync("./files/students.json"))
    //const student = students.find(t => t.id == req.params.id)
    //console.log(student)
    if(students)
        res.render('listStudent', {stud:students})
    else
        res.status(400).json({mensaje: "Student empty!"})
})


// POST GET STUDENT INFO for the form
/*app.post('/students', (req, res)=>{

    console.log("Request body: ", req.body)
    //para traer y gaurdar la info del form ----> req.bod
    const { name, age, course } = req.body
    const estudiante = {name, age, course }
    estudiante.id = students.length + 1
    students.push(estudiante)
    //
    res.status(200).json("Try done right!")
})*/
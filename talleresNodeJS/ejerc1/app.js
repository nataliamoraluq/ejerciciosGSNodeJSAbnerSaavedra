//main app - import¿ and use (ig) the wiki module
const express = require("express");
const wiki = require("./wiki.js");

const port = 8001
const app = express()

app.use("/wiki", wiki);

app.listen(port, ()=>{
    console.log(`App working in localhost:${port}`)
})


//main app - import the product module
const express = require("express");
const product = require("./productModule");

const port = 4005
const app = express()

app.use(express.json())

app.use("/product", product);

app.listen(port, ()=>{
    console.log(`App working! in localhost:${port}`)
})
// TALLER 2 DE NODEJS -- Natalia ML. -- Module product route
//main app - import the product router
const dotenv = require('dotenv')
const express = require("express");
const product = require("./routers/productRouter");

const app = express()

app.use(express.json())

app.use("/product", product);

const PORT = process.env.PORT || 4005; app.listen(PORT, () => { 
    console.log(`App working! in localhost:${PORT}`); 
});



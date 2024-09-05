const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const asyncHandler = require('express-async-handler')

router.get("/students", asyncHandler( async (req, res, next) =>{

    const successfulResult = await fs.readFileSync(path.join(__dirname, 'students.json'))
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(successfulResult);
    })
)


module.exports = router
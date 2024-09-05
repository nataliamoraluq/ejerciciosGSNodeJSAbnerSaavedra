const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get("/users", (req, res, next)=>{

    try {
        let data = fs.readFileSync(path.join(__dirname, 'estudiantes.json'))
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.parse(data));
    } catch (error) {
        return next(error)
    }
})

module.exports = router
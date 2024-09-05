const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get("/users", (req, res, next)=>{
    fs.readFile(path.join(__dirname, 'estudiantes.json'), (err, data) => {
        if (err) {
            return next(err)
        }else{
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(data);
        }
    });
})

module.exports = router
//importaciones
const express = require("express");
//
const port = 8000
const app = express()
//
app.get("/users/:userId/books/:bookId", (req, res) => {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send("Parameters of the received path here" + JSON.stringify(req.params)+ 
        "\n User:" +req.params.userId+ "\n Books id:" +req.params.bookId);
});
//listen the app in the port... (in this case, 8000)
app.listen(port, ()=>{
    console.log(`App working in localhost:${port}`)
})

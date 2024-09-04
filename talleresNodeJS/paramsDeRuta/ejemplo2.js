const express = require("express");
const router = express.Router();

router.get("/about", (req, res, next) => {
    About.find({}).exec((err, queryResults) => {
    if (err) {
    return next(err);
    }
    //Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
    });
});

//module export the router so we can use it in the main app
module.exports = router;
//url ----> paths module here (named wiki)
// wiki.js - Wiki route module.
const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
   res.send("Wiki home page here");
});
   // About page route.
router.get("/about", function (req, res) {
   res.send("About this wiki but with GET");
});

//router - path functions
router.post("/about", (req, res) => {
   res.send("About this wiki but with POST");
});

//module export the router so we can use it in the main app
module.exports = router;



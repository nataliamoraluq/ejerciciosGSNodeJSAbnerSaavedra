//IMPORTACIONES
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//middleware especifico para ruta /admin
const adminMiddleware = (req, res, next) => {
    console.log('Accediendo a la ruta /admin');
    next();
};
   

//HTTP FUNCTIONS
router.get('/user/:id', userController.getUser);
router.get('/admin', adminMiddleware, userController.showAdmin);

//EXPORTACIONES
module.exports = router;

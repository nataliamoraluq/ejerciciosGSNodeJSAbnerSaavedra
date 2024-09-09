<<<<<<< HEAD
// ----------------------------- MODULE ROUTE -----------------------------
//Module product route
// --- IMPORTACIONES ---
import express from 'express'
import {controllerP} from '../products/controller.js'
import bodyParser from 'body-parser'

const route = express.Router()

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: true
}))

route.use(express.json())

// (CRUD DE PRODUCT + FILTER BY QUANTITY)

//GET/SHOW PRODUCTS
route.get('/products', controllerP.getAllProducts)
//SEARCH PRODUCT BY ID
route.get('/products/:id', controllerP.searchProduct)
//ADD PRODUCT
route.post('/add', controllerP.addProducts)
//UPDATE PRODUCT
route.put('/products/:id',controllerP.updateProducts)
//DELETE PRODUCT
route.delete('/products/:id', controllerP.deleteProducts)
//FILTER PRODUCT BY QUANTITY
route.get('/byQuantity/:quantity', controllerP.filterProducts)

//module export the router so we can use it in the main app
export const prodRouter = route;
=======
// TALLER 2 DE NODEJS -- Natalia ML. -- Module product route
//importaciones
const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');
//
const bodyParse = require('body-parser')
//
router.use(bodyParse.json());
router.use(bodyParse.urlencoded({
    extended: true
}))

router.use(express.json())
// HTTP VERBS --- CALLING THE FUNCTIONS IN THE CONTROLLER BY PATH
//GET PRODUCTS
router.get('/products', productController.getProducts)

//SEARCH PRODUCT
router.get('/products/:id', productController.searchProducts)

//ADD PRODUCT
router.post('/add', productController.addProducts)

//UPDATE PRODUCT
router.put('/products/:id',productController.updateProducts)

//DELETE PRODUCT
router.delete('/products/:id', productController.deleteProducts)

//FILTER PRODUCT BY PRICE
router.get('/byQuantity/:quantity', productController.filterProducts)

//module export the router so we can use it in the main app
module.exports = router;
>>>>>>> 7022353d782ccc2cfc2a2f432cb0aac056b9df1d

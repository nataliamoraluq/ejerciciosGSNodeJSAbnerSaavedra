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
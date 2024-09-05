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
//router.get('/byPrice/:price',)

//module export the router so we can use it in the main app
module.exports = router;
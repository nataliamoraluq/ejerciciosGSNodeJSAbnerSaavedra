// TALLER 2 DE NODEJS -- Natalia ML. -- Module route
//importaciones
const express = require('express')
const router = express.Router()

const bodyParse = require('body-parser')
//
router.use(bodyParse.json());
router.use(bodyParse.urlencoded({
    extended: true
}))

router.use(express.json())
// array productos (para guardar en memoria)
var productos = [

]
//

//GET PRODUCTS
router.get('/products', (req, res)=>{
    res.status(200).json(productos)
})
//SEARCH PRODUCT
router.get('/products/:id', (req, res)=>{
    console.log("Id: ", req.params.id)
    const product = productos.find(t => t.id == req.params.id)
    if(product)
        res.status(200).json({product: product})
    else
        res.status(400).json({mensaje: "Product not found"})
})
//ADD PRODUCT
router.post('/add', (req, res)=>{
    
    const {name, price, quantity} = req.body

    console.log("Post: ", req.body.name)
    
    const producto = {name, price, quantity}
    //
    console.log(producto.name)
    console.log(producto.price)
    console.log(producto.quantity)
    //
    producto.id = productos.length + 1

    productos.push(producto);
    res.status(201).json({ message: `Product added succesfully!: ${req.body}` });
})

router.put('/products/:id', (req, res)=> {
    const producto = productos.find((t) => t.id == req.params.id);

    if(producto){
        const {name, price, quantity} = req.body
        producto.name = name;
        producto.price = price;
        producto.quantity = quantity;
        res.status(200).json({message: 'Product updated!'})
    }
    else{
        res.status(400).send('Product non existing')
    }
})

router.delete('/products/:id', (req, res) =>{
    var product = productos.find((t) => t.id == req.params.id);

    if(product){
        productos = productos.filter(t => t.id != product.id);
        res.status(200).json({message: 'product deleted!'})
    }
    else{
        res.status(400).send('Product non existing')
    }
})


//FILTER PRODUCT BY PRICE
/*router.get('/byPrice/:price', (req, res)=>{
    console.log("price:", req.params.price)
    let productPrice = []
    productPrice = productos.filter(t => t.price === req.params.price)
    if(productPrice)
        res.status(200).json({productPrice: productPrice})
    else
        res.status(400).json({mensaje: "Product by price not found"})
})*/

//module export the router so we can use it in the main app
module.exports = router;

//validar registro producto
/*function validarRegistroProducto(req, res, next){
    if(req.body.name != "" || !req.body.name){
        next()
    }else{
        res.status(403).send('El producto debe tener un nombre!')
    }
}*/
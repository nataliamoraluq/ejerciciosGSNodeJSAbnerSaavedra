// TALLER 2 DE NODEJS -- Natalia ML. -- Product controller
// array productos (para guardar en memoria)
var productos = []
//

//GET PRODUCTS
exports.getProducts = (req, res)=>{
    res.status(200).json(productos)
}
//
//SEARCH PRODUCT
exports.searchProducts = (req, res)=>{
    console.log("Id: ", req.params.id)
    const product = productos.find(t => t.id == req.params.id)
    if(product)
        res.status(200).json({product: product})
    else
        res.status(400).json({mensaje: "Product not found"})
}
//ADD PRODUCT
exports.addProducts = (req, res)=>{
    
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
    res.status(201).json({ message: `Product added succesfully!: ${req.body}`});
}
//UPDATE PRODUCT
exports.updateProducts = (req, res)=> {
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
}

//DELETE PRODUCT
exports.deleteProducts = (req, res) =>{
    var product = productos.find((t) => t.id == req.params.id);
    if(product){
        productos = productos.filter(t => t.id != product.id);
        res.status(200).json({message: 'product deleted!'})
    }
    else{
        res.status(400).send('Product non existing')
    }
}

//FILTER PRODUCT BY PRICE
exports.filterProducts = (req, res)=>{
    console.log("Id: ", req.params.quantity)
    const producto = productos.filter(t => parseInt(t.quantity) == parseInt(req.params.quantity))
    if(producto)
        res.status(200).json({producto: producto})
    else
        res.status(400).json({mensaje: "Producto no encontrado"})
}

/*router.get('/byPrice/:price', (req, res)=>{
    console.log("price:", req.params.price)
    let productPrice = []
    productPrice = productos.filter(t => t.price === req.params.price)
    if(productPrice)
        res.status(200).json({productPrice: productPrice})
    else
        res.status(400).json({mensaje: "Product by price not found"})
})*/

/*router.get('/productoCantidad/:cantidad', (req, res)=>{
    console.log("Id: ", req.params.cantidad)
    const producto = productos.filter(t => t.cantidad == req.params.cantidad)
    if(producto)
        res.status(200).json({producto: producto})
    else
        res.status(400).json({mensaje: "Producto no encontrado"})
})*/
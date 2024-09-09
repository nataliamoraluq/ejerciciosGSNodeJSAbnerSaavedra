// ----------------------------- PRODUCT CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceP } from '../products/service.js';
//se llaman las async funcs del service y, donde se necesite, se
//envia la data de las req
//GET PRODUCTS (GET)
const getAllProducts = async(req, res)=>{
    res.status(200).json(await serviceP.showAllProducts())
}
//
//SEARCH PRODUCT (GET)
const searchProduct = async (req, res)=>{
    res.status(200).json(await serviceP.searchById(req.params.id))
}
//ADD PRODUCT (POST)
const addProducts = async (req, res)=>{
    res.status(200).json(await serviceP.addProduct(req.body));
}
//UPDATE PRODUCT (PUT)
const updateProducts = async (req, res)=> {
    res.status(200).json(await serviceP.updateProduct(req.params.id, req.body))
}

//DELETE PRODUCT (DELETE)
const deleteProducts = async (req, res) =>{
    res.status(200).json(await serviceP.deleteProduct(req.params.id));
}

//FILTER PRODUCT BY QUANTITY (GET)
const filterProducts = async (req, res)=>{
    res.status(200).json(await serviceP.filterByQuantity(req.params.quantity))
}
//export this const controller with all the others const 
export const controllerP= {
    getAllProducts,
    addProducts,
    searchProduct,
    updateProducts,
    deleteProducts,
    filterProducts
}
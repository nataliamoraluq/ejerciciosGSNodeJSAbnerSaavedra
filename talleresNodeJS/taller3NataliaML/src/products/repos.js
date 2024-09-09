// ----------------------------- PRODUCT REPOSITORY -----------------------------
// --- IMPORTACIONES ---
// *****************************************************************************
// the product entity
import {Product} from '../products/entities/Product.entity.js'
//el repositorio conecta con la BD para recuperar
//los datos y devolverlos al service
// *****************************************************************************
//** 
// SHOW ALL PRODUCTS
const showAll = async () => {
    return await Product.findAll();
};
//** 
// SEARCH :ID
const findProductByID = async (id) => {
    return await Product.findOne({where: { id: id }});
};
//** 
// ADD/CREATE PRODUCT
const addP = async (product) => {
    const newProduct = await Product.create(product);
    return newProduct;
};
//** 
// UPDATE PRODUCT
const updateP = async (id, product) => {
    const updProduct = await Product.findOne({where: { id: id }});
    updProduct.name = product.name;
    updProduct.price = product.price;
    updProduct.quantity = product.quantity;
    await updProduct.save();
    return updProduct;
};
//** 
// DELETE PRODUCT
const deleteP = async (id) => {
    const delProduct = await Product.findOne({where: { id: id }});
    await delProduct.destroy();
    return delProduct;
};
//
//
//export this const
export const reposP = {
    showAll,
    findProductByID,
    addP,
    updateP,
    deleteP
}
// ----------------------------- PRODUCT SERVICE -----------------------------
// --- IMPORTACIONES ---
import {reposP} from'../products/repos.js';
//se importan y llaman los mets. del product repository
// SHOW ALL PRODUCTS
const showAllProducts = async () => {
    const products = await reposP.showAll();
    return { Products: products};
};


// FILTER PRODUCTS By QUANTITY (:QUANTITY)
const filterByQuantity = async (quantity) => {
    const products = await reposP.showAll();
    return { productsByQuantity: products.filter(prod => prod.quantity == quantity)};
};

// SEARCH BY ID (:ID)
const searchById = async (id) => {
    return { product: await reposP.findProductByID(id)};
};

// ADD PRODUCT (:ID)
const addProduct = async (product) => {
    return { newProduct: await reposP.addP(product)};
};

// UPDATE PRODUCT (:ID)
const updateProduct = async (id, product) => {
    return { updProduct: await reposP.updateP(id, product)};
};

// DELETE PRODUCT (:ID)
const deleteProduct = async (id) => {
    return { delProduct: await reposP.deleteP(id)};
};

//export this const prod with all the others const
export const serviceP = {
    showAllProducts,
    filterByQuantity,
    searchById,
    addProduct,
    updateProduct,
    deleteProduct
}
const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../Controllers/productControllers');


router.get('/', getAllProducts);
// example request: http://localhost:5000/api/products
router.get('/:id', getProduct);
// example request: http://localhost:5000/api/products/123
router.post('/', createProduct);
// example request: http://localhost:5000/api/products with {name:"test product", description:"this is a test product", quantity: 10, buyingPrice: 10, mrp: 10, category: "test category"}
router.patch('/:id', updateProduct);
router.delete( '/:id' , deleteProduct)


module.exports = router
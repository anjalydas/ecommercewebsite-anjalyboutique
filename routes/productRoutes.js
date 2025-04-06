const express = require('express')
const { getAllProducts, getProductById, addProduct, updateProductById, deleteProductById } = require('../controllers/itemControllers')

const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.get('/:productId', getProductById)
productRouter.post('/', addProduct)
productRouter.patch('/:productId', updateProductById)
productRouter.delete('/:productId', deleteProductById)

module.exports = productRouter
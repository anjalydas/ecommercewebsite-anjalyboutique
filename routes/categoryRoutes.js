const express = require('express')
const { getAllCategories, getCategoryById, addCategory, updateCategoryById, deleteCategoryById,  } = require('../controllers/categoryControllers')

const categoryRouter = express.Router()

categoryRouter.get('/', getAllCategories)
categoryRouter.get('/:categoryId', getCategoryById)
categoryRouter.post('/', addCategory)
categoryRouter.patch('/:categoryId', updateCategoryById)
categoryRouter.delete('/:categoryId', deleteCategoryById)

module.exports = categoryRouter
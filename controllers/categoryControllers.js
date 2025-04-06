const Category = require("../model/categoryModel");

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find(req.query);
        if (categories.length === 0) {
            return res.status(404).json({ success: false, message: "No categories found" });
        }
        res.json({ success: true, categories });
    } catch (error) {
        res.status(500).json({ message: error.message || "Error fetching categories" });
    }
};

// Get a single category by ID
const getCategoryById = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if (!categoryId || categoryId.length !== 24) {
            return res.status(400).json({ success: false, message: "Invalid category ID format" });
        }

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.json({ success: true, category });
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid category ID" });
        }
        res.status(500).json({ message: error.message || "Internal server error" });
    }
};

// Add a new category
const addCategory = async (req, res) => {
    try {
        const { categoryName, description, image } = req.body;

        if (!categoryName) {
            return res.status(400).json({ success: false, message: "Category name is required" });
        }

        const existingCategory = await Category.findOne({ categoryName });
        if (existingCategory) {
            return res.status(400).json({ success: false, message: "Category already exists" });
        }

        const newCategory = new Category({ categoryName, description, image });
        await newCategory.save();
        res.status(201).json({ success: true, message: "Category created successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: error.message || "Error adding category" });
    }
};

// Update category by ID
const updateCategoryById = async (req, res) => {
    try {
        const { categoryName, description, image } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.categoryId,
            { categoryName, description, image },
            { new: true, runValidators: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.json({ success: true, category: updatedCategory });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid category ID" });
        }
        res.status(500).json({ message: error.message || "Error updating category" });
    }
};

// Delete category by ID
const deleteCategoryById = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        res.json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid category ID" });
        }
        res.status(500).json({ message: error.message || "Error deleting category" });
    }
};

// Search categories by name
const searchCategoryByName = async (req, res) => {
    try {
        const query = req.query.query;

        if (!query || typeof query !== 'string') {
            return res.status(400).json({ success: false, message: 'Invalid query parameter' });
        }

        const results = await Category.find({ categoryName: new RegExp(query, 'i') });

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'No categories found' });
        }

        res.json({ success: true, categories: results });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategoryById,
    deleteCategoryById,
    searchCategoryByName
};

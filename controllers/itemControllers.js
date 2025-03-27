const Product = require("../model/productModel");


const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find(req.query);
        if (products.length === 0) {
            return res.status(404).json({ success: false, message: "No products found" });
        }
        res.json({ success: true, products });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Error fetching products" });
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;

        // Validate the foodItemId
        if (!productId || productId.length !== 24) {  // Assuming ObjectId format
            return res.status(400).json({ success: false, message: "Invalid product ID format" });
        }

        // Fetch food item by ID
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Return the food item
        res.json({ success: true, product });
    } catch (error) {
        console.error('Error:', error); // Log error for debugging
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid food item ID" });
        }
        res.status(500).json({ message: error.message || "Internal server error" });
    }
};

const addProduct = async (req, res, next) => {
    try {
        
        const { productName, image,  price, description, category } = req.body;
        if (!productName || !price || !description || !category ) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const newProduct = new Product({ productName, image, price, description, category });
        await newProduct.save();
        res.json({ success: true, message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message || "Error adding product" });
    }
};


const updateProductById = async (req, res, next) => {
    try {
        const { productName,image, price, description, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, { productName,image, price, description, category}, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid Product ID" });
        }
        res.status(500).json({ message: error.message || "Error updating food item" });
    }
};


const deleteProductById = async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ success: false, message: "Invalid product ID" });
        }
        res.status(500).json({ message: error.message || "Error deleting item" });
    }
};
const searchByItem = async (req, res) => {
    try {
      const query = req.query.query;  // Extract the query parameter
  
      // Validate the query parameter
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ success: false, message: 'Invalid query parameter' });
      }
  
      // Perform search using a regular expression for case-insensitive matching
      const results = await Product.find({ productName: new RegExp(query, 'i') });
  
      // If no items found
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'No items found' });
      }
  
      // Return search results
      res.json({ success: true, products: results });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  };
  
  

module.exports = { getAllProducts, getProductById, addProduct, updateProductById, deleteProductById, searchByItem };

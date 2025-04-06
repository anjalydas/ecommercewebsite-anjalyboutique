const Cart = require("../model/cartModel.js");


const getAllCartItems = async (req, res, next) => {
    try {
        const cartItems = await Cart.find({ Cart })
        if (cartItems.length === 0) {
            return res.status(404).json({ success: false, message: "Cart is empty" });
        }
        res.json({ success: true, cartItems });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Error fetching cart items" });
    }
};

const addItemToCart = async (req, res) => {
    try {
        const { name, productName, quantity, totalPrice, shippingAddress } = req.body;

        if ( !productName || !quantity || !shippingAddress) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        let cart = await Cart.findOne({ 'foodItems.dishName': productName });

        if (!cart) {
            cart = new Cart({
              foodItems: [{ name, productName, quantity, totalPrice, shippingAddress }],
            });
        } else {
            const existingItem = cart.products.find(item => item.productName === productName);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice += totalPrice; // Adjust totalPrice if needed
            } else {
                cart.foodItems.push({ name, dishName, quantity, totalPrice, shippingAddress });
            }
        }

        await cart.save();
        res.status(200).json({ success: true, message: "Item added to cart", cart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding item to cart", error: error.message });
    }
};


const updateCartItemQuantity = async (req, res, next) => {
  try {
      const { productName, quantity, totalPrice, shippingAddress } = req.body;
      const updatedCartItem = await Cart.findByIdAndUpdate(req.params.cartId, { productName, quantity, totalPrice, shippingAddress }, { new: true, runValidators: true });
        
      if (!productName || !quantity) {
          return res.status(400).json({ success: false, message: "item and quantity are required" });
      }
      
      if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: "Food item not found" });
    }
      

      await updatedCartItem.save();
      res.json({ success: true, message: "Cart item quantity updated", updatedCartItem });
  } catch (error) {
      res.status(500).json({ message: error.message || "Error updating cart item quantity" });
  }
};

const removeCartItem = async (req, res, next) => {
    try {
        const { productName } = req.body;
        if (!productName) {
            return res.status(400).json({ success: false, message: "No products is here" });
        }
  
        const cart = await Cart.findOne({ productName });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
 
        if (!cart.items) {
            cart.items = [];
        }
  
        cart.items = cart.items.filter(item => item.productName !== productName);
  
        await cart.save();
        res.json({ success: true, message: "Item removed from cart", cart });
    } catch (error) {
        res.status(500).json({ message: error.message || "Error removing item from cart" });
    }
  };
  

module.exports = {
  getAllCartItems,
  addItemToCart,
  updateCartItemQuantity,
  removeCartItem
};





const mongoose = require('mongoose');
const productSchema = new mongoose.Schema
    ({ productName: String,
        image: String,
        category: {type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        image: String,
        price: Number,
        rating: Number,
        description: String,
        
    });
   

const Product = mongoose.model('Product', productSchema)
module.exports = Product
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./productCard.css";

function ProductCard({ products }) {
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const { productId } = useParams(); 
    const handleAdd = () => setQuantity(prev => prev + 1);
    const handleSubtract = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

    const handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push({ ...product, quantity });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        navigate("/mycart");
    };

    useEffect(() => {
        console.log("Products:", products);
    }, [products]);

    return (
        <>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <div key={productId} className="product-card">
                        <Link to={`/product/${product._id}`}>
                            <img className="product-image" src={product.image} alt={product.productName} />
                        </Link>
                        <div className="product-info">
                        <Link to={`/product/${product._id}`}>
    <img className="product-image" src={product.image} alt={product.productName} />
</Link>
                        <Link to={`/product/${product._id}`} className="product-title-link">
        <h2 className="product-title">{product.productName}</h2>
    </Link>
    <p className="product-category">Category: {product.category?.categoryName || "Unknown"}</p>
    <p className="product-rating">⭐ {product.rating || "N/A"}</p>
    <p className="product-price">₹ {product.price?.toFixed(2)}</p>
                            <div className="quantity-section">
                                <span className="quantity-label">Quantity:</span>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={handleSubtract}>-</button>
                                    <span className="quantity-value">{quantity}</span>
                                    <button className="quantity-btn" onClick={handleAdd}>+</button>
                                </div>
                            </div>

                            <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-products">No products available</p>
            )}
        </>
    );
}

export default ProductCard;

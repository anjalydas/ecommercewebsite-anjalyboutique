// src/pages/SingleProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productPage.css";

export const loader = async ({ params }) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/product/${params.productId}`);
    const data = await response.json();
    return data;
};

function ProductPage() {
    const { productId } = useParams(); // assuming you route via /product/:productId
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!productId) return;
        const fetchProduct = async () => {
          const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/product/${productId}`);
          const data = await res.json();
          setProduct(data.product);
        };
        fetchProduct();
      }, [productId]);
    if (!product) {
        return <div className="single-product-page">Loading...</div>;
    }

    return (
        <div className="single-product-page">
            <div className="product-container">
                <div className="product-image-section">
                    <img src={product.image} alt={product.productName} className="main-product-image" />
                    <h2 className="product-title">{product.productName}</h2>
                </div>
                <div className="product-details-section">
                    
                    <p><strong>Price:</strong> ₹{product.price}</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating}</p>
                    <p><strong>Category:</strong> {product.category?.categoryName}</p>
                    <p><strong>Description:</strong></p>
                    <p className="description-text">{product.description}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

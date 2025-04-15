import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";

function Products() {
    const { categoryId } = useParams(); // get categoryId from route
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState("All Products");
    const navigate = useNavigate();

    // Fetch all categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category`);
                const data = await res.json();
                setCategories(data.categories || []);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };
        fetchCategories();
    }, []);

    // Fetch products for the selected category
    useEffect(() => {
        const fetchProducts = async () => {
            if (!categoryId) {
                setProducts([]); // Optional: fetch all products if needed
                setSelectedCategoryName("All Products");
                return;
            }

            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/product?categoryId=${categoryId}`);
                const data = await res.json();
                setProducts(data.products || []);

                // Set the selected category name
                const matchedCategory = categories.find(cat => cat._id === categoryId);
                setSelectedCategoryName(matchedCategory?.categoryName || "All Products");
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, [categoryId, categories]);

    // Navigate to selected category
    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`);
    };

    return (
        <div className="product-page">
                   

            {/* Selected category products */}
            <div className="category-section">
                <h2 className="category-title">{selectedCategoryName}</h2>
                {products.length > 0 ? (
                    <div className="product-list">
                        <ProductCard products={products} />
                    </div>
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
}

export default Products;

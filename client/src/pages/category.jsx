// src/pages/Category.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./category.css"; // use a separate CSS for clarity

export const loader = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category`);
    const data = await response.json();
    return data;
};
function Category() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category`);
                const data = await response.json();
                setCategories(data.categories || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`); // navigating using MongoDB _id
    };

    return (
        <div className="category-page">
            <h1 className="category-title">Browse by Category</h1>
            <div className="category-container">
                {categories.map((cat) => (
                    <div
                        key={cat._id}
                        className="category-card"
                        onClick={() => handleCategoryClick(cat._id)} // <-- change here
                    >
                        <img src={cat.image} alt={cat.categoryName} className="category-image" />
                        <div className="category-name">{cat.categoryName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
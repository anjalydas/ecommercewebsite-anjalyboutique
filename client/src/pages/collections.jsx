import React from "react";
import { useNavigate } from "react-router-dom"; // ← Import useNavigate
import "./Collections.css";

const collections = [
  { name: "Sarees", image: "/saree.jpg" },
  { name: "Kurtis", image: "/kurti.jpg" },
  { name: "Dress", image: "/dress.jpg" },
  { name: "Skirts", image: "skirts.jpg" },
  { name: "Accessories", image: "/accessories.jpg" },
];

const Collections = () => {
  const navigate = useNavigate(); // ← Hook for navigation

  const handleClick = (name) => {
    navigate(`/category`);
  };

  return (
    <section className="top-collections">
      <h2 className="section-title">Top Collections</h2>
      <div className="collections-grid">
        {collections.map((item, index) => (
          <div
            key={index}
            className="collection-card"
            onClick={() => handleClick(item.name)} // ← Navigate on click
            style={{ cursor: "pointer" }} // Optional: show pointer
          >
            <img src={item.image} alt={item.name} className="collection-image" />
            <div className="collection-name">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;

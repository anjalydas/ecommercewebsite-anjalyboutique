import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ userLoggedIn, handleSearchClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-img-container">
      {/* Background Banner */}
      <img src="/header-pic.jpg" alt="Header Banner" className="header-bg-img" />

      {/* Overlay Content */}
      <div className="header-content">

        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>

        {/* Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="dropdown-btn">Collections</button>
          {open && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                <li><Link to="/dresses">Dresses</Link></li>
                <li><Link to="/skirts">Skirts</Link></li>
                <li><Link to="/saree">Saree</Link></li>
                <li><Link to="/kurtis">Kurtis</Link></li>
                <li><Link to="/assossaries">Assossaries</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>

        {/* Account & Cart */}
        <div className="user-cart-section">
          <Link to="/login" className="account-link">
            <span className="material-symbols-outlined">account_circle</span> Login
          </Link>
          <Link to="/mycart" className="cart-link">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

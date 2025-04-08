import React from "react";
import './home.css';

function Home() {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginTop: '40px',
        }}
      >
        🌸 Welcome to <span style={{ color: '#FF1493' }}>Anjaly Boutique</span> 🌸
      </h1>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Where tradition meets trend, and every outfit tells a story.
      </p>
      <section className="hero-image">
        <div className="hero-overlay">
          <h2>Explore Our Latest Collection</h2>
        </div>
      </section>
    </>
  );
}

export default Home;

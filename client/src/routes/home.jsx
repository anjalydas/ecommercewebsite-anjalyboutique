import React from "react";
import './home.css';
import Collections from "../pages/collections";

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
      <section>
        <Collections/>
      </section>
      <section className="next-section">
        <h2>Discover the New Season Trends</h2>
        <p>From traditional wear to contemporary styles, we have something for every occasion.</p>
      </section>

      {/* Bottom Full-Width Image */}
      <div className="bottom-image-cover"></div>
    </>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Food Zone!</h1>
        <p>Your favorite food is just a click away. Enjoy fast delivery and tasty dishes!</p>
        <Link to="/menu">
          <button className="cta-button">Explore Menu</button>
        </Link>
      </section>

      {/* Featured Dishes */}
      <section className="featured-dishes">
        <h2>Featured Dishes</h2>
        <div className="dish-cards">
          <div className="dish-card">Dish 1</div>
          <div className="dish-card">Dish 2</div>
          <div className="dish-card">Dish 3</div>
        </div>
      </section>

      {/* Promotions */}
      <section className="promotions">
        <h2>Special Offers</h2>
        <p>Get 20% off on your first order!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Food Zone | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;

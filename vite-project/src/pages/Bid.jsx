import React from "react";
import "../styles/bid.css";
import logo from "../media/logo.png";

const Bid = () => {
  return (
    <div className="bid-container">
      {/* Header */}
      <header className="bid-header">
        <div className="bid-header-container">
          <div className="bid-logo">
            <img src={logo} alt="KisaanVerse Logo" />
            <div className="bid-logo-text">
              Kisaan<span>Verse</span>
            </div>
          </div>
          <nav>
            <ul className="bid-nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#auctions">Live Auctions</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#">Sell Produce</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
          <div className="bid-auth-buttons">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bid-hero">
        <div className="bid-hero-content">
          <h1>Farm Produce Auctions Made Simple</h1>
          <p>
            Connect directly with farmers and buyers through our transparent
            auction platform. Get the best prices for your agricultural
            products.
          </p>
          <div className="bid-buttons">
            <button className="btn btn-primary">Start Selling</button>
            <button className="btn btn-outline">Browse Auctions</button>
          </div>
        </div>
      </section>

      {/* Live Auctions */}
      <section className="bid-container" id="auctions">
        <h2 className="bid-section-title">Live Produce Auctions</h2>
        <div className="bid-auction-grid">
          {/* Auction Card */}
          <div className="bid-auction-card">
            <div className="bid-product-image-container">
              <img src="/tomato.jpeg" alt="Fresh Tomatoes" className="bid-product-image" />
            </div>
            <div className="bid-product-info">
              <h3 className="bid-product-title">Organic Tomatoes</h3>
              <p className="bid-product-seller">From: Farmer Rajesh, Maharashtra</p>
              <p className="bid-product-description">
                Freshly harvested organic tomatoes, chemical-free, 1 week since
                harvest.
              </p>
              <div className="bid-product-meta">
                <span className="bid-product-quantity">Quantity: 200kg</span>
                <span className="bid-product-location">Location: Nashik</span>
              </div>
              <div className="bid-auction-status">
                <span className="bid-current-bid">₹45/kg</span>
                <span className="bid-time-left">12h 30m left</span>
              </div>
              <form className="bid-form">
                <input type="number" placeholder="Your bid (₹/kg)" className="bid-input" min="46" step="0.5" />
                <button type="submit" className="bid-btn">Bid Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bid;

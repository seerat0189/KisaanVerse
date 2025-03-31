import React from "react";
import "../styles/tomato.css";

const Tomato = () => {
  return (
    <div className="tomato-page">
      <div className="container">
        <header className="header">
          <h1>Tomato - Fresh & Organic</h1>
        </header>

        <div className="product-section">
          <div className="product-image">
            <img src="https://img.freepik.com/free-photo/close-up-view-tomatoes-wooden-table_141793-10767.jpg?semt=ais_hybrid" alt="Tomato" />
          </div>
          <div className="product-info">
            <h2>Tomato</h2>
            <p className="vendor"><strong>Vendor:</strong> Local Harvest</p>
            <p className="vendor-track"><strong>Vendor Track Details:</strong> Available on request</p>
            <p className="quality"><strong>Quality:</strong> Organic</p>
            <p className="contact"><strong>Contact:</strong> +91 98765 43210</p>
            <p className="origin"><strong>Origin:</strong> Maharashtra, India</p>
            <p className="price"><strong>Price:</strong> 128INR/kg</p>
          </div>
        </div>

        <div className="nutrition-section">
          <h3>Nutrition Details (Per 100g)</h3>
          <ul>
            <li><strong>Carbohydrates:</strong> 3.9g</li>
            <li><strong>Proteins:</strong> 0.9g</li>
            <li><strong>Vitamins:</strong> Vitamin C, Vitamin K, Vitamin A</li>
            <li><strong>Minerals:</strong> Potassium, Calcium, Magnesium</li>
            <li><strong>Iron Content:</strong> 0.3mg</li>
          </ul>
        </div>

        <div className="back-section">
          <a href="/marketplace" className="back-button">← Back to Marketplace</a>
        </div>
      </div>
    </div>
  );
};

export default Tomato;

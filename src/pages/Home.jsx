import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
}
  
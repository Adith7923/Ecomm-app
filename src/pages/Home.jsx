import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <a href="/products" className="shop-now-btn">Shop Now</a>
      </div>
    </div>
  );
}
  
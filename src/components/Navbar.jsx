import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">ShopEase</h1>
      <div className="links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="nav-link logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="nav-link">Logout</Link>
        )}
      </div>
    </nav>
  );
}

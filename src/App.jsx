import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; 
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <MainContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
  );
}

function MainContent({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();

  return (
    <>
      {isAuthenticated && location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
        <Route path="/products/:id" element={isAuthenticated ? <ProductDetails /> : <Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

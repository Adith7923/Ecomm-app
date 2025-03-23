import  React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-details-container">
      <div className="productImage">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

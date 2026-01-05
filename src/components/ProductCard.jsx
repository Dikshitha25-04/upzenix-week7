import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹ {product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

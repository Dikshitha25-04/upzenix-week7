import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartStore } from "../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (
    <div className="details-container">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>
        <button onClick={() => addToCart(product)} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

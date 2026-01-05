import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  if (cart.length === 0)
    return <h2 style={{ padding: "40px" }}>Cart is empty</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>Qty: {item.qty}</p>
            <p>₹ {item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="btn">
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* <Link to="/checkout" className="btn" style={{ marginTop: "20px" }}>
        Proceed to Checkout
      </Link> */}
      {cart.length > 0 && (
  <Link to="/checkout" className="btn" style={{ marginTop: "20px" }}>
    Proceed to Checkout
  </Link>
)}

    </div>
  );
};

export default Cart;

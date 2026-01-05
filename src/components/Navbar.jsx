import { Link } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";

const Navbar = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <h2 className="logo">ShopNow</h2>

      {/* RIGHT: LINKS + THEME */}
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

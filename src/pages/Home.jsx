import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1>Shop Smart. Live Better.</h1>
        <p>
          Discover products that match your lifestyle.  
          Simple. Fast. Reliable.
        </p>

        <Link to="/products" className="home-btn">
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default Home;

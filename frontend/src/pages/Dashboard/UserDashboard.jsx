// import ProductList from "../Product/View/ProductList";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiPackage
} from "react-icons/fi";
import ProductCard from "../../components/Card";
import SearchProducts from "../../components/Search";
const categories = [
  "Electronics",
  "Mobiles",
  "Laptops",
  "Accessories",
  "Fashion",
  "Home",
];


const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

  <div className="logo">
    <span className="logo-icon">🛍️</span>
    <span className="logo-text">ShopEase</span>
  </div>

  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/">Products</a>
    <a href="/">Categories</a>
    <a href="/">Deals</a>
    <a href="/">Contact</a>
  </div>

  <div className="nav-right">

    <div className="search-container">
      <span className="search-icon"><FiSearch /></span>

      <input
        type="text"
        placeholder="Search for products..."
        className="search-box"
      />
    </div>

    <button className="cart-btn">
      <FiShoppingCart />
      <span>Cart</span>
      <span className="cart-count">2</span>
    </button>

    <button
      className="order-btn"
      onClick={() => navigate("/dashboard-problem")}
    >
      <FiPackage />
      <span>Orders</span>
    </button>

    <button className="profile-btn">
      <FiUser />
      <span>Profile</span>
    </button>

    <button className="logout-btn">
      <FiLogOut />
      <span>Logout</span>
    </button>

  </div>

</nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Discover Amazing Products
          </h1>

          <p>
            Shop thousands of products with the best quality and
            unbeatable prices.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

        <div className="hero-right">
          📦
        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <SearchProducts />
      <ProductCard
        product={{
          // image: "https://via.placeholder.com/300x200",
          name: "Hello",
          description:
            "Hello",
        }}
      />
      {/* ================= Available Products ================= */}
      {/* <ProductList /> */}

      {/* ================= CATEGORIES ================= */}

      <section className="category-section">

        <h2>Browse Categories</h2>

        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className="category-card"
              key={index}
            >
              <h3>{category}</h3>

              <p>
                Explore {category} products
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Featured Products will be added in Part 2 */}

    </div>
  );
};

export default UserDashboard;
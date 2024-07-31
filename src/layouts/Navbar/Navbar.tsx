import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { CartMenu } from "../../components";
import { Bag, MagnifyingGlass } from "@phosphor-icons/react";
import "./Navbar.css";

interface NavbarProps {
  isCartVisible: boolean;
  showCart: () => void;
  hideCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCartVisible, showCart, hideCart }) => {
  const navigate = useNavigate();
  const { state } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span onClick={() => navigate("/")} className="navbar-brand">
          Lifters Shop
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">Shop</li>
          <li className="nav-item">Stories</li>
          <li className="nav-item">About</li>
          <li className="nav-item-search">
            <MagnifyingGlass size={18} />
            <span>Search</span>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="cart-info">
          <div onClick={showCart} className="cart-info-icon">
            <Bag size={24} />
            <span className="cart-count">{state.cart.length}</span>
          </div>
          <span className="login-text">Login</span>
        </div>
      </div>
      {isCartVisible && (
        <div className="cart-overlay" onClick={hideCart}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <CartMenu cart={state.cart} />
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };

import React from "react";
import { Bag, MagnifyingGlass } from "@phosphor-icons/react";
import "./Navbar.css";

interface NavbarProps {
  totalItems: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Lifters Shop</span>
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
          <Bag size={24} />
          <span className="cart-count">{totalItems}</span>
          <span className="login-text">Login</span>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };

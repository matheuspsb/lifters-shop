import React from "react";
import { CartItem } from "../CartItem";
import { CartState } from "../../contexts/CartContext";
import "./Cart.css";
import { CustomButton } from "../CustomButton";
import { useNavigate } from "react-router-dom";

interface ICart {
  cart: CartState["cart"];
}

const Cart: React.FC<ICart> = ({ cart }) => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  }
  
  const getTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          id={item.id}
        />
      ))}

      {cart.length === 0 ? (
        <div>
          <h5>Your cart is empty :(</h5>
        </div>
      ) : (
        <>
          <div className="cart-total">
            <span>Total:</span>
            <span>${getTotal()}</span>
          </div>

          <CustomButton
            title="Checkout"
            backgroundColor="#fff"
            titleColor="#000"
            onClick={navigateToCheckout}
          />
        </>
      )}
    </>
  );
};

export { Cart };

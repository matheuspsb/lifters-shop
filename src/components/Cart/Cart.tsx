import React from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../contexts/CartContext";
import { CartItem } from "../CartItem";
import { CustomButton } from "../CustomButton";
import "./Cart.css";

interface ICart {
  cart: CartState["cart"];
}

const Cart: React.FC<ICart> = ({ cart }) => {
  const navigate = useNavigate();

  const navigateToPayment = () => {
    navigate("/payment");
  };

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
            onClick={navigateToPayment}
          />
        </>
      )}
    </>
  );
};

export { Cart };

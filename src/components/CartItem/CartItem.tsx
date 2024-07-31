import { Trash } from "@phosphor-icons/react";
import { useCart } from "../../contexts/CartContext";
import "./CartItem.css";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const CartItem = ({ name, price, image, id }: CartItem) => {
  const { dispatch } = useCart();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { name, image, price, id } });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-details-info">
          <span>{name}</span>
          <span>{price}</span>
        </div>

        <div className="cart-item-details-footer">
          <div className="cart-item-details-sizeColor">
            <span>M</span>
            <span></span>
          </div>
          <Trash
            size={20}
            onClick={removeFromCart}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export { CartItem };

import { Trash } from "@phosphor-icons/react";
import { useCart } from "../../contexts/CartContext";
import "./ProductCard.css";

interface IProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, price, image }: IProductItem) => {
  const { dispatch } = useCart();
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { name, image, price, id } });
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-card-details">
        <div className="product-card-details-info">
          <span>{name}</span>
          <span>{price}</span>
        </div>

        <div className="product-card-details-footer">
          <div className="product-card-details-sizeColor">
            <span>M</span>
            <span></span>
          </div>
          <Trash
            size={32}
            onClick={removeFromCart}
            style={{ cursor: "pointer" }}
            color="#000"
          />
        </div>
      </div>
    </div>
  )
}

export { ProductCard };
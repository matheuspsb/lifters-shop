import { Bag } from "@phosphor-icons/react";
import { useCart } from "../../contexts/CartContext";
import { CustomButton, ProductCard } from "../../components";
import "./Payment.css";

const Payment = () => {
  const { state } = useCart();

  return (
    <div className="payment">
      <div className="payment-header">
        <div className="payment-header-title">
          <Bag size={48} color="#000" />
          <h6>Your bag</h6>
        </div>
        <CustomButton title="Back" />
      </div>

      <div className="payment-body">
        <div className="payment-body-cart">
          {state.cart.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;

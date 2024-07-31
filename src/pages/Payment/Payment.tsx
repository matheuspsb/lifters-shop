import { useNavigate, useOutletContext } from "react-router-dom";
import { Bag } from "@phosphor-icons/react";
import { useCart } from "../../contexts/CartContext";
import { CustomButton, ProductCard } from "../../components";
import "./Payment.css";
import { useEffect } from "react";
import { CartVisibility } from "../../types";

const Payment = () => {
  const navigate = useNavigate();
  const { hideCart } = useOutletContext<CartVisibility>();
  const { state } = useCart();

  useEffect(() => {
    hideCart();
  }, [hideCart]);

  return (
    <div className="payment">
      <div className="payment-header">
        <div className="payment-header-title">
          <Bag size={48} color="#000" />
          <h6>Your bag</h6>
        </div>
        <CustomButton
          title="Back"
          backgroundColor="#DAE1EA"
          width="100px"
          onClick={() => navigate(-1)}
        />
      </div>

      <div className="payment-body">
        <div className="payment-body-cart">
          {state.cart.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}

          <div className="payment-body-form">
            <div className="payment-body-form-total">
              <span>Total:</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Bag, Lock } from "@phosphor-icons/react";
import { useCart } from "../../contexts";
import { CustomButton, PaymentForm, ProductCard } from "../../components";
import { CartVisibility } from "../../types";
import "./Payment.css";

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
          {state.cart.length > 0 ? (
            state.cart.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <h1 style={{ textAlign: "center", color: "#000" }}>
              Cart is empty
            </h1>
          )}

          <div className="payment-body-security">
            <div className="payment-body-security-iconText">
              <Lock color="#000" size={32} />
              <span>Security & Privacy</span>
            </div>
            <span className="payment-body-security-text">
              Every transaction on <b>Lifters Shop</b> is secure. Any personal
              information you give us will be handled according to our{" "}
              <u style={{ cursor: "pointer" }}>Privacy Policy.</u>
            </span>
          </div>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default Payment;

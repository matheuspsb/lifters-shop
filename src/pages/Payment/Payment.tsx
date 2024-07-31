import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Bag } from "@phosphor-icons/react";
import { useCart, useError } from "../../contexts";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  ProductCard,
} from "../../components";
import { CartVisibility } from "../../types";
import {
  formatCardNumber,
  formatCVV,
  validateCardholderName,
  validateCardNumber,
  validateCVV,
} from "../../utils/utils";
import cardLogo from "../../assets/elo-logo.png";
import "./Payment.css";

const expiryMonth = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Payment = () => {
  const navigate = useNavigate();
  const { hideCart } = useOutletContext<CartVisibility>();
  const { state, getTotalPrice } = useCart();
  const { errors } = useError();

  const [termsAccepted, setTermsAccepted] = useState(false);
  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    hideCart();
  }, [hideCart]);

  const handleTermsChange = () => {
    if (!termsAccepted) {
      setTermsAccepted(true);
      if (radioRef.current) {
        radioRef.current.checked = true;
      }
    }
  };

  const handleCheckout = () => {
    const hasErrors = Object.values(errors).some((error) => error !== undefined);
    if (!state.cart.length) {
      alert("Your cart is empty.");
      return;
    }
    if (hasErrors) {
      alert("Please fill in all fields correctly.");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms.");
      return;
    }
    navigate("/success");
  };

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
        </div>
        <div className="payment-body-form">
          <div className="payment-body-form-total">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
          <div className="payment-body-form-info">
            <CustomInput
              label="Card number"
              placeholder="0000 0000 0000 0000"
              htmlFor="card-number"
              maxLength={19}
              icon={cardLogo}
              validate={validateCardNumber}
              format={formatCardNumber}
            />
            <CustomInput
              label="Cardholder Name"
              placeholder="RAM"
              htmlFor="holder-name"
              validate={validateCardholderName}
            />
            <div className="payment-body-form-select">
              <CustomSelect
                label="Expiry Month"
                htmlFor="expiry-month"
                options={expiryMonth}
              />
              <CustomSelect
                label="Expiry Year"
                htmlFor="expiry-year"
                options={Array.from(
                  { length: 10 },
                  (_, i) => new Date().getFullYear() + i
                ).map(String)}
              />
            </div>
            <CustomInput
              label="CVV"
              placeholder="-"
              htmlFor="cvv"
              format={formatCVV}
              validate={validateCVV}
              maxLength={4}
            />

            <div className="payment-body-form-terms">
              <input
                type="radio"
                id="terms"
                ref={radioRef}
                onChange={handleTermsChange}
                checked={termsAccepted}
              />
              <label htmlFor="terms" onClick={handleTermsChange}>
                Aceitar todos os termos
              </label>
            </div>
          </div>

          <CustomButton
            backgroundColor="#fff"
            title="Checkout"
            titleColor="#000"
            onClick={handleCheckout}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

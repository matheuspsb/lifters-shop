import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  paymentFormSchema,
  PaymentFormSchemaType,
} from "../../schemas/paymentSchema";
import { useCart } from "../../contexts";
import { CustomInput } from "../CustomInput";
import { CustomSelect } from "../CustomSelect";
import { CustomButton } from "../CustomButton";
import { CustomCheckbox } from "../CustomCheckbox";
import { formatCardNumber } from "../../utils/utils";
import { expiryMonth } from "./expiryMonth";
import cardLogo from "../../assets/elo-logo.png";

const PaymentForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormSchemaType>({
    resolver: zodResolver(paymentFormSchema),
  });

  const { getTotalPrice } = useCart();

  function handlePaymentForm(data: PaymentFormSchemaType) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handlePaymentForm)}
      className="payment-body-form"
    >
      <div className="payment-body-form-total">
        <span>Total:</span>
        <span>${getTotalPrice()}</span>
      </div>
      <div className="payment-body-form-info">
        <Controller
          name="cardNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              {...field}
              label="Card number"
              placeholder="0000 0000 0000 0000"
              icon={cardLogo}
              maxLength={19}
              onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
              value={formatCardNumber(field.value)}
              errorMessage={errors.cardNumber?.message}
              register={register}
            />
          )}
        />
        <CustomInput
          name="cardHolderName"
          label="Cardholder Name"
          placeholder="RAM"
          register={register}
          errorMessage={errors.cardHolderName?.message}
        />
        <div className="payment-body-form-select">
          <CustomSelect
            label="Expiry Month"
            name="expiryMonth"
            register={register}
            options={expiryMonth}
            errorMessage={errors.expiryMonth?.message}
          />
          <CustomSelect
            label="Expiry Year"
            name="expiryYear"
            options={Array.from(
              { length: 10 },
              (_, i) => new Date().getFullYear() + i
            ).map(String)}
            register={register}
            errorMessage={errors.expiryYear?.message}
          />
        </div>
        <CustomInput
          name="cvv"
          label="CVV"
          placeholder="-"
          register={register}
          maxLength={4}
          errorMessage={errors.cvv?.message}
        />

        <CustomCheckbox
          name="terms"
          label="Aceitar todos os termos"
          errorMessage={errors.terms?.message}
          register={register}
        />
      </div>

      <CustomButton
        backgroundColor="#fff"
        title="Checkout"
        titleColor="#000"
        type="submit"
      />
    </form>
  );
};

export { PaymentForm };

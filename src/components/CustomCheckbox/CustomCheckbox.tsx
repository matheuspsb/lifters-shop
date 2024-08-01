import "./CustomCheckbox.css";

interface ICustomCheckboxProps {
  name: string;
  label: string;
  register: any;
  errorMessage?: string;
  checked?: boolean;
}

const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({
  name,
  label,
  register,
  errorMessage,
  checked,
}) => {
  return (
    <>
      <div className="payment-body-form-terms">
        <input type="checkbox" {...register(name)} checked={checked} />
        <label>{label}</label>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
};

export { CustomCheckbox };
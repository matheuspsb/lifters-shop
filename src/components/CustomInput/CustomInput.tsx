import "./CustomInput.css";

interface ICustomInputProps {
  type?: string;
  value?: string;
  name: string;
  label: string;
  placeholder: string;
  register: any;
  icon?: string;
  errorMessage?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  type = "text",
  name,
  value,
  label,
  placeholder,
  icon,
  register,
  errorMessage,
  maxLength,
  onChange
}) => {
  return (
    <div className="input-group">
      <label style={errorMessage ? { color: "red" } : {}}>{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          className={`input-field ${errorMessage ? "error" : ""}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          {...register(name)}
        />
        {icon && <img src={icon} alt="elo logo" className="input-logo" />}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export { CustomInput };

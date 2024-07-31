import { useEffect, useState } from "react";
import "./CustomInput.css";

interface ICustomInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  htmlFor?: string;
  icon?: string;
  errorMessage?: string;
  maxLength?: number;
  validate?: (value: string) => string | undefined;
  format?: (value: string) => string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  type = "text",
  label,
  placeholder,
  icon,
  errorMessage,
  htmlFor,
  maxLength,
  validate,
  format,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>(errorMessage);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (validate && isTouched) {
      setError(validate(value));
    }
  }, [value, validate, isTouched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (format) {
      newValue = format(newValue);
    }
    setValue(newValue);
    if (!isTouched) setIsTouched(true);
  };

  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{label}</label>
      <div className="input-wrapper">
        <input
          id={htmlFor}
          type={type}
          className={`input-field ${error ? "error" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
        {icon && <img src={icon} alt="elo logo" className="input-logo" />}
      </div>
      {error && isTouched && <div className="error-message">{error}</div>}
    </div>
  );
};

export { CustomInput };

/* 
<div className="input-group">
              <label htmlFor="expiry-month">Expiry Month</label>
              <input id="expiry-month" type="text" className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="expiry-year">Expiry Year</label>
              <input id="expiry-year" type="text" className="input-field" />
            </div>
*/

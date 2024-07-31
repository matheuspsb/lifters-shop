import { useEffect, useState } from "react";
import { useError } from "../../contexts/ErrorContext";
import "./CustomInput.css";

interface ICustomInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  htmlFor: string;
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
  htmlFor,
  maxLength,
  validate,
  format,
}) => {
  const { errors, setErrors } = useError();
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (validate && isTouched) {
      const error = validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [htmlFor!]: error }));
    }
  }, [value, validate, isTouched, htmlFor, setErrors]);

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
          className={`input-field ${errors[htmlFor!] ? "error" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
        {icon && <img src={icon} alt="elo logo" className="input-logo" />}
      </div>
      {errors[htmlFor] && isTouched && (
        <div className="error-message">{errors[htmlFor]}</div>
      )}
    </div>
  );
};

export { CustomInput };

import "./CustomSelect.css";

interface ICustomSelectProps {
  label?: string;
  placeholder?: string;
  name?: string;
  options: string[];
  errorMessage?: string;
  register?: any;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  label,
  placeholder,
  errorMessage,
  name,
  options,
  register,
}) => {
  return (
    <div className="select-group">
      <label style={errorMessage ? { color: "red" } : {}}>{label}</label>
      <div className="input-wrapper">
        <select
          {...register(name)}
          className={`input-field ${errorMessage ? "error" : ""}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export { CustomSelect };

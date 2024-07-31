import "./CustomSelect.css";

interface ICustomSelectProps {
  label?: string;
  placeholder?: string;
  htmlFor?: string;
  options: string[];
  errorMessage?: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  label,
  placeholder,
  errorMessage,
  htmlFor,
  options,
}) => {

  return (
    <div className="select-group">
      <label htmlFor={htmlFor}>{label}</label>
      <div className="input-wrapper">
        <select id={htmlFor} className={`input-field ${errorMessage ? "error" : ""}`}>
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export { CustomSelect };
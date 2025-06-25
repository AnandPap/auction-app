import { splitCamelCase } from "../utils/helper-functions";
import { type LoginRegInputProps } from "../types/auth";

const LoginRegInput = ({ fieldObj, isError, errorMessage = "", details, inputOnChange }: LoginRegInputProps) => {
  return (
    <div className="login-reg-input-group">
      <label htmlFor={fieldObj.fieldName}>{splitCamelCase(fieldObj.fieldName)}</label>
      <input
        id={fieldObj.fieldName}
        name={fieldObj.fieldName}
        type={fieldObj.type}
        className={`login-reg-input ${isError ? "login-reg-input-error" : ""}`}
        value={details[fieldObj.fieldName]}
        placeholder={fieldObj.placeholder}
        onChange={inputOnChange}
        required
      />
      {errorMessage && <p className="login-reg-input-error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginRegInput;

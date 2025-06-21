import React from "react";
import { splitCamelCase } from "../utils/helper-functions";
import type { RegDetails } from "../pages/Registration";
import type { LoginDetails } from "../pages/Login";

interface FieldObj {
  fieldName: string;
  type: string;
  placeholder: string;
}

interface ForgotPassword {
  email: string;
  [key: string]: string;
}

interface LoginRegInput {
  fieldObj: FieldObj;
  isError: boolean;
  errorMessage?: string;
  details: LoginDetails | RegDetails | ForgotPassword;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginRegInput = ({ fieldObj, isError, errorMessage = "", details, inputOnChange }: LoginRegInput) => {
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

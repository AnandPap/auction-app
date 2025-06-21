import { useState, type FormEvent } from "react";
import LoginRegInput from "../components/LoginRegInput";
import LoginRegAuctionLogo from "../components/LoginRegAuctionLogo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== "") setError("");
    setEmail(e.target.value);
  };

  return (
    <div className="login-reg-page">
      <LoginRegAuctionLogo />
      <div className="login-reg-form-wrapper">
        <h2 className="login-reg-title">FORGOT PASSWORD</h2>
        <form onSubmit={handleForgotPassword} className="login-reg-form">
          <p className="pale-text">
            Lost your password? Please enter your username or email address. You will receive a link to create a new
            password via email.
          </p>
          <LoginRegInput
            fieldObj={{ fieldName: "email", type: "text", placeholder: "user@domain.com" }}
            isError={error !== ""}
            details={{ email: email }}
            inputOnChange={inputOnChange}
          />
          <button type="submit" className="login-reg-button reset-password-button">
            RESET PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

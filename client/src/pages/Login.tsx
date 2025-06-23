import { Link } from "react-router";
import { useState } from "react";
import { logIn } from "../services/fetchFunctions";
import { useAppDispatch } from "../redux/hooks";
import { setGuestEnter } from "../redux/auctionapp";
import { smoothScrollToTop } from "../utils/helper-functions";
import LoginRegInput from "../components/LoginRegInput";
import OtherLoginRegOptions from "../components/OtherLoginRegOptions";
import LoginRegAuctionLogo from "../components/LoginRegAuctionLogo";
import type { LoginDetails } from "../types/auth";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "asd@asd.asd",
    password: "asdasdqwe",
  });
  const [error, setError] = useState({
    message: "Email and password do not match",
    type: "user",
  });

  const dispatch = useAppDispatch();

  const loginFields = [
    { fieldName: "email", type: "text", placeholder: "user@domain.com" },
    { fieldName: "password", type: "password", placeholder: "********" },
  ];

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await logIn(loginDetails);
    if (res) {
      console.log("Login successful");
      // console.log(res of type AuthResponse);
    }
  };

  const handleGuestEnter = () => {
    dispatch(setGuestEnter(true));
    smoothScrollToTop();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error.message !== "") setError({ type: "", message: "" });
    setLoginDetails((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login-reg-page">
      <LoginRegAuctionLogo />
      <div className="login-reg-form-wrapper">
        <h2 className="login-reg-title">LOGIN</h2>
        <form onSubmit={handleLogIn} className="login-reg-form">
          {loginFields.map((fieldObj, i) => (
            <LoginRegInput
              key={i}
              fieldObj={fieldObj}
              isError={error.message !== ""}
              details={loginDetails}
              inputOnChange={inputOnChange}
            />
          ))}
          <div className="remember-me-wrapper">
            <label htmlFor="remember-me">Remember me</label>
            <input id="remember-me" type="checkbox" />
          </div>
          {error.message && <p className="login-reg-input-error-message">{error.message ? error.message : ""}</p>}
          <button type="submit" className="login-reg-button">
            LOG IN
          </button>
          <OtherLoginRegOptions type="Log In" />
          <Link to="/forgot-password" onClick={smoothScrollToTop} className="login-forgot-password">
            Forgot Password?
          </Link>
          <div className="login-reg-footer-wrapper">
            <p>First time visiting?</p>
            <div className="login-reg-footer">
              <Link to="/signup" onClick={smoothScrollToTop} className="login-reg-link">
                Create an Account
              </Link>
              <span className="or-word">or</span>
              <Link to="/home" onClick={handleGuestEnter} className="login-reg-link">
                Continue as Guest
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

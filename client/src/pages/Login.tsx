import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { logInUser } from "../services/fetchFunctions";
import { useAppDispatch } from "../redux/hooks";
import { continueAsGuest, login, setToast } from "../redux/auctionapp";
import { smoothScrollToTop } from "../utils/helper-functions";
import LoginRegInput from "../components/LoginRegInput";
import OtherLoginRegOptions from "../components/OtherLoginRegOptions";
import LoginRegAuctionLogo from "../components/LoginRegAuctionLogo";
import type { LoginDetails } from "../types/auth";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "anandpap@live.com",
    password: "asdasdasd",
  });
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginFields = [
    { fieldName: "email", type: "text", placeholder: "user@domain.com" },
    { fieldName: "password", type: "password", placeholder: "********" },
  ];

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await logInUser(loginDetails);
    if (!res || "code" in res) setError("Unexpected error occured");
    else if (res.token === null) {
      setError(res.error || "Login failed");
    } else {
      dispatch(login({ user: res.user, token: res.token }));
      navigate("/home");
      dispatch(
        setToast({
          text: "Login successful",
          type: "success",
        })
      );
      smoothScrollToTop();
    }
  };

  const handleGuestEnter = () => {
    dispatch(continueAsGuest());
    navigate("/home");
    smoothScrollToTop();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== "") setError("");
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
              isError={error !== ""}
              details={loginDetails}
              inputOnChange={inputOnChange}
            />
          ))}
          <div className="remember-me-wrapper">
            <label htmlFor="remember-me">Remember me</label>
            <input id="remember-me" type="checkbox" />
          </div>
          {error && <p className="login-reg-input-error-message">{error ? error : ""}</p>}
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
              <span className="separator">or</span>
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

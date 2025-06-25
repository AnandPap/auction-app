import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signUpUser } from "../services/fetchFunctions";
import { smoothScrollToTop } from "../utils/helper-functions";
import LoginRegInput from "../components/LoginRegInput";
import OtherLoginRegOptions from "../components/OtherLoginRegOptions";
import LoginRegAuctionLogo from "../components/LoginRegAuctionLogo";
import type { RegDetails, RegErrors } from "../types/auth";
import { useAppDispatch } from "../redux/hooks";
import { login, setToast } from "../redux/auctionapp";

const Registration = () => {
  const [regDetails, setRegDetails] = useState<RegDetails>({
    firstName: "Anand",
    lastName: "Pap",
    email: "anandpap@live.com",
    password: "asdasd12E",
    confirmPassword: "asdasd12E",
  });
  const [errors, setErrors] = useState<RegErrors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [serverError, setServerError] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrationFields = [
    { fieldName: "firstName", type: "text", placeholder: "Jon" },
    { fieldName: "lastName", type: "text", placeholder: "Doe" },
    { fieldName: "email", type: "text", placeholder: "user@domain.com" },
    {
      fieldName: "password",
      type: "password",
      placeholder: "At least 1 capital letter, 1 number and 1 special character",
    },
    { fieldName: "confirmPassword", type: "password", placeholder: "********" },
  ];

  const validateRegistrationDetails = () => {
    let passwordError = "";
    let noError = true;

    if (regDetails.firstName.length < 2 && !(noError = false))
      setErrors((s) => ({ ...s, firstName: "First name must be at least 2 characters long" }));
    if (regDetails.lastName.length < 2 && !(noError = false))
      setErrors((s) => ({ ...s, lastName: "Last name must be at least 2 characters long" }));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regDetails.email) && !(noError = false))
      setErrors((s) => ({ ...s, email: "Email invalid" }));
    if (regDetails.password.length < 8) passwordError += "\nbe of length 8 or higher ";
    if (!/[A-Z]/.test(regDetails.password)) passwordError += "\ncontain at least 1 capital letter ";
    if (!/\d/.test(regDetails.password)) passwordError += "\ncontain at least 1 digit.";
    if (regDetails.password !== regDetails.confirmPassword && !(noError = false))
      setErrors((s) => ({ ...s, confirmPassword: "Passwords don't match" }));

    if (passwordError !== "" && !(noError = false)) passwordError = "Password must: " + passwordError;
    setErrors((s) => ({ ...s, password: passwordError }));
    return noError;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateRegistrationDetails()) {
      const res = await signUpUser(regDetails);
      if (!res || "code" in res) setServerError(res?.errorData.error || "Unexpected error occured");
      else if (res.token === null) {
        setServerError(res.error || "Registration failed");
      } else {
        dispatch(login({ user: res.user, token: res.token }));
        navigate("/home");
        dispatch(
          setToast({
            text: "Registration successful\nLogged in",
            type: "success",
          })
        );
        smoothScrollToTop();
      }
    } else setServerError("");
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors[e.target.name] !== "") setErrors((s) => ({ ...s, [e.target.name]: "" }));
    setRegDetails((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login-reg-page">
      <LoginRegAuctionLogo />
      <div className="login-reg-form-wrapper">
        <h2 className="login-reg-title">REGISTRATION</h2>
        <form onSubmit={handleSignUp} className="login-reg-form">
          {registrationFields.map((fieldObj, i) => (
            <LoginRegInput
              key={i}
              fieldObj={fieldObj}
              isError={errors[fieldObj.fieldName] !== ""}
              errorMessage={errors[fieldObj.fieldName]}
              details={regDetails}
              inputOnChange={inputOnChange}
            />
          ))}
          {serverError && <p className="login-reg-input-error-message">{serverError ? serverError : ""}</p>}
          <button type="submit" className="login-reg-button">
            SIGN UP
          </button>
          <OtherLoginRegOptions type="Sign Up" />
          <div className="login-reg-footer-wrapper">
            <p>Already have an account?</p>
            <Link to="/login" onClick={smoothScrollToTop} className="login-reg-link">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

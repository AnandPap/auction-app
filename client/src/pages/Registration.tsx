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
    password: "asdasdasd",
    confirmPassword: "asdasdasd",
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
    { fieldName: "password", type: "password", placeholder: "********" },
    { fieldName: "confirmPassword", type: "password", placeholder: "********" },
  ];

  const validateRegistrationDetails = () => {
    if (regDetails.firstName.length < 2)
      setErrors((s) => ({ ...s, firstName: "First name must be at least 2 characters long" }));
    if (regDetails.lastName.length < 2)
      setErrors((s) => ({ ...s, lastName: "Last name must be at least 2 characters long" }));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regDetails.email)) setErrors((s) => ({ ...s, email: "Email invalid" }));
    if (regDetails.password.length < 8)
      setErrors((s) => ({ ...s, password: "Password must be of length 8 or higher" }));
    if (regDetails.password !== regDetails.confirmPassword)
      setErrors((s) => ({ ...s, confirmPassword: "Passwords don't match" }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateRegistrationDetails();

    const thereIsAValidationError = Object.values(errors).some((value) => value !== "");
    if (!thereIsAValidationError) {
      const res = await signUpUser(regDetails);
      if (!res || "code" in res) setServerError(res?.errorData.error || "Unexpected error occured");
      else if (res.token === null) {
        setServerError(res.error || "Registration failed");
      } else {
        dispatch(login({ user: res.user, token: res.token }));
        navigate("/home");
        dispatch(
          setToast({
            text: "Registration successful, Logged in",
            type: "success",
          })
        );
        smoothScrollToTop();
      }
    }
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

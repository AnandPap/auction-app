import { useState } from "react";
import AuctionLogo from "../assets/logo/auctionapplogo.png";
import { Link } from "react-router";
import { signUp } from "../services/fetchFunctions";
import { smoothScrollToTop } from "../utils/helper-functions";
import LoginRegInput from "../components/LoginRegInput";
import OtherLoginRegOptions from "../components/OtherLoginRegOptions";

export interface RegDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string;
}
type RegErrors = RegDetails;

const Registration = () => {
  const [regDetails, setRegDetails] = useState<RegDetails>({
    firstName: "s",
    lastName: "s",
    email: "asd@asd.asd",
    password: "asdqwe",
    confirmPassword: "asdqwe",
  });
  const [errors, setErrors] = useState<RegErrors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [serverError, setServerError] = useState("");

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
      const res = await signUp(regDetails);
      console.log(res);
    }
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors[e.target.name] !== "") setErrors((s) => ({ ...s, [e.target.name]: "" }));
    setRegDetails((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login-reg-page">
      <div className="login-reg-auction-logo-wrapper">
        <img src={AuctionLogo} alt="Auction Logo" />
      </div>
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

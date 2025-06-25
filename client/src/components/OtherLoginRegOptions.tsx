import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import { Link } from "react-router";

const OtherLoginRegOptions = ({ type }: { type: string }) => {
  return (
    <div className="other-login-reg-options">
      <Link to="https://www.facebook.com/" target="_blank" className="facebook-login-reg">
        <span className="facebook-icon-wrapper">
          <RiFacebookBoxFill size={35} color="hsl(223, 45%, 49%)" />
        </span>
        <span>{type} with Facebook</span>
      </Link>
      <Link to="https://accounts.google.com/" target="_blank" className="google-login-reg">
        <span>
          <FcGoogle size={30} />
        </span>
        <span>{type} with Google</span>
      </Link>
    </div>
  );
};

export default OtherLoginRegOptions;

import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";

const IconGroup = () => {
  return (
    <div className="header-icons">
      <a href="https://www.facebook.com/" target="_blank" title="Facebook">
        <FaFacebook className="facebook-icon" color="gray" />
      </a>
      <a className="insta-icon-wrapper" href="https://www.instagram.com/" target="_blank" title="Instagram">
        <ImInstagram className="insta-icon" color="black" size={"0.5rem"} />
      </a>
      <a href="https://www.x.com/" target="_blank" title="X">
        <AiFillTwitterCircle className="twitter-icon" color="gray" />
      </a>
    </div>
  );
};

export default IconGroup;

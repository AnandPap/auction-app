import { Link } from "react-router";
import IconGroup from "./IconGroup";
import { smoothScrollToTop } from "../utils/helper-functions";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <h3 className="footer-section-title">AUCTION</h3>
        <Link to="/about-us" onClick={smoothScrollToTop}>
          About Us
        </Link>
        <Link to="/terms-and-conditions" onClick={smoothScrollToTop}>
          Terms and Conditions
        </Link>
        <Link to="/privacy-and-policy" onClick={smoothScrollToTop}>
          Privacy and Policy
        </Link>
      </section>
      <section className="footer-section">
        <h3 className="footer-section-title">GET IN TOUCH</h3>
        <span>Call Us at +123 797-567-2535</span>
        <Link to="mailto:support@auction.com">support@auction.com</Link>
        <IconGroup />
      </section>
      <section className="footer-section">
        <h3 className="footer-section-title">NEWSLETTER</h3>
        <span>Enter your email address and get notified about new products. We hate Spam!</span>
        <form className="footer-send-email-form">
          <input className="footer-input" type="email" placeholder="Your Email Address" />
          <button className="footer-go-button" type="button">
            GO <span className="arrow-right"></span>
          </button>
        </form>
      </section>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectLoggedIn } from "../redux/auctionapp";
import IconGroup from "./IconGroup";

const Header = () => {
  const isLoggedIn = useAppSelector(selectLoggedIn);

  return (
    <header className="header">
      <IconGroup />
      {isLoggedIn ? (
        <div>
          <Link to="/user-profile" className="router-link">
            Welcome <span className="header-user-name">John Doe</span>
          </Link>
        </div>
      ) : (
        <div className="login-create-account">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <span className="header-or">or</span>
          <Link to="/signup" className="create-account-link">
            Create an account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

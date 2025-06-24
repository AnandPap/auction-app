import { Link, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectAuth, setToast } from "../redux/auctionapp";
import IconGroup from "./IconGroup";

const Header = () => {
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(
      setToast({
        text: "Logout successful",
        type: "success",
      })
    );
  };

  return (
    <header className="header">
      <IconGroup />
      {auth.token || auth.isGuest ? (
        <div>
          Welcome{" "}
          {auth.isGuest ? (
            '"John Doe"'
          ) : (
            <Link to="/user-profile" className="router-link">
              <span className="header-user-name">{auth.user?.firstName + " " + auth.user?.lastName}</span>
            </Link>
          )}
          <span className="header-separator">{" | "}</span>
          {auth.isGuest ? (
            location.pathname !== "/login" ? (
              <Link to="/login" className="login-link">
                Log In
              </Link>
            ) : (
              <Link to="/signup" className="create-account-link">
                Create an Account
              </Link>
            )
          ) : (
            <Link to="/login" onClick={handleLogout} className="login-link">
              Log Out
            </Link>
          )}
        </div>
      ) : (
        <div className="login-create-account">
          <Link to="/login" className="login-link">
            Log In
          </Link>
          <span className="header-separator">or</span>
          <Link to="/signup" className="create-account-link">
            Create an Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

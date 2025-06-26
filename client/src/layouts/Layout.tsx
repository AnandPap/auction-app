import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import { useAppSelector } from "../redux/hooks";
import { selectToast, selectAuth } from "../redux/auctionapp";

const Layout = () => {
  const toast = useAppSelector(selectToast);
  const auth = useAppSelector(selectAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/")
      if (auth.token || auth.isGuest) navigate("/home", { replace: true });
      else navigate("/login", { replace: true });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="layout">
      <Header />
      <Toast text={toast.text} show={toast.show} type={toast.type} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

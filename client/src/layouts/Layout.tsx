import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectLoggedIn } from "../redux/auctionapp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectLoggedIn);

  useEffect(() => {
    if (location.pathname === "/")
      if (isLoggedIn) navigate("/home", { replace: true });
      else navigate("/login", { replace: true });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

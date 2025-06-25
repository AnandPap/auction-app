import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import { useAppSelector } from "../redux/hooks";
import { selectToast } from "../redux/auctionapp";

const Layout = () => {
  const toast = useAppSelector(selectToast);

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

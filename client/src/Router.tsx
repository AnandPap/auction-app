import { useEffect } from "react";
import { BrowserRouter, redirect, Route, Routes } from "react-router";
import { useAppSelector } from "./redux/hooks";
import { selectAuth } from "./redux/auctionapp";
import ErrorBoundary from "./pages/ErrorBoundary";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import PublicRoute from "./components/PublicRoute";

// const ErrorTestComponent = () => {
//   throw new Error("Test");
// };

const Router = () => {
  const auth = useAppSelector(selectAuth);

  useEffect(() => {
    if (location.pathname === "/")
      if (auth.token || auth.isGuest) redirect("/home");
      else redirect("/login");
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        {/* <ErrorTestComponent /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Registration />} />
            </Route>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-and-policy" element={<PrivacyAndPolicy />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from "react-router";
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

// const ErrorTestComponent = () => {
//   throw new Error("Test");
// };

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        {/* <ErrorTestComponent /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Registration />} />
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

import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/auctionapp";

const ProtectedRoute = () => {
  const auth = useAppSelector(selectAuth);

  return auth.isGuest || auth.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

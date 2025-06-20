import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectLoggedIn, selectGuestEnter } from "../redux/auctionapp";

const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const isGuest = useAppSelector(selectGuestEnter);

  return isLoggedIn || isGuest ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

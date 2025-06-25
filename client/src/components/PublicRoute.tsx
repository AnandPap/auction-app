import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/auctionapp";

const PublicRoute = () => {
  const auth = useAppSelector(selectAuth);

  return auth.token ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;

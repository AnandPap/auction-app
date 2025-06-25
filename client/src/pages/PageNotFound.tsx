import AuctionLogo from "../assets/logo/auctionapplogo.png";
import BackButton from "../components/BackButton";

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <img className="auction-logo" src={AuctionLogo} alt="Auction Logo" />
      <div className="four-o-four">404</div>
      <p className="not-found-message">Oops! Looks like the page is Not Found</p>
      <BackButton />
    </div>
  );
};

export default PageNotFound;

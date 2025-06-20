import { IoMdRefresh } from "react-icons/io";

const RefreshButton = () => {
  const pageReload = () => window.location.reload();

  return (
    <button className="refresh-button" onClick={pageReload}>
      REFRESH
      <IoMdRefresh size={17} />
    </button>
  );
};

export default RefreshButton;

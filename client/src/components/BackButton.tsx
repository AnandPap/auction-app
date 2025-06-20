import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <span className="arrow-left" />
      GO BACK
    </button>
  );
};

export default BackButton;

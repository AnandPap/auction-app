import { useEffect, useState, type FC } from "react";
import success from "../assets/images/success.svg";
import error from "../assets/images/error.svg";
import { closeToast } from "../redux/auctionapp";
import { useAppDispatch } from "../redux/hooks";

interface ToastProps {
  text: string;
  show: boolean;
  type: "success" | "error" | undefined;
}

const Toast: FC<ToastProps> = ({ text, show, type }) => {
  const dispatch = useAppDispatch();
  const [toastTimeoutId, setToastTimeoutId] = useState<null | number>(null);

  useEffect(() => {
    if (toastTimeoutId) clearTimeout(toastTimeoutId);
    const id = setTimeout(() => dispatch(closeToast()), 4000);
    setToastTimeoutId(id);
    // eslint-disable-next-line
  }, [text, show]);

  const src = type === "success" ? success : type === "error" ? error : undefined;
  return (
    <div onClick={() => dispatch(closeToast())} className={`toast-box ${type} ${show ? "show" : ""}`}>
      <p>{text}</p>
      <img src={src} alt={type} />
    </div>
  );
};

export default Toast;

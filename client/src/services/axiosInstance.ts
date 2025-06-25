import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  url: backendUrl,
  //   withCredentials:true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

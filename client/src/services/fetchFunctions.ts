import type { SignUpRequest, LogInRequest, AuthResponse } from "../types/auth";
import { getAxiosErrorObject } from "../utils/error-functions";
import { axiosInstance } from "./axiosInstance";

export const signUpUser = async (user: SignUpRequest) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/register", user);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const logInUser = async (loginDetails: LogInRequest) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/login", loginDetails);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const fetchProducts = async () => {
  try {
    const res = await axiosInstance.get("/api/products");
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

// export const fetchProducts = async () => {
//   try {
//     const storageRedux = localStorage.getItem("reduxStore");
//     if (storageRedux) {
//       const localRedux: { auctionapp: AuctionAppState } = JSON.parse(storageRedux);

//       const res = await axiosInstance.get("/api/users", {
//         headers: {
//           Authorization: `Bearer ${localRedux.auctionapp.auth.token}`,
//         },
//       });
//       return res.data;
//     } else {
//       return { token: null, user: null, error: "No auth token present", success: false };
//     }
//   } catch (err) {
//     return getAxiosErrorObject(err);
//   }
// };

// export const logOutUser = async () => {
//   try {
//     const res = await axiosInstance.post("/api/auth/logout");
//     return res.data;
//   } catch (err) {
//     return getAxiosErrorObject(err);
//   }
// };

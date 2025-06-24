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

// export const logOutUser = async () => {
//   try {
//     const res = await axiosInstance.post("/api/auth/logout");
//     return res.data;
//   } catch (err) {
//     return getAxiosErrorObject(err);
//   }
// };

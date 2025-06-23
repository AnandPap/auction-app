import type { SignUpRequest, LogInRequest, AuthResponse } from "../types/auth";
import { getAxiosErrorObject } from "../utils/error-functions";
import { axiosInstance } from "./axiosInstance";

export const signUp = async (user: SignUpRequest) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/register", user);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const logIn = async (loginDetails: LogInRequest) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/login", loginDetails);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const logout = async () => {
  try {
    const res = await axiosInstance.post("/api/auth/logout");
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

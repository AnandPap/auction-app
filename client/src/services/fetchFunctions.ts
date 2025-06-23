import { getAxiosErrorObject } from "../utils/error-functions";
import { axiosInstance } from "./axiosInstance";

interface AuthResponse {
  token: string | null;
  error: string | null;
}

interface SignUpUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginDetails {
  email: string;
  password: string;
}

export const logIn = async (loginDetails: LoginDetails) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/login", loginDetails);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const signUp = async (user: SignUpUser) => {
  try {
    const res = await axiosInstance.post<AuthResponse>("/api/auth/register", user);
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

import { getAxiosErrorObject } from "../utils/error-functions";
import { axiosInstance } from "./axiosInstance";

// interface AxiosMessage {
//   status: number;
//   message: string;
// }

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
    const res = await axiosInstance.post("/api/login", loginDetails);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const signUp = async (user: SignUpUser) => {
  try {
    const res = await axiosInstance.post("/api/login", user);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

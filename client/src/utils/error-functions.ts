import axios from "axios";
import type { AuthResponse } from "../types/auth";

export type ErrorObject = {
  code: number | undefined;
  errorData: AuthResponse;
};

export function errorHandler(res: ErrorObject | undefined) {
  if (res) return res.errorData;
  else return "Something went wrong.";
}

export function getAxiosErrorObject(err: unknown) {
  if (axios.isAxiosError(err)) {
    const errorObject: ErrorObject = {
      code: err.response?.status,
      errorData: err.response?.data || err.response?.statusText,
    };
    return errorObject;
  } else return undefined;
}

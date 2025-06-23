import type { FieldObj } from "./auction";

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface LogInRequest {
  email: string;
  password: string;
}

export type LoginDetails = LogInRequest & {
  [key: string]: string;
};
export type RegDetails = SignUpRequest & {
  confirmPassword: string;
  [key: string]: string;
};
export type RegErrors = RegDetails;

export type AuthResponse =
  | { success: boolean; token: string; error: null }
  | { success: boolean; token: null; error: string };

export interface LoginRegInputProps {
  fieldObj: FieldObj;
  isError: boolean;
  errorMessage?: string;
  details: LoginDetails | RegDetails | ForgotPassword;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ForgotPassword {
  email: string;
  [key: string]: string;
}

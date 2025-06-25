import type { FieldObj } from "./auction";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
export type SignUpRequest = Omit<User, "role"> & {
  password: string;
};
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
  | { token: string; user: User; error: null; success: boolean }
  | { token: null; user: null; error: string; success: boolean };

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

export interface Toast {
  text: string;
  show: boolean;
  type: "success" | "error" | undefined;
}

export interface ReduxAuth {
  user: User | null;
  isGuest: boolean;
  token: string | null;
}

export interface AuctionAppState {
  auth: ReduxAuth;
  toast: Toast;
}

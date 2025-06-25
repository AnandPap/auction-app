import type { ReactNode } from "react";

export interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

export interface FieldObj {
  fieldName: string;
  type: string;
  placeholder: string;
}

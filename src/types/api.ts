/**
 * Standard API envelope types shared across frontend and future backend (Phase 2).
 */

export type ApiErrorCode =
  | "BAD_REQUEST"
  | "VALIDATION_ERROR"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR"
  | "SERVICE_UNAVAILABLE"
  | "NOT_FOUND";

export interface ApiFieldError {
  field: string;
  message: string;
}

export interface ApiSuccess<T = Record<string, unknown>> {
  ok: true;
  data: T;
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

export interface ApiError {
  ok: false;
  error: {
    code: ApiErrorCode;
    message: string;
    fieldErrors?: ApiFieldError[];
  };
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

export type ApiResponse<T = Record<string, unknown>> = ApiSuccess<T> | ApiError;

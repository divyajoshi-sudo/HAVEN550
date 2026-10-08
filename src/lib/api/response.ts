import type { ApiError, ApiErrorCode, ApiFieldError, ApiSuccess } from "@/types/api";

export function createSuccessResponse<T>(data: T, requestId?: string): ApiSuccess<T> {
  return {
    ok: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      requestId,
    },
  };
}

export function createErrorResponse(
  code: ApiErrorCode,
  message: string,
  fieldErrors?: ApiFieldError[],
  requestId?: string
): ApiError {
  return {
    ok: false,
    error: {
      code,
      message,
      fieldErrors,
    },
    meta: {
      timestamp: new Date().toISOString(),
      requestId,
    },
  };
}

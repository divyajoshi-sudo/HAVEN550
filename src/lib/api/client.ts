import { env } from "../config/env";
import type { ApiResponse } from "@/types/api";
import type { CharterInquiryInput } from "@/types/inquiry";
import { createErrorResponse, createSuccessResponse } from "./response";

export interface MockClientOptions {
  forceFail?: boolean;
  delayMs?: number;
}

/**
 * The ONLY entry point for submitting inquiries from the frontend.
 * Phase 1: Mock submission with realistic network delay (800ms).
 * Phase 2: Live POST request to /api/inquiries.
 */
export async function submitCharterInquiry(
  input: CharterInquiryInput,
  mockOptions?: MockClientOptions
): Promise<ApiResponse<{ id: string; status: string }>> {
  if (env.apiMode === "mock") {
    const delay = mockOptions?.delayMs ?? 800;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Honeypot check
    if (input.honeypot && input.honeypot.trim().length > 0) {
      // Silently accept bots to avoid leaking honeypot presence
      return createSuccessResponse({
        id: `inq_mock_bot_${Date.now()}`,
        status: "received",
      });
    }

    if (mockOptions?.forceFail) {
      return createErrorResponse(
        "SERVICE_UNAVAILABLE",
        "The charter inquiry service is temporarily unavailable. Please contact us directly by phone or email."
      );
    }

    return createSuccessResponse({
      id: `inq_mock_${Date.now()}`,
      status: "received",
    });
  }

  // =========================================================================
  // PHASE2: Live API endpoint integration
  // When Phase 2 begins, the fetch below will send the request to /api/inquiries
  // =========================================================================
  try {
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const json = (await response.json()) as ApiResponse<{ id: string; status: string }>;
    return json;
  } catch {
    return createErrorResponse(
      "SERVICE_UNAVAILABLE",
      "Unable to connect to the charter inquiry service. Please try again or call us directly."
    );
  }
}

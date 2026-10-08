import { describe, it, expect } from "vitest";
import { submitCharterInquiry } from "@/lib/api/client";
import type { CharterInquiryInput } from "@/types/inquiry";

describe("submitCharterInquiry (mock mode)", () => {
  const sampleInquiry: CharterInquiryInput = {
    fullName: "Douglas Guest",
    email: "guest@example.com",
    phone: "(954) 555-1234",
    preferredDates: "December weekend",
    guestCount: 4,
    interest: "Sunset Experiences",
    message: "Looking forward to an evening cruise.",
    consent: true,
  };

  it("should return a successful envelope with inquiry id and status", async () => {
    const response = await submitCharterInquiry(sampleInquiry, { delayMs: 10 });

    expect(response.ok).toBe(true);
    if (response.ok) {
      expect(response.data.id).toMatch(/^inq_mock_/);
      expect(response.data.status).toBe("received");
      expect(response.meta?.timestamp).toBeDefined();
    }
  });

  it("should return a simulated error envelope when forceFail is enabled", async () => {
    const response = await submitCharterInquiry(sampleInquiry, {
      delayMs: 10,
      forceFail: true,
    });

    expect(response.ok).toBe(false);
    if (!response.ok) {
      expect(response.error.code).toBe("SERVICE_UNAVAILABLE");
      expect(response.error.message).toContain("temporarily unavailable");
    }
  });

  it("should silently succeed for honeypot bot submissions without error", async () => {
    const botInquiry: CharterInquiryInput = {
      ...sampleInquiry,
      honeypot: "http://spam-link.com",
    };

    const response = await submitCharterInquiry(botInquiry, { delayMs: 10 });

    expect(response.ok).toBe(true);
    if (response.ok) {
      expect(response.data.id).toContain("bot");
    }
  });
});

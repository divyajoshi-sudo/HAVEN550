import { describe, it, expect } from "vitest";
import { inquirySchema } from "@/lib/validation/inquiry.schema";

describe("inquirySchema validation", () => {
  const validPayload = {
    fullName: "Eleanor Vance",
    email: "eleanor@example.com",
    phone: "(954) 555-0199",
    preferredDates: "Saturday, November 15",
    guestCount: 6,
    interest: "Private Coastal Cruising",
    message: "Celebrating a family anniversary.",
    consent: true,
  };

  it("should pass for valid charter inquiry data", () => {
    const result = inquirySchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("should enforce maximum 8 guests limit for HAVEN 550", () => {
    const result = inquirySchema.safeParse({
      ...validPayload,
      guestCount: 9,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("up to 8 guests");
    }
  });

  it("should require at least 1 guest", () => {
    const result = inquirySchema.safeParse({
      ...validPayload,
      guestCount: 0,
    });
    expect(result.success).toBe(false);
  });

  it("should reject invalid email formats", () => {
    const result = inquirySchema.safeParse({
      ...validPayload,
      email: "invalid-email-address",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("valid email");
    }
  });

  it("should require consent to privacy policy", () => {
    const result = inquirySchema.safeParse({
      ...validPayload,
      consent: false,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("agree to the privacy policy");
    }
  });

  it("should accept optional honeypot", () => {
    const result = inquirySchema.safeParse({
      ...validPayload,
      honeypot: "spam_bot_data",
    });
    expect(result.success).toBe(true);
  });
});

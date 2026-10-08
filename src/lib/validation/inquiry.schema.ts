import { z } from "zod";

/**
 * Single shared validation schema for charter inquiries.
 * Reused on the frontend in Phase 1 and on the backend in Phase 2.
 */
export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email cannot exceed 150 characters."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(25, "Phone number cannot exceed 25 characters."),

  preferredDates: z
    .string()
    .trim()
    .min(2, "Please indicate your preferred date or timeframe.")
    .max(100, "Preferred dates cannot exceed 100 characters."),

  guestCount: z.coerce
    .number()
    .int("Guest count must be a whole number.")
    .min(1, "Guest count must be at least 1.")
    .max(8, "HAVEN 550 accommodates up to 8 guests."),

  interest: z
    .string()
    .trim()
    .min(1, "Please select an experience of interest."),

  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters.")
    .default(""),

  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the privacy policy to submit an inquiry.",
    }),

  honeypot: z.string().optional().default(""),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

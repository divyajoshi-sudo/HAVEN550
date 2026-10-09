import { z } from "zod";

/**
 * Single shared validation schema for charter inquiries on Page 7.
 */
export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
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

  charterDate: z
    .string()
    .trim()
    .optional()
    .default(""),

  preferredDates: z
    .string()
    .trim()
    .optional()
    .default(""),

  startTime: z
    .string()
    .trim()
    .optional()
    .default("11:00"),

  duration: z
    .string()
    .trim()
    .optional()
    .default("4 Hours"),

  guestCount: z.coerce
    .number()
    .int("Guest count must be a whole number.")
    .min(1, "Guest count must be at least 1.")
    .max(8, "HAVEN 550 accommodates up to 8 guests."),

  boardingLocation: z
    .string()
    .trim()
    .optional()
    .default("Swimming Hall of Fame Marina"),

  jetSkiRental: z
    .string()
    .trim()
    .optional()
    .default("No"),

  occasion: z
    .string()
    .trim()
    .optional()
    .default("Birthday Celebration"),

  interest: z
    .string()
    .trim()
    .optional()
    .default("Private Coastal Cruising"),

  message: z
    .string()
    .trim()
    .max(1000, "Additional information cannot exceed 1000 characters.")
    .optional()
    .default(""),

  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the privacy policy to submit an inquiry.",
    }),

  honeypot: z.string().optional().default(""),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

/**
 * Charter Inquiry domain models and DTOs.
 */

export interface CharterInquiryInput {
  fullName: string;
  email: string;
  phone: string;
  preferredDates: string;
  guestCount: number;
  interest: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export type InquiryStatus = "new" | "contacted" | "closed";

export interface CharterInquiryRecord extends Omit<CharterInquiryInput, "honeypot"> {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  source: "website";
}

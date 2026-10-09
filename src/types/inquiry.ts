/**
 * Charter Inquiry domain models and DTOs.
 */

export interface CharterInquiryInput {
  fullName: string;
  email: string;
  phone: string;
  charterDate?: string;
  preferredDates?: string;
  startTime?: string;
  duration?: string;
  guestCount: number;
  boardingLocation?: string;
  jetSkiRental?: string;
  occasion?: string;
  interest?: string;
  message?: string;
  consent: boolean;
  honeypot?: string;
}

export type InquiryStatus = "new" | "contacted" | "closed";

export interface CharterInquiryRecord extends Omit<CharterInquiryInput, "honeypot"> {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  source: "website";
  notificationRecipient: "doug@hgsfl.com";
}

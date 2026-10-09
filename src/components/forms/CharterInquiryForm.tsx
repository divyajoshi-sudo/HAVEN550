"use client";

import Link from "next/link";
import React, { useState } from "react";
import { submitCharterInquiry } from "@/lib/api/client";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation/inquiry.schema";
import { Alert } from "../ui/Alert";
import { Button } from "../ui/Button";
import { FormField } from "../ui/FormField";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";

export interface CharterInquiryFormProps {
  occasions?: string[];
  guestOptions?: number[];
  successMessage?: {
    title: string;
    body: string;
  };
}

const defaultOccasions = [
  "Birthday Celebration",
  "Anniversary",
  "Romantic / Proposal",
  "Sunset Cruise",
  "Corporate Gathering",
  "Family Outing",
  "Leisure / Coastal Cruising",
  "Other Special Occasion",
];

const defaultSuccessMessage = {
  title: "Thank You for Your Interest in HAVEN 550.",
  body: "Your inquiry has been received. A member of our team will review your request and contact you regarding availability and next steps. Submitting an inquiry does not constitute a confirmed reservation.",
};

export function CharterInquiryForm({
  occasions = defaultOccasions,
  guestOptions = [1, 2, 3, 4, 5, 6, 7, 8],
  successMessage = defaultSuccessMessage,
}: CharterInquiryFormProps) {
  const [formData, setFormData] = useState<Partial<InquiryFormValues>>({
    fullName: "",
    email: "",
    phone: "",
    charterDate: "",
    startTime: "11:00",
    duration: "4 Hours",
    guestCount: 4,
    boardingLocation: "Swimming Hall of Fame Marina",
    jetSkiRental: "No",
    occasion: defaultOccasions[0],
    message: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const validationResult = inquirySchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    const response = await submitCharterInquiry(validationResult.data);

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(
        response.error.message ||
        "We were unable to submit your inquiry. Please contact us directly by phone or email."
      );
      if (response.error.fieldErrors) {
        const serverErrors: Record<string, string> = {};
        response.error.fieldErrors.forEach((fe) => {
          serverErrors[fe.field] = fe.message;
        });
        setErrors(serverErrors);
      }
    }
  };

  if (status === "success") {
    return (
      <div className="bg-haven-deep/95 border border-[#B79B6A]/50 p-8 sm:p-12 text-center rounded-sm shadow-2xl">
        <span className="inline-block w-14 h-14 rounded-full bg-[#B79B6A]/20 border border-[#B79B6A]/50 text-[#B79B6A] flex items-center justify-center mx-auto mb-6 text-2xl">
          ✓
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
          {successMessage.title}
        </h3>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light max-w-lg mx-auto mb-8">
          {successMessage.body}
        </p>
        <Button
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              charterDate: "",
              startTime: "11:00",
              duration: "4 Hours",
              guestCount: 4,
              boardingLocation: "Swimming Hall of Fame Marina",
              jetSkiRental: "No",
              occasion: defaultOccasions[0],
              message: "",
              consent: false,
              honeypot: "",
            });
          }}
          variant="outline"
          size="sm"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-8"
    >
      {status === "error" && errorMessage && (
        <Alert variant="error" title="Submission Error">
          {errorMessage}
        </Alert>
      )}

      {/* Hidden Honeypot Field for Spam Protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inquiry-honeypot">Leave this empty</label>
        <input
          id="inquiry-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot || ""}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* 01 — Guest Information */}
      <div className="pt-2 pb-2 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B9A078]/15 border border-[#B9A078]/40 text-[#B9A078] text-[10px] font-mono font-medium">
            01
          </span>
          <h4 className="text-xs tracking-[0.22em] uppercase text-white/95 font-medium font-sans">
            Guest Information
          </h4>
        </div>
        <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 font-light hidden sm:inline">
          Primary Contact
        </span>
      </div>

      {/* Full Name & Email Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
        >
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Eleanor Vance"
            value={formData.fullName || ""}
            onChange={handleChange}
            hasError={Boolean(errors.fullName)}
            disabled={status === "submitting"}
            autoComplete="name"
          />
        </FormField>

        <FormField
          id="email"
          label="Email Address"
          required
          error={errors.email}
        >
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. eleanor@example.com"
            value={formData.email || ""}
            onChange={handleChange}
            hasError={Boolean(errors.email)}
            disabled={status === "submitting"}
            autoComplete="email"
          />
        </FormField>
      </div>

      {/* Phone Number */}
      <FormField
        id="phone"
        label="Phone Number"
        required
        error={errors.phone}
      >
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g. +1 (516) 375-1093"
          value={formData.phone || ""}
          onChange={handleChange}
          hasError={Boolean(errors.phone)}
          disabled={status === "submitting"}
          autoComplete="tel"
        />
      </FormField>

      {/* 02 — Charter Details */}
      <div className="pt-4 pb-2 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B9A078]/15 border border-[#B9A078]/40 text-[#B9A078] text-[10px] font-mono font-medium">
            02
          </span>
          <h4 className="text-xs tracking-[0.22em] uppercase text-white/95 font-medium font-sans">
            Charter Details
          </h4>
        </div>
        <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 font-light hidden sm:inline">
          Itinerary &amp; Schedule
        </span>
      </div>

      {/* Preferred Date & Start Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="charterDate"
          label="Preferred Charter Date"
          required
          error={errors.charterDate}
        >
          <Input
            id="charterDate"
            name="charterDate"
            type="date"
            value={formData.charterDate || ""}
            onChange={handleChange}
            hasError={Boolean(errors.charterDate)}
            disabled={status === "submitting"}
          />
        </FormField>

        <FormField
          id="startTime"
          label="Preferred Start Time"
          error={errors.startTime}
          hint="Select your ideal departure time"
        >
          <Input
            id="startTime"
            name="startTime"
            type="time"
            value={formData.startTime || "11:00"}
            onChange={handleChange}
            hasError={Boolean(errors.startTime)}
            disabled={status === "submitting"}
          />
        </FormField>
      </div>

      {/* Duration & Number of Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="duration"
          label="Charter Duration"
          required
          error={errors.duration}
        >
          <Select
            id="duration"
            name="duration"
            value={formData.duration || "4 Hours"}
            onChange={handleChange}
            hasError={Boolean(errors.duration)}
            disabled={status === "submitting"}
          >
            <option value="4 Hours">4 Hours (The Escape — $3,000)</option>
            <option value="6 Hours">6 Hours (The Experience — $4,000)</option>
            <option value="8 Hours">8 Hours (The Full Day — $5,000)</option>
          </Select>
        </FormField>

        <FormField
          id="guestCount"
          label="Number of Guests"
          required
          error={errors.guestCount}
          hint="Maximum 8 guests"
        >
          <Select
            id="guestCount"
            name="guestCount"
            value={formData.guestCount || 4}
            onChange={handleChange}
            hasError={Boolean(errors.guestCount)}
            disabled={status === "submitting"}
          >
            {guestOptions.map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      {/* Boarding Location & Jet Ski Rental */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="boardingLocation"
          label="Preferred Boarding Location"
          required
          error={errors.boardingLocation}
        >
          <Select
            id="boardingLocation"
            name="boardingLocation"
            value={formData.boardingLocation || "Swimming Hall of Fame Marina"}
            onChange={handleChange}
            hasError={Boolean(errors.boardingLocation)}
            disabled={status === "submitting"}
          >
            <option value="Swimming Hall of Fame Marina">
              Swimming Hall of Fame Marina (Fort Lauderdale)
            </option>
            <option value="Shooters Waterfront">
              Shooters Waterfront (Fort Lauderdale)
            </option>
          </Select>
        </FormField>

        <FormField
          id="jetSkiRental"
          label="Interested in Jet Ski Rental?"
          required
          error={errors.jetSkiRental}
          hint="Optional add-on: $500"
        >
          <Select
            id="jetSkiRental"
            name="jetSkiRental"
            value={formData.jetSkiRental || "No"}
            onChange={handleChange}
            hasError={Boolean(errors.jetSkiRental)}
            disabled={status === "submitting"}
          >
            <option value="No">No, yacht amenities only</option>
            <option value="Yes">Yes, add Jet Ski Rental (+$500)</option>
          </Select>
        </FormField>
      </div>

      {/* Type of Occasion */}
      <FormField
        id="occasion"
        label="Type of Occasion"
        required
        error={errors.occasion}
      >
        <Select
          id="occasion"
          name="occasion"
          value={formData.occasion || occasions[0]}
          onChange={handleChange}
          hasError={Boolean(errors.occasion)}
          disabled={status === "submitting"}
        >
          {occasions.map((occ) => (
            <option key={occ} value={occ}>
              {occ}
            </option>
          ))}
        </Select>
      </FormField>

      {/* 03 — Bespoke Requests & Message */}
      <div className="pt-4 pb-2 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B9A078]/15 border border-[#B9A078]/40 text-[#B9A078] text-[10px] font-mono font-medium">
            03
          </span>
          <h4 className="text-xs tracking-[0.22em] uppercase text-white/95 font-medium font-sans">
            Bespoke Requests &amp; Notes
          </h4>
        </div>
        <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 font-light hidden sm:inline">
          Personalized Experience
        </span>
      </div>

      {/* Additional Information */}
      <FormField
        id="message"
        label="Additional Information"
        error={errors.message}
        hint="Optional catering requests, Lily provisioning, or special arrangements"
      >
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about any specific preferences, dining or provisioning requests with Lily, or questions you have..."
          value={formData.message || ""}
          onChange={handleChange}
          hasError={Boolean(errors.message)}
          disabled={status === "submitting"}
        />
      </FormField>

      {/* Consent & Privacy Notice */}
      <div className="pt-2 space-y-2">
        <label className="flex items-start gap-3.5 cursor-pointer select-none group p-4 rounded-[2px] bg-white/[0.02] border border-white/[0.08] hover:border-[#B9A078]/40 hover:bg-white/[0.04] transition-all duration-300">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={Boolean(formData.consent)}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="sr-only peer"
            />
            <div className="w-5 h-5 rounded-[2px] border border-white/25 bg-[#0C1622] peer-checked:border-[#B9A078] peer-checked:bg-[#B9A078] transition-all duration-200 flex items-center justify-center shadow-inner">
              {Boolean(formData.consent) && (
                <svg className="w-3.5 h-3.5 text-[#070D14]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-white/70 font-light leading-relaxed group-hover:text-white/90 transition-colors">
            I agree to the privacy notice and consent to be contacted regarding this charter inquiry. Submitting an inquiry does not constitute a confirmed reservation.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-400 font-light pl-2 flex items-center gap-1.5" role="alert">
            <svg className="w-3.5 h-3.5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-14 relative overflow-hidden group rounded-[2px] font-sans font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 bg-[#B9A078] hover:bg-[#C9B18B] active:bg-[#AA9069] text-[#070D14] shadow-lg shadow-[#B9A078]/10 hover:shadow-[#B9A078]/25 flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#070D14]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>SENDING INQUIRY...</span>
              </>
            ) : (
              <>
                <span>SEND CHARTER INQUIRY</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </span>
          {/* Subtle metallic sheen sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        </button>
        <p className="text-center text-[11px] text-white/40 mt-3 tracking-wide font-light">
          Submitting does not guarantee availability or confirm a reservation.
        </p>
      </div>
    </form>
  );
}

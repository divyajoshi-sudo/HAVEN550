"use client";

import Link from "next/link";
import React, { useState } from "react";
import { submitCharterInquiry } from "@/lib/api/client";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation/inquiry.schema";
import { Alert } from "../ui/Alert";
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
  variant?: "dark" | "light";
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
  body: "Your inquiry has been received. Our concierge team is reviewing your schedule and will contact you directly to confirm availability and discuss personalized provisioning.",
};

const DURATION_OPTIONS = [
  {
    value: "4 Hours",
    title: "The Escape",
    hours: "4 Hours",
    rate: "$3,000",
    popular: false,
  },
  {
    value: "6 Hours",
    title: "The Experience",
    hours: "6 Hours",
    rate: "$4,000",
    popular: true,
  },
  {
    value: "8 Hours",
    title: "The Full Day",
    hours: "8 Hours",
    rate: "$5,000",
    popular: false,
  },
];

export function CharterInquiryForm({
  occasions = defaultOccasions,
  guestOptions = [1, 2, 3, 4, 5, 6, 7, 8],
  successMessage = defaultSuccessMessage,
  variant = "light",
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

  const handleSelectDuration = (val: string) => {
    setFormData((prev) => ({ ...prev, duration: val }));
    if (errors.duration) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.duration;
        return next;
      });
    }
  };

  const handleSelectJetSki = (val: string) => {
    setFormData((prev) => ({ ...prev, jetSkiRental: val }));
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
        setErrors((prev) => ({ ...prev, ...serverErrors }));
      }
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 px-6 sm:px-10 text-center animate-fadeIn flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#B9A078]/20 border border-[#B9A078] flex items-center justify-center mb-6 shadow-lg shadow-[#B9A078]/10">
          <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
          {successMessage.title}
        </h3>
        <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed max-w-lg mb-8">
          {successMessage.body}
        </p>
        <div className="pt-2">
          <button
            type="button"
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
            className="w-full sm:w-[180px] h-[50px] px-3 rounded-[1px] bg-[#00204E] hover:bg-[#002D6E] text-white transition-all duration-300 font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 group"
          >
            <span>Submit Another Inquiry</span>
            <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-9"
    >
      {status === "error" && errorMessage && (
        <Alert variant="error" title="Submission Error">
          {errorMessage}
        </Alert>
      )}

      {/* Hidden Honeypot Field */}
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

      {/* 01 — Guest Details */}
      <div className="space-y-5">
        <div className="pb-3 border-b border-[#EAE6DF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#B9A078]/20 border border-[#B9A078]/60 text-[#9E8357] text-[11px] font-mono font-medium">
              01
            </span>
            <h3 className="font-sans text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#08182B] font-medium">
              Guest &amp; Contact Details
            </h3>
          </div>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#9E8357] font-medium hidden sm:inline">
            Primary Contact
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="fullName"
            label="Full Name"
            required
            error={errors.fullName}
            variant={variant}
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
              variant={variant}
              autoComplete="name"
            />
          </FormField>

          <FormField
            id="email"
            label="Email Address"
            required
            error={errors.email}
            variant={variant}
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
              variant={variant}
              autoComplete="email"
            />
          </FormField>
        </div>

        <FormField
          id="phone"
          label="Phone Number"
          required
          error={errors.phone}
          variant={variant}
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
            variant={variant}
            autoComplete="tel"
          />
        </FormField>
      </div>

      {/* 02 — Charter Itinerary & Specifications */}
      <div className="space-y-6 pt-2">
        <div className="pb-3 border-b border-[#EAE6DF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#B9A078]/20 border border-[#B9A078]/60 text-[#9E8357] text-[11px] font-mono font-medium">
              02
            </span>
            <h3 className="font-sans text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#08182B] font-medium">
              Charter Itinerary &amp; Details
            </h3>
          </div>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#9E8357] font-medium hidden sm:inline">
            Vessel Scheduling
          </span>
        </div>

        {/* Interactive Duration Selector Cards */}
        <div>
          <label className="block text-xs sm:text-[13px] font-sans font-medium text-[#08182B] mb-3 tracking-[0.14em] uppercase">
            Select Charter Duration <span className="text-[#00204E] font-bold">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DURATION_OPTIONS.map((opt) => {
              const isSelected = formData.duration?.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelectDuration(opt.value)}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#00204E]/5 border-[#00204E] shadow-sm text-[#00204E]"
                      : "bg-white border-[#EAE6DF] hover:border-[#00204E]/40 text-[#08182B]"
                  }`}
                >
                  {opt.popular && (
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#B9A078] text-white text-[9px] font-bold tracking-widest uppercase">
                      SIGNATURE
                    </span>
                  )}
                  <div>
                    <span className="block text-xs font-mono tracking-wider text-[#9E8357] mb-1 font-medium">
                      {opt.hours}
                    </span>
                    <span className="block font-serif text-base text-[#08182B] font-normal mb-2">
                      {opt.title}
                    </span>
                  </div>
                  <span className="text-sm font-sans font-semibold text-[#08182B]">
                    {opt.rate}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Date & Start Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="charterDate"
            label="Preferred Charter Date"
            required
            error={errors.charterDate}
            variant={variant}
          >
            <Input
              id="charterDate"
              name="charterDate"
              type="date"
              value={formData.charterDate || ""}
              onChange={handleChange}
              hasError={Boolean(errors.charterDate)}
              disabled={status === "submitting"}
              variant={variant}
            />
          </FormField>

          <FormField
            id="startTime"
            label="Preferred Start Time"
            error={errors.startTime}
            hint="Ideal departure time"
            variant={variant}
          >
            <Input
              id="startTime"
              name="startTime"
              type="time"
              value={formData.startTime || "11:00"}
              onChange={handleChange}
              hasError={Boolean(errors.startTime)}
              disabled={status === "submitting"}
              variant={variant}
            />
          </FormField>
        </div>

        {/* Guest Count & Boarding Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="guestCount"
            label="Number of Guests"
            required
            error={errors.guestCount}
            hint="Max 8 guests"
            variant={variant}
          >
            <Select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount || 4}
              onChange={handleChange}
              hasError={Boolean(errors.guestCount)}
              disabled={status === "submitting"}
              variant={variant}
            >
              {guestOptions.map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField
            id="boardingLocation"
            label="Preferred Boarding Location"
            required
            error={errors.boardingLocation}
            variant={variant}
          >
            <Select
              id="boardingLocation"
              name="boardingLocation"
              value={formData.boardingLocation || "Swimming Hall of Fame Marina"}
              onChange={handleChange}
              hasError={Boolean(errors.boardingLocation)}
              disabled={status === "submitting"}
              variant={variant}
            >
              <option value="Swimming Hall of Fame Marina">
                Swimming Hall of Fame Marina (Fort Lauderdale)
              </option>
              <option value="Shooters Waterfront">
                Shooters Waterfront (Fort Lauderdale)
              </option>
            </Select>
          </FormField>
        </div>

        {/* Occasion & Jet Ski Rental Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="occasion"
            label="Type of Occasion"
            required
            error={errors.occasion}
            variant={variant}
          >
            <Select
              id="occasion"
              name="occasion"
              value={formData.occasion || occasions[0]}
              onChange={handleChange}
              hasError={Boolean(errors.occasion)}
              disabled={status === "submitting"}
              variant={variant}
            >
              {occasions.map((occ) => (
                <option key={occ} value={occ}>
                  {occ}
                </option>
              ))}
            </Select>
          </FormField>

          <div>
            <label className="block text-xs sm:text-[13px] font-sans font-medium text-[#08182B] mb-2 tracking-[0.14em] uppercase">
              Jet Ski Rental Add-On
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleSelectJetSki("No")}
                className={`py-3 px-3 rounded-xl border text-xs tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer ${
                  formData.jetSkiRental !== "Yes"
                    ? "bg-[#00204E] text-white border-[#00204E]"
                    : "bg-white border-[#EAE6DF] text-[#08182B] hover:border-[#00204E]"
                }`}
              >
                No Add-On
              </button>
              <button
                type="button"
                onClick={() => handleSelectJetSki("Yes")}
                className={`py-3 px-3 rounded-xl border text-xs tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer ${
                  formData.jetSkiRental === "Yes"
                    ? "bg-[#00204E] text-white border-[#00204E] shadow-sm"
                    : "bg-white border-[#EAE6DF] text-[#08182B] hover:border-[#00204E]"
                }`}
              >
                Add Jet Ski (+$500)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 03 — Bespoke Requests & Notes */}
      <div className="space-y-5 pt-2">
        <div className="pb-3 border-b border-[#EAE6DF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#B9A078]/20 border border-[#B9A078]/60 text-[#9E8357] text-[11px] font-mono font-medium">
              03
            </span>
            <h3 className="font-sans text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#08182B] font-medium">
              Bespoke Requests &amp; Notes
            </h3>
          </div>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#9E8357] font-medium hidden sm:inline">
            Personalized Experience
          </span>
        </div>

        <FormField
          id="message"
          label="Additional Information & Catering Desires"
          error={errors.message}
          hint="Optional catering requests, Lily provisioning, champagne preferences"
          variant={variant}
        >
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about any specific preferences, dining or provisioning requests with Lily, special announcements, or questions you have..."
            value={formData.message || ""}
            onChange={handleChange}
            hasError={Boolean(errors.message)}
            disabled={status === "submitting"}
            variant={variant}
          />
        </FormField>
      </div>

      {/* Consent & Privacy Notice */}
      <div className="pt-1 space-y-2">
        <label className="flex items-start gap-3.5 cursor-pointer select-none group p-4 rounded-xl bg-neutral-50/80 border border-[#EAE6DF] hover:border-[#00204E]/50 transition-all duration-300 shadow-sm">
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
            <div className="w-5 h-5 rounded-md border border-[#DDD6CC] bg-white peer-checked:border-[#00204E] peer-checked:bg-[#00204E] transition-all duration-200 flex items-center justify-center shadow-inner">
              {Boolean(formData.consent) && (
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-[#4A5568] font-light leading-relaxed group-hover:text-[#08182B] transition-colors">
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

      {/* Standardized Submit Button & Reassurance */}
      <div className="pt-3 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-[180px] h-[50px] px-3 relative overflow-hidden group rounded-[1px] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.16em] transition-all duration-300 bg-[#00204E] hover:bg-[#002D6E] text-white shadow-xl flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>SENDING...</span>
              </>
            ) : (
              <>
                <span>SEND INQUIRY</span>
                <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
              </>
            )}
          </span>
          {/* Shimmer sheen */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
        </button>
        <p className="text-center text-xs text-[#717E8C] font-light tracking-wide">
          Submitting does not guarantee availability or confirm a reservation.
        </p>
      </div>
    </form>
  );
}

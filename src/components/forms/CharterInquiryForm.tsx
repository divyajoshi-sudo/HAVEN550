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
  interests: string[];
  guestOptions: number[];
  successMessage: {
    title: string;
    body: string;
  };
}

export function CharterInquiryForm({
  interests,
  guestOptions,
  successMessage,
}: CharterInquiryFormProps) {
  const [formData, setFormData] = useState<Partial<InquiryFormValues>>({
    fullName: "",
    email: "",
    phone: "",
    preferredDates: "",
    guestCount: 2,
    interest: interests[0] || "",
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

    // Clear field-level error upon typing
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

    // Validate with shared Zod schema
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

    // Submit via unified API client (Phase 1: mock mode with delay, Phase 2: live mode)
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
      <div className="bg-haven-deep/90 border border-haven-gold/30 p-8 sm:p-12 text-center rounded-none shadow-2xl">
        <span className="inline-block w-12 h-12 rounded-full bg-haven-gold/20 text-haven-gold flex items-center justify-center mx-auto mb-6 text-xl">
          ✓
        </span>
        <h3 className="font-[family-name:var(--font-playfair)] font-serif text-3xl sm:text-4xl font-light text-haven-cream mb-4">
          {successMessage.title}
        </h3>
        <p className="text-haven-cream/75 text-sm sm:text-base leading-relaxed font-light max-w-lg mx-auto mb-8">
          {successMessage.body}
        </p>
        <Button
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              preferredDates: "",
              guestCount: 2,
              interest: interests[0] || "",
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
      className="bg-haven-deep/90 border border-white/10 p-8 sm:p-12 space-y-6 shadow-2xl"
    >
      {status === "error" && errorMessage && (
        <Alert variant="error" title="Submission Error">
          {errorMessage}
        </Alert>
      )}

      {/* Hidden Honeypot Field for Bot Protection */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
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

        {/* Email Address */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Telephone */}
        <FormField
          id="phone"
          label="Telephone"
          required
          error={errors.phone}
        >
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. (954) 555-0199"
            value={formData.phone || ""}
            onChange={handleChange}
            hasError={Boolean(errors.phone)}
            disabled={status === "submitting"}
            autoComplete="tel"
          />
        </FormField>

        {/* Preferred Dates */}
        <FormField
          id="preferredDates"
          label="Preferred Date(s)"
          required
          error={errors.preferredDates}
          hint="Specific date or timeframe"
        >
          <Input
            id="preferredDates"
            name="preferredDates"
            type="text"
            placeholder="e.g. Saturday afternoon / Mid-November"
            value={formData.preferredDates || ""}
            onChange={handleChange}
            hasError={Boolean(errors.preferredDates)}
            disabled={status === "submitting"}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Guest Count */}
        <FormField
          id="guestCount"
          label="Guest Count"
          required
          error={errors.guestCount}
          hint="Max 8 guests"
        >
          <Select
            id="guestCount"
            name="guestCount"
            value={formData.guestCount || 2}
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

        {/* Interest / Experience */}
        <FormField
          id="interest"
          label="Charter Interest"
          required
          error={errors.interest}
        >
          <Select
            id="interest"
            name="interest"
            value={formData.interest || interests[0]}
            onChange={handleChange}
            hasError={Boolean(errors.interest)}
            disabled={status === "submitting"}
          >
            {interests.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      {/* Personal Message / Special Requests */}
      <FormField
        id="message"
        label="Message & Special Requests"
        error={errors.message}
        hint="Optional"
      >
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your occasion, catering preferences, or questions..."
          value={formData.message || ""}
          onChange={handleChange}
          hasError={Boolean(errors.message)}
          disabled={status === "submitting"}
        />
      </FormField>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={Boolean(formData.consent)}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="mt-1 w-4 h-4 rounded-none bg-haven-navy border-white/20 text-haven-gold focus:ring-haven-gold focus:ring-offset-haven-deep cursor-pointer"
          />
          <span className="text-xs text-haven-cream/75 font-light leading-relaxed">
            I agree to the handling of my information in accordance with the{" "}
            <Link
              href="/privacy-policy"
              className="text-haven-gold underline hover:text-haven-gold-light"
              target="_blank"
            >
              Privacy Policy
            </Link>
            . No payment is required at this time.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-400 font-light pl-7" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting Inquiry..." : "Submit Charter Inquiry"}
        </Button>
      </div>
    </form>
  );
}

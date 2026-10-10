"use client";

import React, { useState } from "react";
import Image from "next/image";
import { submitCharterInquiry } from "@/lib/api/client";
import { inquirySchema } from "@/lib/validation/inquiry.schema";
import { Alert } from "../ui/Alert";

const OCCASIONS = [
  "Type of Occasion",
  "Birthday Celebration",
  "Anniversary",
  "Romantic / Proposal",
  "Sunset Cruise",
  "Corporate Gathering",
  "Family Outing",
  "Coastal Cruising & Swimming",
  "Other Special Occasion",
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    charterDate: "",
    startTime: "",
    duration: "4",
    guestCount: "1-8",
    boardingLocation: "Swimming Hall of Fame Marina",
    jetSkiRental: "No",
    occasion: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleDurationClick = (val: string) => {
    setFormData((prev) => ({ ...prev, duration: val }));
  };

  const handleBoardingClick = (val: string) => {
    setFormData((prev) => ({ ...prev, boardingLocation: val }));
  };

  const handleJetSkiClick = (val: string) => {
    setFormData((prev) => ({ ...prev, jetSkiRental: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const durationMapped =
      formData.duration === "4"
        ? "4 Hours"
        : formData.duration === "6"
        ? "6 Hours"
        : "8 Hours";

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      charterDate: formData.charterDate || "2026-10-15",
      startTime: formData.startTime || "11:00",
      duration: durationMapped,
      guestCount: 6,
      boardingLocation: formData.boardingLocation,
      jetSkiRental: formData.jetSkiRental,
      occasion: formData.occasion && formData.occasion !== "Type of Occasion" ? formData.occasion : "Charter Experience",
      message: formData.message || "Looking forward to booking a charter.",
      consent: true,
      honeypot: "",
    };

    const validationResult = inquirySchema.safeParse(payload);

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

    try {
      const response = await submitCharterInquiry(validationResult.data);
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          response.error.message ||
            "Unable to submit inquiry. Please call or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or call us directly.");
    }
  };

  return (
    <div className="w-full bg-white text-[#101C29] pt-24 sm:pt-28 pb-16 lg:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
        {/* =========================================================================
            LEFT COLUMN: SECTION 1 (HERO) & SECTION 2 (CHARTER INQUIRY FORM)
        ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* SECTION 1 — HERO */}
          <div>
            <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-neutral-400 font-medium block mb-2">
              SECTION 1 — HERO
            </span>

            <div className="text-center sm:text-left mb-4">
              <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#B9A078] font-sans font-semibold mb-2.5">
                WE LOOK FORWARD TO WELCOMING YOU
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[46px] font-normal uppercase tracking-[0.02em] text-[#101C29] leading-[1.08] mb-4">
                LET&apos;S PLAN YOUR TIME ON THE WATER.
              </h1>

              <div className="space-y-2 text-[#101C29]/80 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                <p>
                  Whether you&apos;re considering a private getaway, planning a celebration, or simply exploring charter options, we&apos;d be pleased to hear from you.
                </p>
                <p>
                  Complete the inquiry form below, and we&apos;ll be in touch to discuss your preferred experience.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2 — CHARTER INQUIRY FORM */}
          <div className="pt-2">
            <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-neutral-400 font-medium block mb-3">
              SECTION 2 — CHARTER INQUIRY FORM
            </span>

            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#101C29] tracking-tight leading-[1.15] mb-1">
                Request a Private Charter.
              </h2>
              <p className="text-[#101C29]/75 text-xs sm:text-sm font-light">
                Tell us a little about your plans, and we&apos;ll help you explore the available options.
              </p>
            </div>

            {status === "error" && errorMessage && (
              <div className="mb-5">
                <Alert variant="error" title="Submission Error">
                  {errorMessage}
                </Alert>
              </div>
            )}

            {status === "success" ? (
              <div className="p-8 border border-[#B9A078]/40 bg-neutral-50 rounded-[2px] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#101C29] text-[#F8F8F6] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-[#101C29]">
                  Thank You for Your Inquiry.
                </h3>
                <p className="text-sm text-[#101C29]/80 max-w-md mx-auto font-light leading-relaxed">
                  Your details have been received. Our concierge team will contact you shortly to review your dates and preferred experience.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2.5 bg-[#101C29] text-white text-xs uppercase tracking-widest font-medium rounded-[1px]"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* ROW 1: Full Name, Email Address, Phone Number (3 equal columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Text input"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full h-[40px] px-3 rounded-[3px] border text-xs sm:text-sm bg-white text-[#101C29] placeholder:text-neutral-400 focus:outline-none focus:border-[#101C29] ${
                        errors.fullName ? "border-red-500" : "border-[#DDD6CC]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email input"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full h-[40px] px-3 rounded-[3px] border text-xs sm:text-sm bg-white text-[#101C29] placeholder:text-neutral-400 focus:outline-none focus:border-[#101C29] ${
                        errors.email ? "border-red-500" : "border-[#DDD6CC]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone input"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full h-[40px] px-3 rounded-[3px] border text-xs sm:text-sm bg-white text-[#101C29] placeholder:text-neutral-400 focus:outline-none focus:border-[#101C29] ${
                        errors.phone ? "border-red-500" : "border-[#DDD6CC]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* ROW 2: Preferred Charter Date, Preferred Start Time, Charter Duration (3 equal columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Preferred Charter Date
                    </label>
                    <input
                      type="date"
                      name="charterDate"
                      placeholder="Date input"
                      value={formData.charterDate}
                      onChange={handleChange}
                      className="w-full h-[40px] px-3 rounded-[3px] border border-[#DDD6CC] text-xs sm:text-sm bg-white text-[#101C29] focus:outline-none focus:border-[#101C29]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Preferred Start Time
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      placeholder="Time input"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="w-full h-[40px] px-3 rounded-[3px] border border-[#DDD6CC] text-xs sm:text-sm bg-white text-[#101C29] focus:outline-none focus:border-[#101C29]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Charter Duration
                    </label>
                    <div className="grid grid-cols-3 h-[40px] border border-[#DDD6CC] rounded-[3px] overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => handleDurationClick("4")}
                        className={`text-xs font-medium transition-colors cursor-pointer flex items-center justify-center ${
                          formData.duration === "4"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        4
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDurationClick("6")}
                        className={`text-xs font-medium border-l border-r border-[#DDD6CC] transition-colors cursor-pointer flex items-center justify-center ${
                          formData.duration === "6"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        6
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDurationClick("8")}
                        className={`text-xs font-medium transition-colors cursor-pointer flex items-center justify-center ${
                          formData.duration === "8"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        8 Hours
                      </button>
                    </div>
                  </div>
                </div>

                {/* ROW 3: Number of Guests, Preferred Boarding Location */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Number of Guests
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full h-[40px] px-3 rounded-[3px] border border-[#DDD6CC] text-xs sm:text-sm bg-white text-[#101C29] focus:outline-none focus:border-[#101C29] cursor-pointer"
                    >
                      <option value="1-8">1–8</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests (Max)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Preferred Boarding Location
                    </label>
                    <div className="grid grid-cols-2 h-[40px] border border-[#DDD6CC] rounded-[3px] overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => handleBoardingClick("Swimming Hall of Fame Marina")}
                        className={`text-[11px] sm:text-xs font-medium px-2 text-center transition-colors cursor-pointer flex items-center justify-center leading-tight ${
                          formData.boardingLocation === "Swimming Hall of Fame Marina"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        Swimming Hall of Fame Marina
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBoardingClick("Shooters Waterfront")}
                        className={`text-[11px] sm:text-xs font-medium px-2 text-center border-l border-[#DDD6CC] transition-colors cursor-pointer flex items-center justify-center leading-tight ${
                          formData.boardingLocation === "Shooters Waterfront"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        Shooters Waterfront
                      </button>
                    </div>
                  </div>
                </div>

                {/* ROW 4: Interested in Jet Ski Rental?, Type of Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Interested in Jet Ski Rental?
                    </label>
                    <div className="grid grid-cols-2 h-[40px] border border-[#DDD6CC] rounded-[3px] overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => handleJetSkiClick("Yes")}
                        className={`text-xs font-medium transition-colors cursor-pointer flex items-center justify-center ${
                          formData.jetSkiRental === "Yes"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => handleJetSkiClick("No")}
                        className={`text-xs font-medium border-l border-[#DDD6CC] transition-colors cursor-pointer flex items-center justify-center ${
                          formData.jetSkiRental === "No"
                            ? "bg-[#101C29] text-white"
                            : "bg-white text-[#101C29] hover:bg-neutral-50"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                      Type of Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full h-[40px] px-3 rounded-[3px] border border-[#DDD6CC] text-xs sm:text-sm bg-white text-[#101C29] focus:outline-none focus:border-[#101C29] cursor-pointer"
                    >
                      {OCCASIONS.map((occ) => (
                        <option key={occ} value={occ === "Type of Occasion" ? "" : occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* ROW 5: Additional Information */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#101C29] mb-1">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Additline Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-[3px] border border-[#DDD6CC] text-xs sm:text-sm bg-white text-[#101C29] placeholder:text-neutral-400 focus:outline-none focus:border-[#101C29] resize-y"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-[48px] bg-[#101C29] hover:bg-[#182A3E] text-white font-sans font-semibold text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all duration-300 rounded-[2px] shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {status === "submitting" ? "SENDING INQUIRY..." : "SEND CHARTER INQUIRY"}
                    </span>
                    <span className="text-sm font-bold">›</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 font-light mt-2.5">
                    * Submitting an inquiry does not constitute a confirmed reservation.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: SECTION 3 — DIRECT CONTACT & IMAGERY
        ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div>
            <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-neutral-400 font-medium block mb-2">
              SECTION 3 — DIRECT CONTACT &amp; IMAGERY
            </span>

            {/* Marina Docked Yacht Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] lg:h-[320px] xl:h-[350px] rounded-[2px] overflow-hidden border border-[#DDD6CC] shadow-sm bg-neutral-100 mb-6">
              <Image
                src="/images/haven-running-front.jpeg"
                alt="HAVEN 550 docked at Fort Lauderdale marina with skyline view"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            {/* Direct Contact Details */}
            <div>
              <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#B9A078] font-sans font-semibold mb-2">
                GET IN TOUCH
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#101C29] tracking-tight leading-[1.14] mb-4">
                We&apos;d Love to Hear From You.
              </h2>

              {/* Company & Line Details */}
              <div className="space-y-1 text-xs sm:text-sm text-[#101C29] font-normal mb-4 leading-relaxed">
                <p className="font-semibold text-sm sm:text-base text-[#101C29]">
                  HAVEN 550 LLC
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:doug@hgsfl.com"
                    className="hover:text-[#B9A078] transition-colors underline decoration-neutral-300"
                  >
                    doug@hgsfl.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+15163751093"
                    className="hover:text-[#B9A078] transition-colors underline decoration-neutral-300"
                  >
                    +1 (516) 375-1093
                  </a>
                </p>
              </div>

              {/* Business Address */}
              <div className="space-y-0.5 text-xs sm:text-sm text-[#101C29] font-normal mb-4 leading-relaxed">
                <p className="font-semibold text-[#101C29]">Business Address:</p>
                <p className="text-[#101C29]/80 font-light">
                  3101 Bayshore Dr, Fort Lauderdale, FL 33304
                </p>
              </div>

              {/* Boarding Locations */}
              <div className="space-y-0.5 text-xs sm:text-sm text-[#101C29] font-normal mb-6 leading-relaxed">
                <p className="font-semibold text-[#101C29]">Boarding Locations:</p>
                <p className="text-[#101C29]/80 font-light">
                  Swimming Hall of Fame Marina, Fort Lauderdale, Florida
                </p>
                <p className="text-[#101C29]/80 font-light">
                  Shooters Waterfront, Fort Lauderdale, Florida
                </p>
                <p className="text-[11px] text-neutral-500 font-light italic mt-1.5">
                  * Boarding arrangements are confirmed individually for each charter.
                </p>
              </div>

              {/* Three Action Buttons: CALL US, SEND AN EMAIL, TEXT US */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <a
                  href="tel:+15163751093"
                  className="h-[44px] bg-[#101C29] hover:bg-[#182A3E] text-white border border-[#B9A078]/40 hover:border-[#B9A078] transition-all duration-300 text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase font-semibold flex items-center justify-center rounded-[2px] shadow-sm text-center"
                >
                  CALL US
                </a>
                <a
                  href="mailto:doug@hgsfl.com"
                  className="h-[44px] bg-[#101C29] hover:bg-[#182A3E] text-white border border-[#B9A078]/40 hover:border-[#B9A078] transition-all duration-300 text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase font-semibold flex items-center justify-center rounded-[2px] shadow-sm text-center"
                >
                  SEND AN EMAIL
                </a>
                <a
                  href="sms:+15163751093"
                  className="h-[44px] bg-[#101C29] hover:bg-[#182A3E] text-white border border-[#B9A078]/40 hover:border-[#B9A078] transition-all duration-300 text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase font-semibold flex items-center justify-center rounded-[2px] shadow-sm text-center"
                >
                  TEXT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

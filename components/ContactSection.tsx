"use client";

import React, { useState } from "react";

interface ContactSectionProps {
  themeColor: string;
}

export default function ContactSection({ themeColor }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const contactDetails = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Me",
      value: "harivarsan28@gmail.com",
      link: "mailto:harivarsan28@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "TAMIL NADU, INDIA",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      value: "Mon - Sat: 9am - 7pm",
    },
  ];

  return (
    <section id="contact" className="p-4 sm:p-6 md:p-12 max-w-5xl mx-auto text-gray-800 animate-fadeIn">
      {/* Header matching exact image mockup */}
      <div className="border-b border-gray-200 pb-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2 sm:gap-3">
          Contact <span style={{ color: themeColor }}>Me</span>
          <span className="w-8 sm:w-12 h-1 rounded-full inline-block transition-all duration-300" style={{ backgroundColor: themeColor }} />
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Get in touch for web design inquiries, collaborations, or freelance projects.</p>
      </div>

      {/* Grid: Form & Side Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Contact Form matching exact image specs */}
        <div className="lg:col-span-8 bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 shadow-md">
          {/* Submission Toast Alert */}
          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">Thank you for reaching out. Harivarsan will respond to your email shortly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Input Row: Full Name & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none transition-all duration-200 focus:bg-white focus:shadow-sm"
                  style={{ borderColor: undefined }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none transition-all duration-200 focus:bg-white focus:shadow-sm"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none transition-all duration-200 focus:bg-white focus:shadow-sm"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Your Message</label>
              <textarea
                rows={5}
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none transition-all duration-200 focus:bg-white focus:shadow-sm resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: themeColor }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Side Info Cards */}
        <div className="lg:col-span-4 space-y-4">
          {contactDetails.map((detail, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div
                className="p-3 rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ backgroundColor: themeColor }}
              >
                {detail.icon}
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{detail.title}</h4>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-xs font-bold text-gray-800 hover:underline mt-0.5 block truncate"
                    style={{ color: themeColor }}
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-xs font-bold text-gray-800 mt-0.5">{detail.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Availability Status Card */}
          <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-emerald-900">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">Status</h4>
            </div>
            <p className="text-xs font-semibold text-emerald-700">Currently accepting new design & development projects!</p>
          </div>
        </div>
      </div>
    </section>
  );
}


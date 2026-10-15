"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const STORAGE_KEY = "harivarsan_resume_content_v1";
const SIGNATURE_STORAGE_KEY = "harivarsan_resume_signature_v1";

export default function ResumePrintPage() {
  const [isEditable, setIsEditable] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [signatureName, setSignatureName] = useState("Harivarsan Srinivasan");
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState("Tamil Nadu, India");
  const [statusText, setStatusText] = useState("Open for Opportunities");
  const [isMounted, setIsMounted] = useState(false);

  const pagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved content and settings from localStorage upon mount
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedHtml = localStorage.getItem(STORAGE_KEY);
      if (savedHtml && pagesContainerRef.current) {
        pagesContainerRef.current.innerHTML = savedHtml;
      }

      const savedSigName = localStorage.getItem(SIGNATURE_STORAGE_KEY + "_name");
      if (savedSigName) setSignatureName(savedSigName);

      const savedPlace = localStorage.getItem(SIGNATURE_STORAGE_KEY + "_place");
      if (savedPlace) setPlaceName(savedPlace);

      const savedStatus = localStorage.getItem(SIGNATURE_STORAGE_KEY + "_status");
      if (savedStatus) setStatusText(savedStatus);

      const savedSigImage = localStorage.getItem(SIGNATURE_STORAGE_KEY + "_img");
      if (savedSigImage) setSignatureImage(savedSigImage);

      const savedTime = localStorage.getItem(STORAGE_KEY + "_time");
      if (savedTime) setLastSaved(savedTime);
    }
  }, []);

  // Save changes to localStorage
  const handleSave = () => {
    if (typeof window !== "undefined" && pagesContainerRef.current) {
      const content = pagesContainerRef.current.innerHTML;
      localStorage.setItem(STORAGE_KEY, content);
      localStorage.setItem(SIGNATURE_STORAGE_KEY + "_name", signatureName);
      localStorage.setItem(SIGNATURE_STORAGE_KEY + "_place", placeName);
      localStorage.setItem(SIGNATURE_STORAGE_KEY + "_status", statusText);
      if (signatureImage) {
        localStorage.setItem(SIGNATURE_STORAGE_KEY + "_img", signatureImage);
      }

      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSaved(currentTime);
      localStorage.setItem(STORAGE_KEY + "_time", currentTime);
      alert("✅ All changes saved! You can refresh the page anytime, and your edits will be preserved.");
    }
  };

  // Reset to original default content
  const handleResetToDefault = () => {
    if (confirm("Are you sure you want to reset all 4 pages back to original defaults?")) {
      if (typeof window !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_KEY + "_time");
        localStorage.removeItem(SIGNATURE_STORAGE_KEY + "_name");
        localStorage.removeItem(SIGNATURE_STORAGE_KEY + "_place");
        localStorage.removeItem(SIGNATURE_STORAGE_KEY + "_status");
        localStorage.removeItem(SIGNATURE_STORAGE_KEY + "_img");
        window.location.reload();
      }
    }
  };

  // Trigger print / save as PDF
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      // Auto-save before printing so nothing is lost
      if (pagesContainerRef.current) {
        localStorage.setItem(STORAGE_KEY, pagesContainerRef.current.innerHTML);
      }
      window.print();
    }
  };

  // Upload custom signature image
  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setSignatureImage(base64);
        if (typeof window !== "undefined") {
          localStorage.setItem(SIGNATURE_STORAGE_KEY + "_img", base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-8 px-4 print:p-0 print:bg-white text-gray-800 font-sans">
      {/* Top Action Bar (Hidden on print) */}
      <div className="max-w-[210mm] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white print:hidden border border-white/10 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">Harivarsan Srinivasan - 4-Page Comprehensive CV</h1>
            <span className="bg-emerald-500/30 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
              4 A4 Pages
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-0.5">
            {lastSaved ? (
              <span className="text-emerald-400 font-medium">✓ Changes saved at {lastSaved}</span>
            ) : (
              <span>Edit any text, click <strong>Save Content</strong>, refresh freely, and download/print as PDF!</span>
            )}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/"
            className="px-3 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-semibold transition-all"
          >
            ← Portfolio
          </Link>

          {/* Live Edit Toggle */}
          <button
            onClick={() => setIsEditable(!isEditable)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isEditable
                ? "bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400"
                : "bg-white/20 hover:bg-white/30 text-white"
            }`}
            title="Toggle live editing on the pages"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>{isEditable ? "Editing ON" : "Edit Details"}</span>
          </button>

          {/* Save Content Button */}
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            title="Save edits so they persist even after page refresh"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span>Save Content</span>
          </button>

          {/* Reset Defaults */}
          <button
            onClick={handleResetToDefault}
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-red-500/40 text-gray-300 hover:text-white font-semibold text-xs transition-all cursor-pointer"
            title="Reset to default resume details"
          >
            Reset
          </button>

          {/* Print / Save as PDF Button */}
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Editing Mode Banner Alert (Hidden on print) */}
      {isEditable && (
        <div className="max-w-[210mm] mx-auto mb-4 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-emerald-200 text-xs text-center print:hidden flex items-center justify-between gap-2 shadow-md">
          <span>✨ <strong>Live Editing Active:</strong> Type directly anywhere inside the 4 pages. When done, click <strong>"Save Content"</strong> above to store your edits permanently!</span>
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[11px] rounded-lg cursor-pointer"
          >
            Save Now
          </button>
        </div>
      )}

      {/* Signature Toolbar on screen (Hidden on print) */}
      <div className="max-w-[210mm] mx-auto mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/10 text-xs print:hidden shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-400">✍️ Signature Controls:</span>
          <span className="text-gray-300">Choose script font signature or upload your own handwritten signature image:</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleSignatureUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold cursor-pointer"
          >
            📷 Upload Signature Image
          </button>
          {signatureImage && (
            <button
              onClick={() => {
                setSignatureImage(null);
                if (typeof window !== "undefined") {
                  localStorage.removeItem(SIGNATURE_STORAGE_KEY + "_img");
                }
              }}
              className="px-2.5 py-1.5 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-200 font-semibold cursor-pointer"
            >
              Remove Image
            </button>
          )}
        </div>
      </div>

      {/* A4 PRINT CONTAINER (4 Distinct Pages) */}
      <div
        ref={pagesContainerRef}
        className="max-w-[210mm] mx-auto space-y-8 print:space-y-0"
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
      >
        
        {/* ========================================================= */}
        {/* ======================= PAGE 1 ========================== */}
        {/* PROFILE, OBJECTIVE, WORK EXPERIENCE & APPRENTICESHIP     */}
        {/* ========================================================= */}
        <div className="w-full bg-white shadow-2xl print:shadow-none print:m-0 print:border-none p-8 md:p-10 rounded-2xl print:rounded-none min-h-[297mm] flex flex-col justify-between border border-gray-100 page-break-after">
          <div>
            {/* Header / Personal Intro */}
            <header className="flex items-center justify-between border-b-2 border-emerald-600 pb-5 mb-5">
              <div className="flex items-center gap-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md flex-shrink-0" contentEditable={false}>
                  <Image
                    src="/alex-avatar.jpg"
                    alt="Harivarsan Srinivasan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                    HARIVARSAN SRINIVASAN
                  </h1>
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mt-0.5">
                    Web Designer & UI/UX Specialist | Frontend Developer
                  </p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xl leading-relaxed">
                    Passionate web designer and UI/UX developer creating sleek, functional, and visually striking digital experiences with modern web technologies.
                  </p>
                </div>
              </div>
            </header>

            {/* Contact & Personal Metadata Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-xs mb-5">
              <div>
                <span className="font-bold text-gray-400 block text-[10px] uppercase">Email</span>
                <span className="font-semibold text-gray-800 break-all">harivarsan28@gmail.com</span>
              </div>
              <div>
                <span className="font-bold text-gray-400 block text-[10px] uppercase">Location</span>
                <span className="font-semibold text-gray-800">Tamil Nadu, INDIA</span>
              </div>
              <div>
                <span className="font-bold text-gray-400 block text-[10px] uppercase">Age / Status</span>
                <span className="font-semibold text-gray-800">19 / Available</span>
              </div>
              <div>
                <span className="font-bold text-gray-400 block text-[10px] uppercase">Portfolio</span>
                <span className="font-semibold text-emerald-600">Online Showcase</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Career Profile & Objective
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Creative and detail-oriented Web Designer & Frontend Developer with practical hands-on experience in building fast, accessible, and responsive user interfaces. Proven track record in prototyping in Figma and implementing design systems with Next.js, React, TypeScript, and modern CSS/Tailwind. Dedicated to delivering digital experiences that delight users and drive real business outcomes.
              </p>
            </div>

            {/* Professional Work Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Professional Experience
              </h2>

              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-emerald-500">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-xs font-bold text-gray-900">
                      Web Designer and Web Developer
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Vcinnovate Solutions LLP</p>
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-1.5">
                    Designing and developing responsive, high-performance web applications using modern front-end technologies and interactive design principles.
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                    <li>Architected modern responsive UI solutions for client web platforms.</li>
                    <li>Improved website performance scores and cross-browser responsiveness by 35%.</li>
                    <li>Collaborated closely with cross-functional teams to ship pixel-perfect web designs.</li>
                    <li>Implemented reusable component libraries with React and TypeScript.</li>
                  </ul>
                </div>

                <div className="relative pl-4 border-l-2 border-gray-300">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-xs font-bold text-gray-900">
                      Internship as Web Designer and Web Developer
                    </h3>
                    <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      2024
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Vcinnovate Solutions LLP</p>
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-1.5">
                    Hands-on practical experience in web interface design, HTML/CSS structuring, component styling, and client web deployment.
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                    <li>Converted custom UI/UX mockups into clean, production-ready code.</li>
                    <li>Assisted senior engineers in bug fixes and responsive layout optimization.</li>
                    <li>Learned git version control workflows, agile standups, and deployment cycles.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Accomplishments on Page 1 */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Key Career Highlights
              </h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-emerald-700 block text-xs">25+ Completed Projects</span>
                  <span className="text-[11px] text-gray-600">Successfully designed and shipped across web, SaaS, and mobile platforms.</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-emerald-700 block text-xs">Design System Architect</span>
                  <span className="text-[11px] text-gray-600">Built scalable UI design tokens and component kits adopted by production teams.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page 1 Footer */}
          <div className="pt-3 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400">
            <span>Harivarsan Srinivasan • Resume</span>
            <span>Page 1 of 4</span>
          </div>
        </div>


        {/* ========================================================= */}
        {/* ======================= PAGE 2 ========================== */}
        {/* EDUCATION, TECHNICAL SKILLS & PROFICIENCY BREAKDOWN       */}
        {/* ========================================================= */}
        <div className="w-full bg-white shadow-2xl print:shadow-none print:m-0 print:border-none p-8 md:p-10 rounded-2xl print:rounded-none min-h-[297mm] flex flex-col justify-between border border-gray-100 page-break-after">
          <div>
            {/* Header Banner Page 2 */}
            <div className="border-b-2 border-emerald-600 pb-3 mb-5 flex justify-between items-center">
              <div>
                <h2 className="text-base font-black text-gray-900 uppercase tracking-tight">
                  HARIVARSAN SRINIVASAN
                </h2>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">
                  Education & Comprehensive Technical Skill Set
                </span>
              </div>
              <span className="text-xs font-bold text-gray-400">Page 2</span>
            </div>

            {/* Academic Qualifications */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Education & Qualifications
              </h2>

              <div className="space-y-3.5">
                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900">
                        Bachelor of Engineering in Electronics & Communication Engineering
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700">Anna University</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">
                      2024 - 2028
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                    Core coursework in engineering fundamentals, embedded computing, software engineering, digital signal processing, and web technological systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded text-gray-600 border border-gray-200">Academic Honors</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded text-gray-600 border border-gray-200">Head of Tech Committee</span>
                  </div>
                </div>

                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900">
                        Master of Design (Specialization Program)
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700">University of Design</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200">
                      2028 - 2030
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                    Advanced specialization focusing on User Experience (UX) Architecture, Design System Engineering, Interactive Micro-animations, and Product Growth Strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills & Proficiency Matrix */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Technical Skills & Competencies
              </h2>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>Web Design & UI/UX Prototyping</span>
                    <span className="text-emerald-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>Frontend Development (React.js, Next.js, TypeScript)</span>
                    <span className="text-emerald-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>HTML5, CSS3, Tailwind CSS & Glassmorphism</span>
                    <span className="text-emerald-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>JavaScript (ES6+) & TypeScript Core</span>
                    <span className="text-emerald-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>Figma, Wireframing & Design Systems</span>
                    <span className="text-emerald-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-gray-800 mb-1">
                    <span>Responsive Layouts & Cross-Browser Compatibility</span>
                    <span className="text-emerald-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Design & Tooling Tech Stack Badges */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Tools & Technologies Arsenal
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Figma", "Adobe XD", "Git & GitHub", "REST APIs", "Node.js", "Vercel", "VS Code", "Responsive UI", "Accessibility (a11y)"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-[11px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Page 2 Footer */}
          <div className="pt-3 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400">
            <span>Harivarsan Srinivasan • Education & Skills</span>
            <span>Page 2 of 4</span>
          </div>
        </div>


        {/* ========================================================= */}
        {/* ======================= PAGE 3 ========================== */}
        {/* DETAILED PROJECT PORTFOLIO CASE STUDIES                   */}
        {/* ========================================================= */}
        <div className="w-full bg-white shadow-2xl print:shadow-none print:m-0 print:border-none p-8 md:p-10 rounded-2xl print:rounded-none min-h-[297mm] flex flex-col justify-between border border-gray-100 page-break-after">
          <div>
            {/* Header Banner Page 3 */}
            <div className="border-b-2 border-emerald-600 pb-3 mb-5 flex justify-between items-center">
              <div>
                <h2 className="text-base font-black text-gray-900 uppercase tracking-tight">
                  HARIVARSAN SRINIVASAN
                </h2>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">
                  Featured Projects & Technical Case Studies
                </span>
              </div>
              <span className="text-xs font-bold text-gray-400">Page 3</span>
            </div>

            {/* Featured Projects Grid */}
            <div className="space-y-4 mb-4">
              {/* Project 1 */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">1. DataBurst Analytics Suite</h3>
                    <p className="text-[11px] font-semibold text-emerald-700">Real-time Enterprise Dashboard & Data Visualization</p>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  Engineered a full-featured real-time web dashboard capable of aggregating high-throughput metrics. Features custom visual charts, trajectory tracking, and automated scheduled reporting with role-based access.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Next.js</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">TypeScript</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Tailwind CSS</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Recharts</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">2. Nexus AI Studio</h3>
                    <p className="text-[11px] font-semibold text-purple-700">Generative AI SaaS & Workflow Automation Workspace</p>
                  </div>
                  <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                    AI / SaaS Platform
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  Designed and developed an interactive node-based workspace enabling users to chain multimodal prompts, tune LLM hyperparameters, and export code pipelines directly into production environments.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">React.js</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Python</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">FastAPI</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">OpenAI API</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">3. Aura Luxe E-Commerce Platform</h3>
                    <p className="text-[11px] font-semibold text-blue-700">Luxury Storefront with 3D Product Interactive Previews</p>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    E-Commerce
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  High-converting web storefront featuring 3D Three.js product rotations, instant client-side search, cart persistence, and Stripe checkout integration with sub-second page transition speeds.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Next.js SSR</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Three.js</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Stripe</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Zustand</span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">4. FinVault Web3 & FinTech Wallet</h3>
                    <p className="text-[11px] font-semibold text-amber-700">Comprehensive Crypto Asset Management Portal</p>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    UI/UX Design
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                  End-to-end Figma UI/UX prototype created to streamline DeFi interactions. Emphasizes transparent gas estimates, visual security validation badges, and clean multi-currency portfolio rebalancing.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Figma</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Design System</span>
                  <span className="text-[10px] font-semibold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Prototyping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page 3 Footer */}
          <div className="pt-3 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400">
            <span>Harivarsan Srinivasan • Portfolio Projects</span>
            <span>Page 3 of 4</span>
          </div>
        </div>


        {/* ========================================================= */}
        {/* ======================= PAGE 4 ========================== */}
        {/* CERTIFICATIONS, SERVICES, DECLARATION & SIGNATURE          */}
        {/* ========================================================= */}
        <div className="w-full bg-white shadow-2xl print:shadow-none print:m-0 print:border-none p-8 md:p-10 rounded-2xl print:rounded-none min-h-[297mm] flex flex-col justify-between border border-gray-100">
          <div>
            {/* Header Banner Page 4 */}
            <div className="border-b-2 border-emerald-600 pb-3 mb-5 flex justify-between items-center">
              <div>
                <h2 className="text-base font-black text-gray-900 uppercase tracking-tight">
                  HARIVARSAN SRINIVASAN
                </h2>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">
                  Certifications, Core Services & Formal Declaration
                </span>
              </div>
              <span className="text-xs font-bold text-gray-400">Page 4</span>
            </div>

            {/* Certifications & Industry Recognition */}
            <div className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Certifications & Honors
              </h2>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-900 text-xs">Certified Web Developer</h5>
                    <p className="text-[11px] text-gray-500">Vcinnovate Academy</p>
                    <span className="text-[10px] text-emerald-700 font-semibold">Distinction in Modern Web Apps</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">2024</span>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-900 text-xs">UI/UX & Design Systems</h5>
                    <p className="text-[11px] text-gray-500">Design Guild</p>
                    <span className="text-[10px] text-emerald-700 font-semibold">Advanced Component Architecture</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">2025</span>
                </div>
              </div>
            </div>

            {/* Professional Services Offered */}
            <div className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Professional Service Offerings
              </h2>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Web Design & Prototyping</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Custom website interfaces tailored for brands, startup landing pages, and interactive high-fidelity user journeys.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Frontend Engineering</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Building robust, scalable client-side architectures using React, Next.js, and TypeScript with fast load times.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Design Systems & Tokens</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Standardized UI component libraries, typographic hierarchies, color palettes, and accessible design patterns.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Performance & Responsive Optimization</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Fine-tuning cross-device mobile responsiveness, SEO ranking factors, web vitals, and asset optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* CUSTOM CONTENT / NOTES SECTION (For adding custom text directly) */}
            <div className="mb-5 p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-200/60">
              <h2 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Custom Candidate Notes / Additional Details
              </h2>
              <p className="text-[11px] text-emerald-950 leading-relaxed">
                Click here or enable editing to add any custom details, references, awards, languages (Tamil, English), volunteer work, publications, or customized client notes directly on this page before printing.
              </p>
            </div>

            {/* Formal Declaration & Signature Block */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
              <span className="font-bold text-gray-900 block mb-1">Declaration:</span>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                I hereby declare that all information and particulars stated in this resume are true, complete, and correct to the best of my knowledge and belief.
              </p>

              <div className="flex justify-between items-end pt-2 border-t border-gray-200 text-[11px]">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-gray-800">Place:</span>
                    <span className="font-semibold text-gray-700">{placeName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-bold text-gray-800">Status:</span>
                    <span className="font-semibold text-emerald-700">{statusText}</span>
                  </div>
                </div>

                {/* SIGNATURE SECTION */}
                <div className="text-right flex flex-col items-end">
                  {/* Handwritten Signature Script or Uploaded Image */}
                  <div className="h-14 flex items-center justify-end mb-1">
                    {signatureImage ? (
                      <img
                        src={signatureImage}
                        alt="Signature"
                        className="max-h-12 max-w-[160px] object-contain"
                      />
                    ) : (
                      <div className="font-signature text-3xl sm:text-4xl text-emerald-800 leading-none tracking-normal select-none pr-1">
                        {signatureName}
                      </div>
                    )}
                  </div>

                  <span className="font-black text-xs text-gray-900 block border-t border-gray-300 pt-1 min-w-[140px] text-center">
                    {signatureName.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-gray-500 text-center block w-full">
                    Authorized Signature
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4 Footer */}
          <div className="pt-3 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400">
            <span>Harivarsan Srinivasan • harivarsan28@gmail.com</span>
            <span>Page 4 of 4</span>
          </div>
        </div>

      </div>
    </div>
  );
}

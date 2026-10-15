"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HomeSectionProps {
  themeColor: string;
  onContactClick: () => void;
  onPortfolioClick: () => void;
}

export default function HomeSection({
  themeColor,
  onContactClick,
  onPortfolioClick,
}: HomeSectionProps) {
  const roles = [
    "UI/UX SPECIALIST",
    "WEB DESIGNER",
    "FRONTEND DEVELOPER",
    "CREATIVE UI DESIGNER",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="relative w-full h-full min-h-screen flex flex-col justify-center items-center overflow-hidden select-none">
      {/* Background Workspace Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Workspace Top View"
          fill
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-white/20 backdrop-blur-[2px]" />
      </div>

      {/* Floating Animated Ambient Glow Blobs behind Card */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse-glow pointer-events-none transition-colors duration-700 top-1/4 left-1/3"
        style={{ backgroundColor: themeColor }}
      />
      <div
        className="absolute w-72 h-72 rounded-full blur-2xl opacity-20 animate-float pointer-events-none transition-colors duration-700 bottom-1/4 right-1/3"
        style={{ backgroundColor: themeColor }}
      />

      {/* Floating Animated Tech Badges */}
      <div
        className="hidden lg:block absolute left-16 top-1/3 z-10 animate-float transition-all duration-700"
        style={{ animationDuration: "6s" }}
      >
        <div
          className="px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/80 text-xs font-bold text-gray-800 flex items-center gap-2.5 transform hover:scale-110 transition-transform cursor-pointer"
          style={{ boxShadow: `0 8px 25px ${themeColor}25` }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: themeColor }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full absolute"
            style={{ backgroundColor: themeColor }}
          />
          <span>UI/UX Design</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-20 bottom-1/3 z-10 animate-float transition-all duration-700"
        style={{ animationDuration: "7s", animationDelay: "1s" }}
      >
        <div
          className="px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/80 text-xs font-bold text-gray-800 flex items-center gap-2.5 transform hover:scale-110 transition-transform cursor-pointer"
          style={{ boxShadow: `0 8px 25px ${themeColor}25` }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: themeColor }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full absolute"
            style={{ backgroundColor: themeColor }}
          />
          <span>Frontend Dev</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-32 top-1/4 z-10 animate-float transition-all duration-700"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      >
        <div
          className="px-3.5 py-1.5 rounded-2xl bg-white/70 backdrop-blur-md shadow-md border border-white/80 text-[11px] font-bold text-gray-700 flex items-center gap-2 transform hover:scale-105 transition-transform"
        >
          <span className="text-amber-500">✨</span>
          <span>Web Design</span>
        </div>
      </div>

      {/* Central Glassmorphism Hero Card */}
      <div
        className="relative z-10 text-center px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 bg-white/85 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] border border-white/90 shadow-2xl max-w-lg w-[92%] sm:w-[90%] mx-auto transform transition-all duration-500 hover:shadow-3xl my-auto"
        style={{ boxShadow: `0 20px 50px rgba(0, 0, 0, 0.08), 0 0 30px ${themeColor}15` }}
      >
        {/* Glowing aura accent top border */}
        <div
          className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 sm:h-1.5 rounded-full transition-colors duration-500"
          style={{ backgroundColor: themeColor, boxShadow: `0 0 15px ${themeColor}` }}
        />

        {/* Name Header */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 transition-colors duration-300 drop-shadow-sm"
          style={{ color: themeColor }}
        >
          Harivarsan
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <div className="h-8 mb-6 sm:mb-7 flex justify-center items-center">
          <p className="text-gray-600 font-extrabold text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase flex items-center gap-0.5">
            <span>{displayedText}</span>
            <span
              className="inline-block w-0.5 h-3.5 sm:h-4 ml-0.5 animate-blink"
              style={{ backgroundColor: themeColor }}
            />
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full">
          {/* Contact Me Button */}
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group relative overflow-hidden"
            style={{
              backgroundColor: themeColor,
              boxShadow: `0 10px 25px ${themeColor}50`,
            }}
          >
            {/* Hover sheen effect */}
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10">Contact Me</span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Tamil Nadu Location Button */}
          <button
            onClick={onPortfolioClick}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group"
          >
            {/* Location Pin Icon */}
            <svg
              className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: themeColor }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Tamil nadu</span>
          </button>
        </div>
      </div>
    </section>
  );
}



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
  const roles = ["WEB DESIGNER", "UI/UX SPECIALIST", "FRONTEND DEVELOPER"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

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
        <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-white/30 to-white/10" />
      </div>

      {/* Floating Animated Ambient Glow behind Card */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: themeColor }}
      />

      {/* Floating Tech Badges in Background */}
      <div className="hidden lg:block absolute left-12 top-1/3 z-10 animate-bounce transition-all duration-1000" style={{ animationDuration: "6s" }}>
        <div className="px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md shadow-md border border-white/60 text-xs font-bold text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
          UI/UX Design
        </div>
      </div>

      <div className="hidden lg:block absolute right-16 bottom-1/3 z-10 animate-bounce transition-all duration-1000" style={{ animationDuration: "7s", animationDelay: "1s" }}>
        <div className="px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md shadow-md border border-white/60 text-xs font-bold text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
          Frontend Dev
        </div>
      </div>

      {/* Central Glassmorphism Card (Exact Mockup Match) */}
      <div className="relative z-10 text-center px-8 py-10 md:px-14 md:py-12 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white/90 shadow-2xl max-w-lg w-[90%] mx-auto transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
        {/* Name Header */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 transition-colors duration-300 drop-shadow-sm"
          style={{ color: themeColor }}
        >
          Harivarsan
        </h1>

        {/* Animated Subtitle */}
        <div className="h-7 mb-7 flex justify-center items-center">
          <p
            className={`text-gray-500 font-bold text-sm sm:text-base tracking-[0.25em] uppercase transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[currentRoleIndex]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {/* Contact Me Button */}
          <button
            onClick={onContactClick}
            className="px-6 py-3 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer group"
            style={{ backgroundColor: themeColor }}
          >
            <span>Contact Me</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Tamil Nadu Button */}
          <button
            onClick={onPortfolioClick}
            className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            {/* Location Pin Icon */}
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


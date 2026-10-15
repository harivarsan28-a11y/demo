"use client";

import React, { useState } from "react";
import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

// Custom SVG Icons
const HomeIcon = ({ size = 20, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = ({ size = 20, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FileTextIcon = ({ size = 20, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 2 2h12a2 2 0 0 2 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const BriefcaseIcon = ({ size = 20, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MailIcon = ({ size = 20, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SettingsIcon = ({ size = 18, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const XIcon = ({ size = 14, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const PaletteIcon = ({ size = 14, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.5-.72 1.5-1.5 0-.4-.15-.78-.42-1.07-.27-.29-.42-.67-.42-1.08 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z" />
  </svg>
);

export default function AlexPortfolio() {
  const [activeTab, setActiveTab] = useState("home");
  const [themeColor, setThemeColor] = useState("#10B981"); // Vibrant Emerald Green matching mockup screenshot
  const [showSettings, setShowSettings] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About me", icon: UserIcon },
    { id: "resume", label: "Resume", icon: FileTextIcon },
    { id: "portfolio", label: "Portfolio", icon: BriefcaseIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ];

  const colorOptions = [
    { name: "Emerald Green", value: "#10B981" },
    { name: "Cyan Teal", value: "#06B6D4" },
    { name: "Electric Blue", value: "#2563EB" },
    { name: "Purple Neon", value: "#8B5CF6" },
    { name: "Coral Rose", value: "#F43F5E" },
    { name: "Sunset Gold", value: "#F59E0B" },
  ];

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-[#1a1a1a] font-sans select-none">
      {/* MOBILE TOP HEADER BAR (visible only on screens smaller than md) */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[#222222] border-b border-[#2d2d2d] z-30 shadow-md">
        <button
          onClick={() => setShowProfileModal(true)}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div
            className="relative w-9 h-9 rounded-full overflow-hidden border-2 shadow-md flex-shrink-0"
            style={{
              borderColor: themeColor,
              boxShadow: `0 0 10px ${themeColor}60`,
            }}
          >
            <Image
              src="/alex-avatar.jpg"
              alt="Harivarsan Srinivasan"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="font-bold text-xs text-white leading-tight">
              Harivarsan S.
            </h2>
            <span
              className="text-[10px] font-semibold"
              style={{ color: themeColor }}
            >
              UI/UX Designer
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {/* Quick theme settings button on mobile header */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-xl bg-[#2a2a2a] text-gray-300 hover:text-white transition-colors cursor-pointer"
            title="Theme Settings"
          >
            <SettingsIcon size={18} color={showSettings ? themeColor : undefined} />
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#2a2a2a] text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            title="Toggle Menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <XIcon size={20} color={themeColor} />
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE FULL DRAWER NAVIGATION OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-xs h-full bg-[#222222] border-r border-[#2d2d2d] shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer User profile summary */}
              <div
                onClick={() => {
                  setShowProfileModal(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#1b1b1b] border border-[#2d2d2d] cursor-pointer mb-6"
              >
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0"
                  style={{ borderColor: themeColor }}
                >
                  <Image
                    src="/alex-avatar.jpg"
                    alt="Harivarsan Srinivasan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">Harivarsan S.</h3>
                  <p className="text-[11px] text-gray-400">Web Designer</p>
                  <span className="text-[10px] font-semibold" style={{ color: themeColor }}>
                    Tap to view profile ✨
                  </span>
                </div>
              </div>

              {/* Navigation items list */}
              <nav className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer text-left ${
                        isActive
                          ? "bg-[#181818] text-white shadow-inner font-bold"
                          : "text-[#999999] hover:text-white hover:bg-[#1a1a1a]"
                      }`}
                      style={isActive ? { color: themeColor, borderLeft: `3px solid ${themeColor}` } : undefined}
                    >
                      <Icon size={18} color={isActive ? themeColor : undefined} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-[#2d2d2d] flex items-center justify-between text-[#777777] text-xs">
              <span>© 2026 Harivarsan</span>
              <div
                className="w-6 h-6 rounded-md border flex items-center justify-center font-black text-[10px]"
                style={{ borderColor: `${themeColor}60`, color: themeColor }}
              >
                HV
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar Navigation (Hidden on mobile < md) */}
      <aside className="hidden md:flex w-36 lg:w-40 bg-[#222222] flex-col justify-between items-center py-6 border-r border-[#2d2d2d] z-20 flex-shrink-0 shadow-2xl">
        {/* Clickable Avatar & Name Header (Opens Personal Info Modal) */}
        <button
          onClick={() => setShowProfileModal(true)}
          className="flex flex-col items-center gap-3 w-full px-4 text-center group cursor-pointer focus:outline-none"
          title="Click for Personal Information"
        >
          <div
            className="relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
            style={{
              borderColor: themeColor,
              boxShadow: `0 0 20px ${themeColor}60`,
            }}
          >
            <Image
              src="/alex-avatar.jpg"
              alt="Harivarsan Srinivasan"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Online Status Dot */}
            <span
              className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 border-2 border-[#222222] rounded-full animate-ping opacity-75"
              style={{ backgroundColor: themeColor }}
            />
            <span
              className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 border-2 border-[#222222] rounded-full shadow-sm"
              style={{ backgroundColor: themeColor }}
            />
          </div>
          <div className="text-white">
            <h2
              className="font-bold text-sm tracking-wide leading-tight group-hover:text-white transition-colors"
            >
              Harivarsan
            </h2>
            <h2 className="font-bold text-sm tracking-wide leading-tight text-gray-300 group-hover:text-white transition-colors">
              Srinivasan
            </h2>
            <span
              className="text-[10px] font-medium tracking-wider mt-1 block opacity-80 group-hover:opacity-100 group-hover:underline transition-all"
              style={{ color: themeColor }}
            >
              View Profile ✨
            </span>
          </div>
        </button>

        {/* Navigation Menu */}
        <nav className="w-full flex flex-col gap-1.5 my-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`relative w-full py-4 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? "bg-[#181818] text-white shadow-inner"
                    : "text-[#999999] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {/* Active Accent Border Indicator */}
                {isActive && (
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full transition-all duration-300 shadow-md animate-pulse"
                    style={{
                      backgroundColor: themeColor,
                      boxShadow: `0 0 12px ${themeColor}`,
                    }}
                  />
                )}
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={20}
                    color={isActive ? themeColor : undefined}
                  />
                </div>
                <span
                  className={`text-xs font-semibold tracking-tight transition-colors ${
                    isActive ? "font-bold" : ""
                  }`}
                  style={isActive ? { color: themeColor } : undefined}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer with HV Monogram Logo */}
        <div className="flex flex-col items-center gap-1.5 text-[#777777] text-[10px] font-medium tracking-wider">
          <div
            className="w-7 h-7 rounded-lg border flex items-center justify-center font-black text-xs transition-transform hover:scale-110 shadow-sm"
            style={{
              borderColor: `${themeColor}60`,
              color: themeColor,
              backgroundColor: `${themeColor}10`,
            }}
          >
            HV
          </div>
          <span>© 2026 Harivarsan</span>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 relative h-full overflow-y-auto pb-20 md:pb-0 bg-[#fafafa]">
        {/* Desktop Gear Settings Button (Top Right) */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="hidden md:flex fixed top-6 right-6 z-40 p-3 bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl rounded-2xl border border-gray-200 text-gray-700 transition-all duration-300 hover:rotate-90 cursor-pointer active:scale-95"
          title="Theme Color Settings"
          style={{ borderColor: showSettings ? themeColor : undefined }}
        >
          <SettingsIcon size={20} color={showSettings ? themeColor : "#374151"} />
        </button>

        {/* Theme Settings Drawer */}
        {showSettings && (
          <div className="fixed top-14 md:top-20 right-4 md:right-6 z-40 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-gray-100 w-[calc(100vw-2rem)] max-w-xs animate-slide-up">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <PaletteIcon size={16} color={themeColor} /> Theme Color Accent
              </span>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors p-1"
              >
                <XIcon size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {colorOptions.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setThemeColor(c.value)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all cursor-pointer ${
                    themeColor === c.value
                      ? "bg-gray-100 ring-2 shadow-sm"
                      : "hover:bg-gray-50"
                  }`}
                  style={{ boxShadow: themeColor === c.value ? `0 0 0 2px ${c.value}` : undefined }}
                  title={c.name}
                >
                  <span
                    className={`w-7 h-7 rounded-full transition-transform ${
                      themeColor === c.value ? "scale-110 shadow-md" : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                  <span className="text-[10px] font-bold text-gray-700 text-center truncate w-full">
                    {c.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PERSONAL INFORMATION POPUP MODAL */}
        {showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-slide-up">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden relative">
              {/* Header Gradient */}
              <div
                className="h-28 relative flex items-end justify-center pb-4 transition-colors duration-500"
                style={{ backgroundColor: themeColor }}
              >
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors cursor-pointer"
                  title="Close"
                >
                  <XIcon size={16} />
                </button>
              </div>

              {/* Avatar overlapping header */}
              <div className="flex justify-center -mt-12 mb-3">
                <div
                  className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl"
                  style={{ boxShadow: `0 10px 25px ${themeColor}50` }}
                >
                  <Image
                    src="/alex-avatar.jpg"
                    alt="Harivarsan Srinivasan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 pt-0 text-center">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Harivarsan Srinivasan
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1 mb-4">
                  Web Designer & UI/UX Specialist
                </p>

                {/* Personal Information Table */}
                <div className="bg-gray-50 rounded-2xl p-4 text-left space-y-3 mb-6 border border-gray-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 pb-2 border-b border-gray-200 flex justify-between items-center">
                    <span>Personal Details</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available
                    </span>
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="font-bold text-gray-600">Age:</span>
                      <span className="font-semibold text-gray-800">19</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="font-bold text-gray-600">Residence:</span>
                      <span className="font-semibold text-gray-800">INDIA</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="font-bold text-gray-600">Address:</span>
                      <span className="font-semibold text-gray-800">TAMIL NADU, INDIA</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="font-bold text-gray-600">E-mail:</span>
                      <a
                        href="mailto:harivarsan28@gmail.com"
                        className="font-bold hover:underline"
                        style={{ color: themeColor }}
                      >
                        harivarsan28@gmail.com
                      </a>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-bold text-gray-600">Status:</span>
                      <span className="font-bold text-emerald-600">Available for Freelance</span>
                    </div>
                  </div>
                </div>

                {/* Quick Color Theme Selector inside Profile Modal */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                    Quick Theme Accent Color
                  </span>
                  <div className="flex gap-3 justify-center">
                    {colorOptions.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setThemeColor(c.value)}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                          themeColor === c.value ? "scale-125 border-gray-900 shadow-md" : "border-transparent hover:scale-110"
                        }`}
                        style={{ backgroundColor: c.value }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                {/* Footer Buttons */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => {
                        setShowProfileModal(false);
                        setActiveTab("about");
                      }}
                      className="flex-1 py-3 rounded-2xl font-bold text-xs text-white shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                      style={{ backgroundColor: themeColor }}
                    >
                      Go to Full About Section
                    </button>
                    <button
                      onClick={() => setShowProfileModal(false)}
                      className="px-5 py-3 rounded-2xl font-bold text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>

                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl font-bold text-xs text-white shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download / Print CV (4-Page A4)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEPARATED SECTION COMPONENTS WITH SMOOTH TRANSITION */}
        <div key={activeTab} className="animate-slide-up h-full">
          {activeTab === "home" && (
            <HomeSection
              themeColor={themeColor}
              onContactClick={() => handleSelectTab("contact")}
              onPortfolioClick={() => handleSelectTab("portfolio")}
            />
          )}
          {activeTab === "about" && <AboutSection themeColor={themeColor} />}
          {activeTab === "resume" && <ResumeSection themeColor={themeColor} />}
          {activeTab === "portfolio" && <PortfolioSection themeColor={themeColor} />}
          {activeTab === "contact" && <ContactSection themeColor={themeColor} />}
        </div>
      </main>

      {/* MOBILE BOTTOM NAVIGATION BAR (Compact, glassmorphism thumb-friendly navigation) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#222222]/95 backdrop-blur-lg border-t border-[#2d2d2d] flex items-center justify-around px-2 py-2 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 relative rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              {isActive && (
                <span
                  className="absolute -top-2 w-8 h-1 rounded-full shadow-sm"
                  style={{ backgroundColor: themeColor, boxShadow: `0 0 10px ${themeColor}` }}
                />
              )}
              <div className="transition-transform duration-200">
                <Icon
                  size={19}
                  color={isActive ? themeColor : "#9ca3af"}
                />
              </div>
              <span
                className={`text-[10px] mt-1 tracking-tight transition-colors truncate max-w-[56px] text-center ${
                  isActive ? "font-bold text-white" : "font-medium text-gray-400"
                }`}
                style={isActive ? { color: themeColor } : undefined}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}


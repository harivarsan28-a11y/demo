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
  const [themeColor, setThemeColor] = useState("#2563EB"); // Default Electric Blue matching image
  const [showSettings, setShowSettings] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About me", icon: UserIcon },
    { id: "resume", label: "Resume", icon: FileTextIcon },
    { id: "portfolio", label: "Portfolio", icon: BriefcaseIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ];

  const colorOptions = [
    { name: "Electric Blue", value: "#2563EB" },
    { name: "Coral Orange", value: "#FF6B53" },
    { name: "Emerald Green", value: "#10B981" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Crimson Red", value: "#EF4444" },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#222222] font-sans select-none">
      {/* Sidebar Navigation */}
      <aside className="w-36 md:w-40 bg-[#252525] flex flex-col justify-between items-center py-6 border-r border-[#1a1a1a] z-20 flex-shrink-0">
        {/* Clickable Avatar & Name Header (Opens Personal Info Modal) */}
        <button
          onClick={() => setShowProfileModal(true)}
          className="flex flex-col items-center gap-3 w-full px-4 text-center group cursor-pointer focus:outline-none"
          title="Click for Personal Information"
        >
          <div
            className="relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
            style={{ borderColor: themeColor, boxShadow: `0 0 15px ${themeColor}40` }}
          >
            <Image
              src="/alex-avatar.jpg"
              alt="Harivarsan Srinivasan"
              fill
              className="object-cover"
              priority
            />
            {/* Online Status Dot */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#252525] rounded-full animate-pulse" />
          </div>
          <div className="text-white">
            <h2 className="font-bold text-sm tracking-wide leading-tight group-hover:text-blue-400 transition-colors" style={{ color: undefined }}>
              Harivarsan
            </h2>
            <h2 className="font-bold text-sm tracking-wide leading-tight group-hover:text-blue-400 transition-colors">
              Srinivasan
            </h2>
            <span className="text-[10px] text-gray-400 font-medium tracking-wider mt-1 block opacity-80 group-hover:opacity-100 group-hover:underline transition-opacity">
              View Profile ✨
            </span>
          </div>
        </button>

        {/* Navigation Menu */}
        <nav className="w-full flex flex-col gap-1 my-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative w-full py-4 flex flex-col items-center justify-center gap-1.5 transition-colors group cursor-pointer ${
                  isActive
                    ? "bg-[#1d1d1d] text-white"
                    : "text-[#888888] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {/* Active Accent Border Indicator */}
                {isActive && (
                  <span
                    className="absolute right-0 top-0 bottom-0 w-1 transition-all"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
                <Icon
                  size={20}
                  color={isActive ? themeColor : undefined}
                />
                <span className="text-xs font-medium tracking-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer/Settings Toggle */}
        <div className="text-[#666666] text-[10px]">© 2026 Harivarsan</div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 relative h-full overflow-y-auto bg-[#fbfbfb]">
        {/* Gear Settings Button (Top Right) */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-6 right-6 z-30 p-2.5 bg-white shadow-md hover:shadow-lg rounded-sm border border-gray-100 text-gray-700 transition-all hover:rotate-45 cursor-pointer"
          title="Theme Settings"
        >
          <SettingsIcon size={18} />
        </button>

        {/* Theme Settings Drawer */}
        {showSettings && (
          <div className="absolute top-16 right-6 z-30 bg-white p-4 rounded-lg shadow-2xl border border-gray-100 w-64 animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <PaletteIcon size={14} /> Color Accent
              </span>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <XIcon size={14} />
              </button>
            </div>
            <div className="flex gap-2 justify-between">
              {colorOptions.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setThemeColor(c.value)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                    themeColor === c.value ? "scale-110 border-gray-800" : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* PERSONAL INFORMATION POPUP MODAL */}
        {showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300 relative">
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
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">● Online</span>
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
                    Quick Theme Color Accent
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
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowProfileModal(false);
                      setActiveTab("about");
                    }}
                    className="flex-1 py-2.5 rounded-xl font-bold text-xs text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                    style={{ backgroundColor: themeColor }}
                  >
                    Go to Full About Section
                  </button>
                  <button
                    onClick={() => setShowProfileModal(false)}
                    className="px-4 py-2.5 rounded-xl font-bold text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEPARATED SECTION COMPONENTS */}
        {activeTab === "home" && (
          <HomeSection
            themeColor={themeColor}
            onContactClick={() => setActiveTab("contact")}
            onPortfolioClick={() => setActiveTab("portfolio")}
          />
        )}
        {activeTab === "about" && <AboutSection themeColor={themeColor} />}
        {activeTab === "resume" && <ResumeSection themeColor={themeColor} />}
        {activeTab === "portfolio" && <PortfolioSection themeColor={themeColor} />}
        {activeTab === "contact" && <ContactSection themeColor={themeColor} />}
      </main>
    </div>
  );
}

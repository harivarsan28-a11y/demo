"use client";

import React from "react";

interface AboutSectionProps {
  themeColor: string;
}

export default function AboutSection({ themeColor }: AboutSectionProps) {
  const personalInfo = [
    { label: "Age:", value: "19" },
    { label: "Residence:", value: "INDIA" },
    { label: "Address:", value: "TAMIL NADU, INDIA" },
    { label: "E-mail:", value: "harivarsan28@gmail.com", isLink: true },
  ];

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Design",
      description: "Crafting modern, visually stunning, and responsive websites customized for modern brands.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Specialist",
      description: "Designing user-centric wireframes, design systems, and prototypes that maximize user engagement.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Frontend Development",
      description: "Building fast, clean, and scalable frontend web applications using React, Next.js, and TypeScript.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive Solutions",
      description: "Ensuring pixel-perfect display across desktop, tablet, and mobile devices seamlessly.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "25+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Design Awards", value: "5" },
  ];

  return (
    <section id="about" className="p-4 sm:p-6 md:p-12 max-w-5xl mx-auto text-gray-800">
      {/* Header */}
      <div className="border-b border-gray-200/80 pb-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2 sm:gap-3">
          About <span style={{ color: themeColor }}>Me</span>
          <span className="w-8 sm:w-12 h-1 rounded-full inline-block transition-all duration-300" style={{ backgroundColor: themeColor }} />
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 mt-1 tracking-wide">
          Web Designer & UI/UX Specialist
        </p>
      </div>

      {/* Main Grid: Story Bio & Personal Info Box */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-8 sm:mb-12 items-start">
        {/* Bio Text */}
        <div className="md:col-span-7 space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
          <p className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ borderLeftColor: themeColor }}>
            I'm <strong className="text-gray-900 font-bold">Harivarsan Srinivasan</strong>, a passionate web designer and UI/UX specialist dedicated to creating sleek, functional, and visually striking digital experiences.
          </p>
          <p className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ borderLeftColor: themeColor }}>
            My goal is to craft modern digital products that seamlessly bridge user needs and brand aesthetics through crisp layouts, intuitive design systems, and responsive front-end development.
          </p>
        </div>

        {/* Personal Details Card */}
        <div className="md:col-span-5 bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
          {/* Accent top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300" style={{ backgroundColor: themeColor }} />

          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
            <span>Personal Information</span>
            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
          </h3>

          <div className="space-y-2.5 sm:space-y-3.5">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 group/row hover:bg-gray-50/80 px-1 sm:px-2 rounded-lg transition-colors text-xs"
              >
                <span className="font-bold text-gray-600 uppercase tracking-wider">{info.label}</span>
                {info.isLink ? (
                  <a
                    href={`mailto:${info.value}`}
                    className="font-bold hover:underline transition-colors break-all text-right ml-2"
                    style={{ color: themeColor }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="font-bold text-gray-800 text-right ml-2">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-default"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110" style={{ color: themeColor }}>
              {stat.value}
            </div>
            <div className="text-[11px] sm:text-xs font-extrabold text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services / What I Do Section */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
          <span>What I Do</span>
          <span className="h-0.5 w-10 sm:w-12 rounded-full" style={{ backgroundColor: themeColor }} />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: themeColor }}>
                {service.icon}
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors">
                {service.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



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
    { label: "Years Experience", value: "8+" },
    { label: "Completed Projects", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Design Awards", value: "5" },
  ];

  return (
    <section id="about" className="p-6 md:p-12 max-w-5xl mx-auto text-gray-800 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
          About <span style={{ color: themeColor }}>Me</span>
          <span className="w-12 h-1 rounded-full inline-block transition-all duration-300" style={{ backgroundColor: themeColor }} />
        </h2>
        <p className="text-sm md:text-base font-semibold text-gray-500 mt-1 tracking-wide">
          Web Designer & UI/UX Specialist
        </p>
      </div>

      {/* Main Grid: Story Bio & Personal Info Box */}
      <div className="grid md:grid-cols-12 gap-8 mb-12 items-start">
        {/* Bio Text */}
        <div className="md:col-span-7 space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
          <p className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm border-l-4 transition-all duration-300 hover:shadow-md" style={{ borderLeftColor: themeColor }}>
            I'm Alex Smith, a passionate web designer with over 8 years of experience creating sleek, functional, and visually striking digital experiences.
          </p>
          <p className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm border-l-4 transition-all duration-300 hover:shadow-md" style={{ borderLeftColor: themeColor }}>
            My goal is to craft digital products that seamlessly bridge user needs and modern brand aesthetics through crisp layouts and intuitive design systems.
          </p>
        </div>

        {/* Personal Details Card */}
        <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
          {/* Accent top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300" style={{ backgroundColor: themeColor }} />

          <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
            <span>Personal Information</span>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
          </h3>

          <div className="space-y-3.5">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 group/row hover:bg-gray-50/80 px-2 rounded-lg transition-colors"
              >
                <span className="font-bold text-xs text-gray-700 uppercase tracking-wider">{info.label}</span>
                {info.isLink ? (
                  <a
                    href={`mailto:${info.value}`}
                    className="text-xs font-semibold hover:underline transition-colors break-all"
                    style={{ color: themeColor }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-xs font-bold text-gray-800">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="text-2xl md:text-3xl font-extrabold transition-transform duration-300 group-hover:scale-110" style={{ color: themeColor }}>
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services / What I Do Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>What I Do</span>
          <span className="h-0.5 w-10 rounded-full" style={{ backgroundColor: themeColor }} />
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: themeColor }}>
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


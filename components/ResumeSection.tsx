"use client";

import React, { useState } from "react";

interface ResumeSectionProps {
  themeColor: string;
}

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  type: "education" | "experience";
}

export default function ResumeSection({ themeColor }: ResumeSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "experience" | "education">("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const educationData: TimelineItem[] = [
    {
      id: "edu-1",
      period: "2028 - 2030",
      title: "Master of Design",
      subtitle: "University of Design",
      description: "Advanced specialization in User Experience (UX), Design Systems, Interactive Prototyping, and Digital Product Strategy.",
      highlights: ["Specialized in Design Systems & UI Architecture", "Lead UX Researcher for Industry Capstone Projects"],
      type: "education",
    },
    {
      id: "edu-2",
      period: "2024 - 2028",
      title: "Bachelor of Engineering in Electronics and Communication Engineering",
      subtitle: "Anna University",
      description: "Core engineering fundamentals, software development methodologies, embedded systems, and web technological foundations.",
      highlights: ["Graduated with Academic Excellence", "Head of Web & Tech Committee"],
      type: "education",
    },
  ];

  const experienceData: TimelineItem[] = [
    {
      id: "exp-1",
      period: "2024 - Present",
      title: "Web Designer and Web Developer",
      subtitle: "At Vcinnovate Solutions LLP",
      description: "Designing and developing responsive, high-performance web applications using modern front-end technologies and interactive design principles.",
      highlights: [
        "Architected modern responsive UI solutions for client projects",
        "Improved website performance scores and cross-browser responsiveness by 35%",
        "Collaborated closely with cross-functional teams to ship pixel-perfect web designs",
      ],
      type: "experience",
    },
    {
      id: "exp-2",
      period: "2024",
      title: "Internship as Web Designer and Web Developer",
      subtitle: "At Vcinnovate Solutions LLP",
      description: "Gained hands-on practical experience in web interface design, HTML/CSS structuring, component styling, and client web deployment.",
      highlights: [
        "Crafted custom UI mockups and converted them into clean code",
        "Assisted senior engineers in bug fixes and responsive layout optimization",
      ],
      type: "experience",
    },
  ];

  const skills = [
    { name: "Web Design & UI/UX", level: 95 },
    { name: "Frontend Development (React / Next.js)", level: 90 },
    { name: "HTML5 / CSS3 / Tailwind", level: 95 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "Figma & Wireframing", level: 92 },
  ];

  const certifications = [
    { title: "Certified Web Developer", issuer: "Vcinnovate Academy", year: "2024" },
    { title: "UI/UX & Design Systems", issuer: "Design Guild", year: "2025" },
  ];

  const filteredEducation = activeCategory === "experience" ? [] : educationData;
  const filteredExperience = activeCategory === "education" ? [] : experienceData;

  return (
    <section id="resume" className="p-4 sm:p-6 md:p-12 max-w-5xl mx-auto text-gray-800 animate-fadeIn">
      {/* Header Section with Title & Download CV CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4 mb-6 sm:mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Career & Education</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-1 flex items-center gap-2 sm:gap-3">
            RESUME
            <span className="w-8 sm:w-12 h-1 rounded-full inline-block transition-all duration-300" style={{ backgroundColor: themeColor }} />
          </h2>
        </div>

        {/* Filter Buttons & Download CTA */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4 md:mt-0">
          <div className="bg-gray-100 p-1 rounded-lg flex gap-1 border border-gray-200 text-xs font-medium">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-all duration-200 ${
                activeCategory === "all" ? "bg-white text-gray-900 shadow-sm font-semibold" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("education")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-all duration-200 ${
                activeCategory === "education" ? "bg-white text-gray-900 shadow-sm font-semibold" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveCategory("experience")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-all duration-200 ${
                activeCategory === "experience" ? "bg-white text-gray-900 shadow-sm font-semibold" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Experience
            </button>
          </div>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: "#F59E0B" }}
            title="Download & Print 4-Page A4 Resume"
          >
            {/* Download Icon matching user image */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* EDUCATION COLUMN */}
        {(activeCategory === "all" || activeCategory === "education") && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl shadow-sm text-white transition-all duration-300" style={{ backgroundColor: themeColor }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 tracking-wide">EDUCATION</h3>
            </div>

            <div className="relative border-l-2 pl-6 ml-4 space-y-8" style={{ borderColor: `${themeColor}40` }}>
              {filteredEducation.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative p-5 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    hoveredCard === item.id ? "border-l-4" : ""
                  }`}
                  style={{ borderLeftColor: hoveredCard === item.id ? themeColor : undefined }}
                >
                  {/* Timeline Node Dot */}
                  <span
                    className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white ring-4 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: themeColor, boxShadow: `0 0 0 4px ${themeColor}30` }}
                  />

                  {/* Date Badge */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm mb-3" style={{ backgroundColor: themeColor }}>
                    {item.period}
                  </div>

                  {/* Title & Institute */}
                  <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 mb-3">{item.subtitle}</p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.description}</p>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE COLUMN */}
        {(activeCategory === "all" || activeCategory === "experience") && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl shadow-sm text-white transition-all duration-300" style={{ backgroundColor: themeColor }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 tracking-wide">Experience</h3>
            </div>

            <div className="relative border-l-2 pl-6 ml-4 space-y-8" style={{ borderColor: `${themeColor}40` }}>
              {filteredExperience.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative p-5 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    hoveredCard === item.id ? "border-l-4" : ""
                  }`}
                  style={{ borderLeftColor: hoveredCard === item.id ? themeColor : undefined }}
                >
                  {/* Timeline Node Dot */}
                  <span
                    className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white ring-4 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: themeColor, boxShadow: `0 0 0 4px ${themeColor}30` }}
                  />

                  {/* Date Badge */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm mb-3" style={{ backgroundColor: themeColor }}>
                    {item.period}
                  </div>

                  {/* Title & Company */}
                  <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 mb-3">{item.subtitle}</p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.description}</p>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: themeColor }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* EXTRA FEATURE: TECHNICAL SKILLS & CERTIFICATIONS */}
      <div className="mt-14 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-8">
        {/* SKILL PROGRESS SECTION */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="text-lg font-bold text-gray-800">Technical Skills</h4>
          </div>

          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1.5">
                  <span>{skill.name}</span>
                  <span style={{ color: themeColor }}>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, backgroundColor: themeColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS & HONORS */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 004.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 003.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 000 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 00-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 00-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 000-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 003.138-3.138z" />
              </svg>
              <h4 className="text-lg font-bold text-gray-800">Certifications & Honors</h4>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100/60 transition-colors">
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">{cert.title}</h5>
                    <p className="text-[11px] text-gray-500">{cert.issuer}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: themeColor }}>
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500 italic">
              "Dedicated to continuous learning and crafting exceptional digital design experiences."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


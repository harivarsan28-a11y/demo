"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PortfolioSectionProps {
  themeColor: string;
}

interface Project {
  id: number;
  title: string;
  category: "Web App" | "Mobile App" | "AI & Data" | "UI/UX Design";
  subCategory: string;
  image: string;
  description: string;
  fullDetails: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "DataBurst Analytics",
    category: "Web App",
    subCategory: "Dashboard / Data Visualization",
    image: "/project1.jpg",
    description: "Real-time enterprise analytics suite featuring customizable metrics, live user trajectory tracking, and automated data reporting.",
    fullDetails: "DataBurst Analytics is an end-to-end web dashboard built for high-throughput data processing. It aggregates real-time metrics, visualizes traffic conversions, and outputs scheduled reports with granular user permission controls.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://example.com/databurst",
    githubUrl: "https://github.com/example/databurst",
  },
  {
    id: 2,
    title: "Nexus AI Studio",
    category: "AI & Data",
    subCategory: "AI / SaaS Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Generative AI workspace for prompt engineering, workflow automation, and multimodal LLM model orchestration.",
    fullDetails: "Nexus AI Studio provides creators and developers with a visual node editor to chain AI prompts, fine-tune model parameters, and automatically generate production-ready code and asset pipelines.",
    tags: ["React", "Python", "OpenAI API", "FastAPI"],
    liveUrl: "https://example.com/nexus-ai",
    githubUrl: "https://github.com/example/nexus-ai",
  },
  {
    id: 3,
    title: "Aura Luxe E-Commerce",
    category: "Web App",
    subCategory: "E-Commerce / Storefront",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "High-converting luxury storefront with interactive 3D product previews, instant fuzzy search, and seamless checkout flow.",
    fullDetails: "A modern e-commerce application engineered for speed and conversion. Features server-side rendering for instant page loads, interactive 3D canvas product previews, and global multi-currency checkout.",
    tags: ["Next.js", "Stripe", "Three.js", "Zustand"],
    liveUrl: "https://example.com/aura-luxe",
    githubUrl: "https://github.com/example/aura-luxe",
  },
  {
    id: 4,
    title: "Pulse Health Tracker",
    category: "Mobile App",
    subCategory: "iOS & Android Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Biometric monitoring application for workout tracking, wearable device sync, and personalized nutrition planning.",
    fullDetails: "Pulse connects with smartwatch sensors to deliver real-time heart rate analysis, sleep quality scoring, and automated workout recommendations driven by smart machine learning algorithms.",
    tags: ["React Native", "Expo", "GraphQL", "Tailwind"],
    liveUrl: "https://example.com/pulse-health",
    githubUrl: "https://github.com/example/pulse-health",
  },
  {
    id: 5,
    title: "FinVault Web3 Wallet",
    category: "UI/UX Design",
    subCategory: "Crypto & FinTech Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Decentralized finance portal with live crypto market feeds, visual portfolio rebalancing, and instant asset swaps.",
    fullDetails: "FinVault presents a sleek, accessible UI for Web3 asset management. Designed from the ground up to reduce transaction anxiety through clear gas fee estimates, security audits, and visual portfolio charts.",
    tags: ["Figma", "UI/UX", "Design System", "Prototyping"],
    liveUrl: "https://example.com/finvault",
    githubUrl: "https://github.com/example/finvault",
  },
  {
    id: 6,
    title: "CloudScale SaaS Platform",
    category: "Web App",
    subCategory: "Cloud Infrastructure Tool",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: "DevOps cloud management platform offering automated microservice deployments and visual CI/CD pipeline monitoring.",
    fullDetails: "CloudScale simplifies multi-cloud infrastructure orchestration into a clean unified console. Developers can launch container clusters, configure domain routing, and monitor health logs in real time.",
    tags: ["TypeScript", "Node.js", "Docker", "PostgreSQL"],
    liveUrl: "https://example.com/cloudscale",
    githubUrl: "https://github.com/example/cloudscale",
  },
];

const categories = ["All", "Web App", "Mobile App", "AI & Data", "UI/UX Design"];

export default function PortfolioSection({ themeColor }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="p-4 sm:p-8 md:p-14 max-w-5xl mx-auto text-gray-800 mt-2">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 pb-4 mb-6" style={{ borderColor: themeColor }}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Portfolio</h2>
          <p className="text-xs text-gray-500 mt-1">Showcase of featured projects, applications, and creative designs</p>
        </div>
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 md:mt-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                  isActive
                    ? "text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={isActive ? { backgroundColor: themeColor } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group relative rounded-xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
          >
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                unoptimized
              />
              <div className="absolute top-3 left-3">
                <span
                  className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-md shadow-md backdrop-blur-md"
                  style={{ backgroundColor: `${themeColor}EE` }}
                >
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-base group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-medium">{project.subCategory}</p>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 w-full bg-gray-900">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
                unoptimized
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer transition-colors shadow-md"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold text-white px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: themeColor }}
                >
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-gray-400">• {activeModalProject.subCategory}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{activeModalProject.title}</h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {activeModalProject.fullDetails}
              </p>

              {/* Technologies Used */}
              <div className="mt-5">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Technologies & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 pt-4 border-t border-gray-100 items-center">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial text-center px-4 sm:px-5 py-2.5 rounded-lg text-white font-medium text-xs shadow-md transition-all cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: themeColor }}
                  >
                    View Live Project
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial text-center px-4 sm:px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium text-xs shadow-md transition-all cursor-pointer hover:bg-gray-800"
                  >
                    Source Code
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium text-xs cursor-pointer hover:bg-gray-50 sm:ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


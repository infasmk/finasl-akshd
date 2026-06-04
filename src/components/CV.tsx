import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import brand1 from "@/src/assets/projects/1.jpg";
import brand2 from "@/src/assets/projects/2.png";
import brand3 from "@/src/assets/projects/3.jpg";
import brand4 from "@/src/assets/projects/4.jpg";
import brand5 from "@/src/assets/projects/5.png";
import brand6 from "@/src/assets/projects/6.png";
import brand7 from "@/src/assets/projects/7.jpg";
import brand8 from "@/src/assets/projects/8.png";
import brand9 from "@/src/assets/projects/9.jpg";

import { 
  ArrowLeft, Mail, Globe, GraduationCap, 
  Sparkles, MessageCircle, Linkedin
} from "lucide-react";

export default function CV({ onBackToHome }: { onBackToHome: () => void }) {
  // Static Data
  const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "200,000+", label: "Sq.ft Designed" },
    { value: "MENA & EEA", label: "Regional Experience" }
  ];

  const CAREER_TIMELINE = [
     {
      period: "2026 - Present",
      title: "CO-ORDINATOR & RETAIL CONCEPTOAL DESIGNER",
      location: "",
      stats: "120+ Retail Spaces | Core Leader",
    },
    {
      period: "2025",
      title: "RETAIL CONCEPTUAL DESIGNER",
      location: "",
      stats: "",
    },
    {
      period: "2023 - 2024",
      title: "JUNIOR ARCHITECT",
      location: "",
      stats: " ",
    }
  ];

  // BRAND LISTING: Easily swap logos by adding local paths or raw GitHub image URLs to the 'logo' property below.
  const BRANDS = [
    { name: "Adidas", logo: brand1, category: "High-Performance Athletic Retail Environments", type: "RETAIL ENVIRONMENT" },
    { name: "Al Futtaim", logo: brand2, category: "Conglomerate & Premium Commercial Spaces", type: "COMMERCIAL MASTER" },
    { name: "Aldar", logo: brand3, category: "Community Renewal & Urban Regeneration Projects", type: "COMMERCIAL MASTER" },
    { name: "Sephora", logo: brand4, category: "Luxury Cosmetic Boutiques & High-Traffic Retail", type: "RETAIL ENVIRONMENT" },
    { name: "Radisson", logo: brand5, category: "Premium Hospitality & Lounge Renovations", type: "COMMERCIAL MASTER" },
    { name: "ON", logo: brand6, category: "Premium Swiss Technical Performance Stores", type: "RETAIL ENVIRONMENT" },
    { name: "Seiko", logo: brand7, category: "High-Horology Precision Interactive Showrooms", type: "RETAIL ENVIRONMENT" },
    { name: "Wasl", logo: brand8, category: "Iconic Residential Developments & Hospitality", type: "COMMERCIAL MASTER" },
    { name: "La Marquise", logo: brand9, category: "Boutique Fine Jewellery Concept Outlets", type: "RETAIL ENVIRONMENT" },
  ];

  const SKILLS = [
    { name: "AutoCAD", proficiency: 98, type: "Core technical detailing, masterplans, and permit drawing sets." },
    { name: "SketchUp", proficiency: 95, type: "Parametric blocks, rapid volumetric concept design, and structural test fits." },
    { name: "Photoshop", proficiency: 92, type: "Post-rendering material maps, luxury light overlays, and portfolio graphics." },
    { name: "InDesign", proficiency: 90, type: "Premium pitch decks, brand-standards manuals, and architectural proposals." },
    { name: "D5 Render", proficiency: 96, type: "Real-time photorealistic cinematic environment raytracing and light walks." },
    { name: "Vista Pro 360", proficiency: 88, type: "True spatial depth 360 virtual reality panoramic tours for stakeholders." },
    { name: "Lumion", proficiency: 92, type: "Breathtaking natural biome, landscaping, and dynamic weather animations." },
    { name: "Lightroom", proficiency: 85, type: "Architectural color grades, exposure matching, and luxury tone curve controls." }
  ];

  const AI_TOOLS = [
    { name: "Gemini", role: "AI Reasoning & Spatial Logic Parsing" },
    { name: "Flow", role: "Generative Cadence & Form Exploration" },
    { name: "Higgsfield", role: "Spatially Accurate Motion Simulations" },
    { name: "Krea", role: "Ultra-High-Definition Dynamic Texture Upscaling" },
    { name: "Magnific", role: "Fine-Detail Architectural Texture Synthesis" },
    { name: "Vizmaker", role: "Photorealistic Fast Concept Visualization" },
    { name: "Kling", role: "Parametric Architectural Fluid Animations" }
  ];

  return (
    <div className="pt-16 pb-0 min-h-screen text-neutral-800 relative z-10 w-full bg-[#FAF9F5]">
      {/* Visual Background Blueprint System & Fine Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="w-full h-full border-l border-r border-[#C5A059]/20 max-w-7xl mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation & Header Actions */}
        <div className="pb-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <button
            onClick={onBackToHome}
            className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-[#B28B45] uppercase hover:text-neutral-900 transition-colors duration-300 cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>BACK TO GALLERY</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section id="cv-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-12 space-y-6 max-w-4xl">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase font-bold block">
                CREATIVE ARCHITECTURE & DESIGN LEADER
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-extralight text-neutral-900 leading-tight tracking-tight">
               AKASH SUNDHAKAR
              </h1>
              <h2 className="font-mono text-xs md:text-sm tracking-[0.25em] text-neutral-800 uppercase font-light border-l border-[#C5A059] pl-3">
                Architect <span className="text-[#C5A059] mx-2">|</span> Retail Design Specialist <span className="text-[#C5A059] mx-2">|</span> Creative Design Professional
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
              Architect with 3+ years of experience shaping functional and impactful spaces across retail, workplaces, hospitality, residential, and F&B sectors. Passionate about creating concept-driven environments that strengthen brand identity and elevate human experiences.
            </p>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section id="cv-profile" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              01 / CONCEPT BRIEF
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              PROFILE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-neutral-700 font-sans text-base md:text-lg font-light leading-relaxed">
              Architect with 3 years of experience in shaping functional and impactful spaces across interiors, retail, workplaces, residential, and F&B sectors. Passionate about delivering concept-driven, user-centered designs that authentically reflect brand identity while enriching the human experience. Known for a collaborative approach, meticulous attention to detail, and a strong commitment to design excellence through thoughtful detailing and purpose-led work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-white border border-neutral-200/80 hover:border-[#C5A059]/40 hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300"
                >
                  <span className="font-serif text-3xl md:text-4xl text-[#B28B45] block font-light mb-1">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-normal block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="cv-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              02 / CAREER STRUCTURE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="relative border-l border-[#C5A059]/30 pl-6 ml-4 space-y-16">
              {CAREER_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-[#FAF9F5] border-2 border-[#C5A059] rounded-none rotate-45 group-hover:bg-[#C5A059] group-hover:rotate-[135deg] transition-all duration-500 ease-out" />
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="font-mono text-[10px] tracking-widest text-[#B28B45] font-bold block uppercase bg-[#C5A059]/10 px-3 py-1">
                        {item.period}
                      </span>
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#B28B45] uppercase font-bold">
                        {item.stats}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-2xl font-light text-neutral-900 tracking-wide uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS & BRANDS SECTION */}
        <section id="cv-brands" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-neutral-200 mb-24">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              03 / BRAND COLLABORATIONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              CLIENTS & BRANDS
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {BRANDS.map((brand, bIdx) => (
                <div
                  key={bIdx}
                  className="relative group bg-white border border-neutral-200/80 hover:border-[#C5A059]/30 hover:shadow-md hover:shadow-neutral-100 p-6 flex flex-col justify-center items-center h-28 text-center transition-all duration-300 cursor-default overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="z-10 group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        className="max-h-12 max-w-[120px] object-contain select-none pointer-events-none filter grayscale hover:grayscale-0 transition-all duration-300"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-2 text-center">
                        <span className="font-serif text-xs min-h-[14px] font-medium text-neutral-800 uppercase tracking-widest leading-none">
                          {brand.name}
                        </span>
                      </div>
                    )}
                    
                    <div className="relative h-4 overflow-hidden mt-2 px-1">
                      <p className="text-[8px] font-mono tracking-widest text-[#B28B45] uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                        {brand.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBILITIES SECTION */}
        <section id="cv-responsibilities" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
                03.5 / CORE CONTRIBUTIONS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
                RESPONSIBILITIES
              </h2>
            </div>
            
            <div className="pt-8 border-t border-neutral-200/50">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
                ACADEMIC & PROFESSIONAL FOUNDATION
              </span>
              <h3 className="font-serif text-xl text-neutral-900 font-extralight tracking-tight uppercase">
                INTERN - PROFESSIONAL TRAINEE
              </h3>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white border border-neutral-200/80 hover:border-[#C5A059]/30 hover:shadow-lg hover:shadow-neutral-100 p-8 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-6 h-[1px] bg-[#C5A059]/20" />
              <div className="absolute top-0 right-0 w-[1px] h-6 bg-[#C5A059]/20" />
              
              <h4 className="font-mono text-xs tracking-widest text-[#B28B45] font-bold uppercase mb-6 pb-2 border-b border-neutral-100">
                Primary Directives & Architectural Execution
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Completed 200+ retail design projects covering 200,000 sq. + area of spaces for leading brands with varying scales of stores from small scale to flagship stores across the MENA and EEA regions while taking up phases of work from designing to documentation of the project.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Developed design concepts and assisted the team with renderings and drawings for large scale community renewal projects of Al Dar group in Abu Dhabi for their communities on Interior, landscaping and urban solutions.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Conceptualised Offices spaces, F&Bs, Hospitality and villa renovation projects and helped the team through design development.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Delegated works to peers and sub teams based in India and Philippines.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Developed skills like AI based rendering, 3D rendering, 360/VR and real time walkthroughs both at concept stages and execution stages.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200/80 hover:border-[#C5A059]/30 hover:shadow-lg hover:shadow-neutral-100 p-8 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-6 h-[1px] bg-[#C5A059]/20" />
              <div className="absolute top-0 right-0 w-[1px] h-6 bg-[#C5A059]/20" />
              
              <h4 className="font-mono text-xs tracking-widest text-[#B28B45] font-bold uppercase mb-6 pb-2 border-b border-neutral-100">
                Professional Trainee Tenure & Development
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>Understood the work procedure and was exposed to a variety of large scale- scale projects in the retail sector.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>And worked on Residential and Commercial interiors and landscape modelling, renderings, and drawings.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs md:text-[13px] text-neutral-600 font-light leading-relaxed">
                  <span className="text-[#C5A059] font-serif font-bold text-[14px] leading-none mt-1 select-none">&bull;</span>
                  <span>During this period, the knowledge i gained helped me in shaping my thoughts at later stages.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="cv-skills" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              04 / PRODUCTION ENGINE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              DESIGN SOFTWARE
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-neutral-200 p-6 md:p-8 hover:border-[#C5A059]/35 hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#C5A059]" />
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3.5 py-1.5 bg-neutral-50 hover:bg-[#C5A059]/10 border border-neutral-200 hover:border-[#C5A059]/40 transition-all duration-300 flex items-center space-x-2 text-xs font-mono tracking-wider text-neutral-800"
                  >
                    <span className="text-[#C5A059]/80 text-[10px]">✦</span>
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-[9px] text-[#B28B45] font-light">({skill.proficiency}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI TOOLS SECTION */}
        <section id="cv-ai-tools" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              05 / NEXT-GEN IMAGINATION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              AI VISUALIZATION & CREATIVE TOOLS
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-neutral-200 p-6 md:p-8 hover:border-[#C5A059]/35 hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#C5A059]" />
              <div className="flex flex-wrap gap-2.5">
                {AI_TOOLS.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="px-3.5 py-1.5 bg-neutral-50 hover:bg-[#C5A059]/10 border border-neutral-200 hover:border-[#C5A059]/40 transition-all duration-300 flex items-center space-x-2 text-xs font-mono tracking-wider text-neutral-800"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B28B45]" />
                    <span className="font-serif text-xs uppercase tracking-wide font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & LANGUAGES SECTIONS IN SPLIT */}
        <section id="cv-education" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4 font-normal">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              06 / EDUCATION & LINGUISTIC SKILLS
            </span>
            <h2 className="font-serif text-2xl text-neutral-900 font-extralight tracking-tight uppercase">
              CREDENTIALS & LANGUAGES
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="space-y-6 flex flex-col h-full">
              <div className="flex items-center space-x-2.5 pb-2 border-b border-neutral-200">
                <GraduationCap className="w-4 h-4 text-[#B28B45]" />
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#B28B45]">
                  EDUCATION
                </h4>
              </div>

              <div className="flex-1 bg-white border border-neutral-200/80 hover:border-[#C5A059]/30 hover:shadow-lg hover:shadow-neutral-200/50 p-6 flex flex-col justify-center space-y-4 relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#C5A059]" />
                
                <span className="font-mono text-[10px] tracking-widest text-[#B28B45] font-bold">2017 - 2022</span>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-light text-neutral-900 leading-snug">
                    B.Arch. – Architecture
                  </h3>
                  <p className="text-xs font-mono text-[#B28B45] uppercase tracking-widest font-bold">
                    CSOA – Care School of Architecture
                  </p>
                  <p className="text-[10px] text-neutral-500 font-light font-sans">
                    Tiruchirappalli, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <div className="flex items-center space-x-2.5 pb-2 border-b border-neutral-200">
                <Globe className="w-4 h-4 text-[#B28B45]" />
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#B28B45]">
                  LANGUAGES
                </h4>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-white border border-neutral-200/80 p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 h-full">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full rotate-270" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-100" />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-[#C5A059]"
                        strokeDasharray="100, 100"
                        strokeDashoffset="0"
                      />
                    </svg>
                    <span className="font-mono text-xs text-neutral-900 font-bold">100%</span>
                  </div>
                  <span className="font-serif text-xs uppercase tracking-widest text-neutral-900 font-medium">TAMIL</span>
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">Native Proficiency</span>
                </div>

                <div className="bg-white border border-neutral-200/80 p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 h-full">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full rotate-270" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-100" />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-[#C5A059]"
                        strokeDasharray="100, 100"
                        strokeDashoffset="0"
                      />
                    </svg>
                    <span className="font-mono text-xs text-neutral-900 font-bold">100%</span>
                  </div>
                  <span className="font-serif text-xs uppercase tracking-widest text-[#050505] font-medium">ENGLISH</span>
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">Professional Status</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* CONTACT SECTION */}
      <section id="cv-contact" className="w-full bg-[#FAF9F5] border-t border-neutral-200/80 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#C5A059] uppercase block font-bold">
              07 / SECURE THE COLLABORATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 font-extralight tracking-tight uppercase leading-tight">
              THANK YOU , LOOKING FORWARD TO WORK WITH YOU
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Get in touch for flagship retail design collaborations, boutique commercial interiors, or advanced parametric spatial workflows.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[440px] bg-[#FCFCFC] border-2 border-[#EAEAEA] p-6 md:p-7 relative shadow-2xl rounded-xl overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A059]/15 transition-all duration-500" />
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-black/[0.01] rounded-full blur-3xl pointer-events-none group-hover:translate-x-12 group-hover:translate-y-12 transition-all duration-700" />

              <div className="absolute top-3 right-3 flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40 group-hover:bg-[#C5A059] transition-all" />
                <span className="font-mono text-[7px] text-neutral-400 tracking-widest font-bold group-hover:text-neutral-500 transition-colors">STUDIO ID</span>
              </div>

              <div className="border border-neutral-100 rounded-lg p-5 bg-white relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-[#C5A059] font-bold block uppercase bg-[#C5A059]/10 px-2 py-0.5 rounded w-fit">
                      DIRECT INQUIRY
                    </span>
                    <h3 className="font-serif text-xl font-light text-neutral-900 uppercase tracking-wider">
                    AKASH SUNDHAKAR
                    </h3>
                  </div>
                  <div className="border border-[#C5A059]/20 p-1 bg-neutral-50 group-hover:border-[#C5A059]/50 transition-colors">
                    <span className="font-serif text-xs text-[#C5A059] font-bold tracking-widest">AS</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-[11px]">
                  <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">TEL</span>
                    <a href="tel:+971501234567" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors font-semibold">
                      +971 50 123 4567
                    </a>
                  </div>

                  <div className="flex justify-between items-center pb-1">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">EMAIL</span>
                    <a href="mailto:akashsudhakar@gmail.com" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors underline font-semibold">
                      akashsudhakar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <span className="font-mono text-[8px] tracking-widest text-[#B28B45] uppercase font-bold block">
                    CONNECTED PORTALS
                  </span>
                  
                  <div className="flex gap-3 justify-start sm:justify-start">
                    <a 
                      href="https://wa.me/971501234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd59] text-white rounded-lg text-[11px] font-sans font-bold shadow-md shadow-[#25D366]/10 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      title="Connect on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>WHATSAPP</span>
                    </a>

                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 bg-[#0A66C2] hover:bg-[#0855a2] text-white rounded-lg text-[11px] font-sans font-bold shadow-md shadow-[#0A66C2]/15 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-current stroke-none" />
                      <span>LINKEDIN</span>
                    </a>

                    <a 
                      href="mailto:infaazmk@gmail.com" 
                      className="flex items-center gap-2 px-3.5 py-2 bg-[#EA4335] hover:bg-[#d6382a] text-white rounded-lg text-[11px] font-sans font-bold shadow-md shadow-[#EA4335]/15 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      title="Send Email"
                    >
                      <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>EMAIL</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

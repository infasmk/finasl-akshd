import React, { useEffect } from "react";
import { motion } from "motion/react";
import brandLogoAdidas from "../assets/projects/1.jpg";
import brandLogoAlFuttaim from "../assets/projects/2.png";
import brandLogoBueno from "../assets/projects/3.jpg";
import brandLogoRadisson from "../assets/projects/5.png";
import brandLogoON from "../assets/projects/6.png";
import brandLogoSeiko from "../assets/projects/4.jpg";
import brandLogoWasl from "../assets/projects/7.jpg";
import brandLogoY3 from "../assets/projects/8.png";
import brandLogoY33 from "../assets/projects/9.jpg";
import profileImg from "@/src/assets/projects/8.png";
import { 
  ArrowLeft, Mail, Globe, GraduationCap, Sparkles, MessageCircle, Linkedin
} from "lucide-react";

const renderBrandLogo = (name: string) => {
  switch (name) {
    case "Bugatti":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-9 h-6 text-[#E10600] fill-current" viewBox="0 0 40 24">
            <ellipse cx="20" cy="12" rx="19" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="20" y="15" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="currentColor">BUGATTI</text>
          </svg>
          <span className="font-sans text-[7px] font-bold tracking-widest text-neutral-500 uppercase leading-none mt-1">HYPER LUXURY</span>
        </div>
      );
    case "Jacob & Co":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-[#B28B45] fill-none stroke-current" viewBox="0 0 40 40" strokeWidth="1">
            <circle cx="20" cy="20" r="16" />
            <circle cx="20" cy="20" r="13" strokeDasharray="2 3" />
            <path d="M20 8 L20 20 L27 15" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-serif text-[10px] font-bold tracking-[0.25em] text-neutral-900 leading-none mt-1 uppercase">JACOB & CO</span>
        </div>
      );
    case "Mercedes-Benz":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-8 h-8 text-neutral-800 fill-none stroke-current" viewBox="0 0 42 42" strokeWidth="1.2">
            <circle cx="21" cy="21" r="16" />
            <path d="M21 5 L21 21" />
            <path d="M21 21 L8 29" />
            <path d="M21 21 L34 29" />
          </svg>
          <span className="font-sans text-[8px] font-semibold tracking-widest text-neutral-800 uppercase leading-none mt-1">MERCEDES-BENZ</span>
        </div>
      );
    case "Adidas":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-10 h-7 text-black fill-current" viewBox="0 0 40 30">
            <polygon points="6,30 11,30 24,0 19,0" />
            <polygon points="14,30 19,30 32,0 27,0" />
            <polygon points="22,30 27,30 40,0 35,0" />
          </svg>
          <span className="font-sans text-[11px] font-extrabold tracking-tight text-black lowercase leading-none">adidas</span>
        </div>
      );
    case "Al Futtaim":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-8 h-8 text-[#0F559E]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="16" strokeDasharray="4 2" className="opacity-30" />
            <path d="M10 20C10 14 30 14 30 20C30 26 10 26 10 20Z" strokeWidth="1.5" />
            <path d="M20 10C14 10 14 30 20 30C26 30 26 10 20 10Z" strokeWidth="1.5" />
          </svg>
          <span className="font-sans text-[8px] font-black tracking-widest text-[#0F559E] uppercase leading-none mt-1">AL-FUTTAIM</span>
        </div>
      );
    case "Aldar":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-[#A21C26]" viewBox="0 0 40 40" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" className="opacity-90" />
            <rect x="22" y="6" width="12" height="12" />
            <rect x="6" y="22" width="12" height="12" />
            <rect x="22" y="22" width="12" height="12" className="opacity-40" />
          </svg>
          <span className="font-serif text-[10px] font-bold tracking-[0.2em] text-[#A21C26] uppercase leading-none mt-1">ALDAR</span>
        </div>
      );
    case "Sephora":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 40 40">
            <path d="M20 4C14 10 14 20 20 28C24 33 28 35 28 35C28 35 25 28 24 24C22 18 24 10 20 4Z" />
          </svg>
          <span className="font-sans text-[8px] font-semibold tracking-[0.3em] text-black uppercase leading-none mt-1">SEPHORA</span>
        </div>
      );
    case "Radisson":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-10 h-6 text-[#1C6AA6]" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M4 14 C10 6, 30 6, 36 14" strokeWidth="1.2" className="opacity-40" />
            <path d="M8 10 C14 8, 26 8, 32 10" strokeWidth="1.2" />
          </svg>
          <span className="font-serif italic text-[11px] font-bold text-[#1C6AA6] tracking-wide leading-none uppercase">Radisson</span>
          <span className="text-[6px] font-sans font-bold uppercase tracking-[0.2em] text-[#0B3C61]/70 leading-none">HOTELS</span>
        </div>
      );
    case "ON":
      return (
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <div className="flex items-center justify-center space-x-1">
            <div className="flex flex-col justify-between h-[22px] text-black">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 21 A 9 9 0 1 1 17 6" />
              </svg>
              <svg className="w-3.5 h-3.5 -mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M4 21 V10 A 6 6 0 0 1 16 10 V21" />
              </svg>
            </div>
            <span className="font-sans text-[10px] font-bold text-black tracking-[0.15em] uppercase leading-none">ON</span>
          </div>
          <span className="text-[6px] font-mono tracking-widest text-neutral-500 uppercase leading-none">SWISS RUNNING</span>
        </div>
      );
    case "Seiko":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-neutral-800" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="20" cy="20" r="16" />
            <circle cx="20" cy="20" r="13" strokeDasharray="1 3" />
            <line x1="20" y1="20" x2="20" y2="10" strokeWidth="1.5" />
            <line x1="20" y1="20" x2="28" y2="20" />
          </svg>
          <span className="font-serif text-[10px] font-medium tracking-[0.4em] text-neutral-900 uppercase leading-none mt-1 pl-1">SEIKO</span>
        </div>
      );
    case "Wasl":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-[#E29C17]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="8" y="8" width="24" height="24" rx="2" />
            <path d="M12 20 L18 26 L26 14" strokeWidth="2.5" />
          </svg>
          <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-800 uppercase leading-none mt-1">wasl</span>
        </div>
      );
    case "La Marquise":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-[#C59B27]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="20" cy="20" r="15" />
            <circle cx="20" cy="20" r="11" strokeDasharray="2 2" />
            <path d="M20 7 L22 13 L27 12 L24 16 L27 20 L22 19 L20 25 L18 19 L13 20 L16 16 L13 12 L18 13 Z" fill="currentColor" className="opacity-15" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </svg>
          <span className="font-serif text-[7px] font-light tracking-[0.25em] text-[#C59B27] uppercase leading-none mt-1">LA MARQUISE</span>
        </div>
      );
    case "Mumuso":
      return (
        <div className="flex flex-col items-center justify-center space-y-1">
          <svg className="w-7 h-7 text-[#00A859]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 15 V30 H29 V15" />
            <path d="M16 15 C16 11, 24 11, 24 15" />
            <circle cx="17" cy="21" r="1.2" fill="currentColor" />
            <circle cx="23" cy="21" r="1.2" fill="currentColor" />
            <path d="M18 24 Q20 26, 22 24" strokeWidth="1.2" />
          </svg>
          <span className="font-sans text-[8px] font-extrabold tracking-widest text-[#00A859] uppercase leading-none mt-1">MUMUSO</span>
        </div>
      );
    case "Bueno":
      return (
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <svg className="w-7 h-6 text-[#6F4E37]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M10 18 C10 13, 26 13, 26 18 V26 C26 30, 10 30, 10 26 Z M26 18 H29 C31 18, 31 22, 29 24 H26 Z" />
            <path d="M14 9 Q15 12, 14 15 M18 8 Q19 11, 18 14 M22 9 Q23 12, 22 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="font-serif italic text-xs font-semibold tracking-wider text-[#6F4E37] lowercase">bueno</span>
        </div>
      );
    default:
      return <span className="font-serif text-base tracking-wider text-neutral-800 uppercase">{name}</span>;
  }
};

export default function CV({ onBackToHome }: { onBackToHome: () => void }) {
  useEffect(() => {
    // Force body / html background color so that any overscrolling is seamlessly beige
    const originalBg = document.body.style.backgroundColor;
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = "#FAF9F5";
    document.documentElement.style.backgroundColor = "#FAF9F5";
    return () => {
      document.body.style.backgroundColor = originalBg;
      document.documentElement.style.backgroundColor = originalHtmlBg;
    };
  }, []);

  // Static Data
  const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "200,000+", label: "Sq.ft Designed" },
  ];

  const CAREER_TIMELINE = [
    {
      period: "2026 - Present",
      title: "CO-ORDINATOR & RETAIL CONCEPTUAL DESIGNER",
      location: "",
      stats: "",
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
    { name: "", logo: brandLogoAdidas, category: "High-Performance Athletic Retail Environments", type: "RETAIL ENVIRONMENT" },
    { name: "", logo: brandLogoAlFuttaim, category: "Conglomerate & Premium Commercial Spaces", type: "COMMERCIAL MASTER" },
    { name: "", logo: brandLogoBueno, category: "Gourmet Experience & Premium Outlets", type: "F&B CONCEPT" },
    { name: "", logo: brandLogoRadisson, category: "Premium Hospitality & Lounge Renovations", type: "COMMERCIAL MASTER" },
    { name: "", logo: brandLogoON, category: "Premium Swiss Technical Performance Stores", type: "RETAIL ENVIRONMENT" },
    { name: "", logo: brandLogoSeiko, category: "High-Horology Precision Interactive Showrooms", type: "RETAIL ENVIRONMENT" },
    { name: "", logo: brandLogoWasl, category: "Iconic Residential Developments & Hospitality", type: "COMMERCIAL MASTER" },
    { name: "", logo: brandLogoY3, category: "High-End Conceptual Designer Store", type: "RETAIL ENVIRONMENT" },
    { name: "", logo: brandLogoY33, category: "High-End Conceptual Designer Store", type: "RETAIL ENVIRONMENT" },
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
    <div id="cv-root" className="pt-24 pb-0 min-h-screen text-neutral-800 relative z-10 w-full bg-[#FAF9F5]">
      {/* Visual Background Blueprint System & Fine Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="w-full h-full border-l border-r border-[#C5A059]/20 max-w-7xl mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 animate-fade-in">
        
        {/* Navigation & Header Actions */}
        <div className="pb-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <button
            onClick={onBackToHome}
            id="back-to-gallery-btn"
            className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-[#B28B45] uppercase hover:text-neutral-900 transition-colors duration-300 cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>BACK TO GALLERY</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section id="cv-hero" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-8 lg:col-span-9 space-y-4 order-2 md:order-1">
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 leading-none tracking-tight">
                AKASH SUDHAKAR
              </h1>
              <div className="space-y-2">
                <h2 className="font-mono text-[10px] tracking-[0.25em] text-neutral-800 uppercase font-light border-l border-[#C5A059] pl-3">
                  Architect <span className="text-[#C5A059] mx-2">|</span> Retail Design Specialist 
                </h2>
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#B28B45] uppercase font-bold border-l border-[#C5A059] pl-3">
                  PIXEL DESIGN STUDIO
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-3 flex justify-start md:justify-end order-1 md:order-2">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#C5A059]/40 p-1 bg-[#FAF9F5] shadow-xl hover:scale-[1.03] transition-transform duration-500">
              <img
                src={profileImg}
                alt="Akash Sudhakar Profile"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-full border border-neutral-200/50 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section id="cv-profile" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
              PROFILE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-neutral-700 font-sans text-base md:text-lg font-light leading-relaxed">
              Architect with 3 years of experience in shaping functional and impactful spaces across interiors, retail, workplaces, residential, and F&B sectors, collaborating with <strong className="font-semibold text-neutral-900 border-b border-[#C5A059]/30">10+ Global Brands</strong>. Passionate about delivering concept-driven, user-centered designs that authentically reflect brand identity while enriching the human experience. Known for a collaborative approach, meticulous attention to detail, and a strong commitment to design excellence through thoughtful detailing and purpose-led work.
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
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="relative border-l border-[#C5A059]/30 pl-6 ml-4 space-y-10">
              {CAREER_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 bg-[#FAF9F5] border-2 border-[#C5A059] rounded-none rotate-45 group-hover:bg-[#C5A059] group-hover:rotate-[135deg] transition-all duration-500 ease-out z-10" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="font-mono text-[8px] tracking-widest text-[#B28B45] font-bold block uppercase bg-[#C5A059]/10 px-2.5 py-0.5">
                        {item.period}
                      </span>
                      <span className="font-mono text-[7px] tracking-[0.2em] text-[#B28B45] uppercase font-bold">
                        {item.stats}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-[11px] md:text-[13px] font-normal text-neutral-900 tracking-wider uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
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
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
              CLIENTS & BRANDS
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10">
              {BRANDS.map((brand, bIdx) => (
                <div
                  key={bIdx}
                  className="relative group flex flex-col justify-center items-center h-20 text-center cursor-default bg-transparent"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="max-h-12 max-w-[120px] object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-2 text-center h-3">
                    <span className="font-mono text-[7px] tracking-[0.2em] text-[#B28B45] uppercase font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 block">
                      {brand.name}
                    </span>
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
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
                RESPONSIBILITIES
              </h2>
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
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
              DESIGN SOFTWARE
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {SKILLS.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center space-x-2 text-xs font-mono tracking-wider text-neutral-800"
                >
                  <span className="text-[#C5A059] font-bold text-[11px]">✦</span>
                  <span className="font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI TOOLS SECTION */}
        <section id="cv-ai-tools" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 font-extralight tracking-tight uppercase">
              AI VISUALIZATION & CREATIVE TOOLS
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {AI_TOOLS.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center space-x-2 text-xs font-mono tracking-wider text-neutral-800"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B28B45]" />
                  <span className="font-serif text-xs uppercase tracking-wide font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & LANGUAGES SECTIONS IN SPLIT */}
        <section id="cv-education" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-neutral-200 mb-12">
          <div className="lg:col-span-4 font-normal">
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
                
                <span className="font-mono text-[10px] tracking-widest text-[#B28B45] font-bold">2018 - 2023</span>
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
                <div className="bg-white border border-neutral-200/80 p-6 flex flex-col items-center justify-center space-y-2.5 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 h-full">
                  <span className="font-serif text-sm uppercase tracking-widest text-neutral-900 font-semibold">TAMIL</span>
                  <span className="font-mono text-[9px] text-[#B28B45] uppercase tracking-wider font-bold bg-[#B28B45]/5 px-2.5 py-1 rounded">Native Speaker</span>
                </div>

                <div className="bg-white border border-neutral-200/80 p-6 flex flex-col items-center justify-center space-y-2.5 shadow-sm hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-300 h-full">
                  <span className="font-serif text-sm uppercase tracking-widest text-[#050505] font-semibold">ENGLISH</span>
                  <span className="font-mono text-[9px] text-[#B28B45] uppercase tracking-wider font-bold bg-[#B28B45]/5 px-2.5 py-1 rounded">Professional Status</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* CONTACT SECTION — Fluid Full Width with no gap to footer */}
      <section
        id="contact"
        className="relative w-full pt-28 pb-16 md:pt-40 md:pb-24 bg-luxury-dark/30 text-white overflow-hidden border-t border-luxury-border"
      >
        {/* Dynamic light highlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Intro Text Column */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-serif text-[18px] sm:text-xl md:text-[23px] lg:text-2xl text-luxury-text font-light tracking-wider uppercase leading-snug">
                THANK YOU , LOOKING FORWARD TO WORK WITH YOU
              </h2>
            </div>

            {/* Right Direct Studio Contact card */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[440px] bg-[#FCFCFC] border-2 border-[#EAEAEA] p-6 md:p-7 relative shadow-2xl rounded-xl overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500 group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A059]/15 transition-all duration-500" />
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-black/[0.01] rounded-full blur-3xl pointer-events-none group-hover:translate-x-12 group-hover:translate-y-12 transition-all duration-700" />

                {/* Inner Exquisite Card Frame */}
                <div className="border border-neutral-100 rounded-lg p-5 bg-white relative z-10 space-y-6">
                  
                  {/* Header: Brand Identity */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-light text-neutral-900 uppercase tracking-wider">
                        AKASH SUDHAKAR
                      </h3>
                    </div>
                  </div>

                  {/* Core Metadata List (Compact & Clean) */}
                  <div className="space-y-3 pt-2 text-[11px]">
                    {/* Phone detail card */}
                    <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                      <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">TEL</span>
                      <a href="tel:+971525672314" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors font-semibold">
                        +971 52 567 2314
                      </a>
                    </div>

                    {/* Email detail card */}
                    <div className="flex justify-between items-center pb-1">
                      <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">EMAIL</span>
                      <a href="mailto:arakshsudhakar@gmail.com" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors underline font-semibold">
                        arakshsudhakar@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Brand-Colored Connected Portals at Base */}
                  <div className="pt-4 border-t border-neutral-100 space-y-3">
                    <div className="flex gap-4 justify-start">
                      {/* WhatsApp Action */}
                      <a 
                        href="https://wa.me/971525672314" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#25D366] hover:border-[#25D366] rounded-full transition-all duration-300"
                        title="Connect on WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5 stroke-[1.5]" />
                      </a>

                      {/* LinkedIn Action */}
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-[#0A66C2] hover:text-[#0A66C2] hover:border-[#0A66C2] rounded-full transition-all duration-300"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 fill-current" />
                      </a>

                      {/* Email Action */}
                      <a 
                        href="mailto:arakshsudhakar@gmail.com" 
                        className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#EA4335] hover:border-[#EA4335] rounded-full transition-all duration-300"
                        title="Send Email"
                      >
                        <Mail className="w-5 h-5 stroke-[1.5]" />
                      </a>
                    </div>
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

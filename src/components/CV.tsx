import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  ArrowLeft, Download, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, 
  Award, Layers, CheckCircle2, Star, Sparkles, Send, Check, Monitor, Cpu, 
  Layers3, Compass, HardHat, FileText, Smartphone, Laptop, CheckSquare,
  Linkedin, MessageCircle
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 4000);
  };

  const handleDownloadCV = () => {
    setDownloading(true);
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 1000);
  };

  // Static Data
  const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "200,000+", label: "Sq.ft Designed" },
    { value: "MENA & EEA", label: "Regional Experience" }
  ];

  const CAREER_TIMELINE = [
    {
      period: "2024 - PRESENT",
      title: "Senior Retail Architect & Design Lead",
      location: "APAC, MENA & EEA Development Regions",
      stats: "120+ Retail Spaces | Core Leader",
      bullets: [
        "Delivered and executed concept-driven retail layouts for prominent global brands (Adidas, Sephora, ON, Seiko, Mumuso, etc.), managing over 120,000 sq.ft of luxury commercial space.",
        "Engineered real-time rendering pipelines and spatial simulations (utilizing advanced AI, D5 Render, and VR tours), reducing client approval lead times by 35% and enhancing engagement.",
        "Orchestrated cross-functional collaboration and work allocation, delegating and guiding professional architectural production teams in India and the Philippines to ensure consistent execution standards."
      ]
    },
    {
      period: "2023 - 2024",
      title: "Concept Architect & Spatial Designer",
      location: "Abu Dhabi & Dubai, UAE",
      stats: "Community Regeneration | Commercial Masterworks",
      bullets: [
        "Designed comprehensive zoning schemes, landscape layouts, and high-fidelity 3D concepts for Aldar community renewal and urban regeneration programs in Abu Dhabi.",
        "Formulated award-winning designs for premium office environments, boutique hospitality concepts (Radisson), and artisanal F&B projects (Bueno Cafe).",
        "Conducted extensive material research, zoning compliance, and building-permit drawings, translating ambitious branding guidelines into tangible structural masterpieces."
      ]
    },
    {
      period: "2022 - 2023",
      title: "Architectural Designer & Technical Lead",
      location: "Dubai, UAE",
      stats: "200,000+ Sq.ft | AutoCAD & Fine Spatial Detailing",
      bullets: [
        "Developed exhaustive technical drawing sets, construction detailing, and structural test-fits in AutoCAD for high-traffic retail formats under Al Futtaim Group and Wasl Properties.",
        "Coordinated interior and landscape alignment, resolving design clashes between electrical, mechanical, and structural layouts on-site.",
        "Maintained robust brand compliance manuals and design templates, facilitating seamless design transfer and high efficiency in project delivery cycles."
      ]
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
    <div className="pt-24 pb-0 min-h-screen text-neutral-800 relative z-10 w-full bg-[#FAF9F5]">
      {/* Visual Background Blueprint System & Fine Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        <div className="w-full h-full border-l border-r border-[#C5A059]/20 max-w-7xl mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation & Header Actions */}
        <div className="pb-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-20">
          <button
            onClick={onBackToHome}
            className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-[#B28B45] uppercase hover:text-neutral-900 transition-colors duration-300 cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>BACK TO GALLERY</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section id="cv-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Text Intro (Full Width) */}
          <div className="lg:col-span-12 space-y-6 max-w-4xl">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase font-bold block">
                CREATIVE ARCHITECTURE & DESIGN LEADER
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-extralight text-neutral-900 leading-tight tracking-tight">
                AJAY
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
        <section id="cv-profile" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-neutral-200 mb-24">
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

            {/* Dynamic stats layout */}
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
        <section id="cv-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-neutral-200 mb-24">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B28B45] uppercase block font-bold mb-2">
              02 / CAREER STRUCTURE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {/* Timeline container */}
            <div className="relative border-l border-[#C5A059]/30 pl-6 ml-4 space-y-16">
              {CAREER_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline diamond point */}
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
                  className="relative group p-6 flex flex-col justify-center items-center h-28 text-center transition-all duration-300 cursor-default overflow-hidden"
                >
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


        {/* RESPONSIBILITIES & TRAINEE EXPERIENCE SECTION */}
        <section id="cv-responsibilities" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-neutral-200 mb-24">
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
            {/* Responsibilities Block */}
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

            {/* Trainee Block */}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI TOOLS SECTION */}
        <section id="cv-ai-tools" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-neutral-200 mb-24">
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

      </div> {/* Close max-w-7xl early for full-bleed contact section */}

      {/* CONTACT SECTION — Fluid Full Width with no gap to footer */}
       <section
      id="contact"
      className="relative w-full py-12 md:py-16 bg-luxury-dark/30 text-white overflow-hidden border-t border-luxury-border"
    >
      {/* Dynamic light highlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Intro Text Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#C5A059] uppercase block font-bold">
              07 / SECURE THE COLLABORATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-luxury-text font-extralight tracking-tight uppercase leading-tight">
              THANK YOU , LOOKING FORWARD TO WORK WITH YOU
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Get in touch for flagship retail design collaborations, boutique commercial interiors, or advanced parametric spatial workflows.
            </p>
          </div>

          {/* Right Direct Studio Contact card: Compact, Tactile, and Radiant (Bright Luxury Card) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[440px] bg-[#FCFCFC] border-2 border-[#EAEAEA] p-6 md:p-7 relative shadow-2xl rounded-xl overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500 group">
              
              {/* Card Texture Glare & Shimmer Effects */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A059]/15 transition-all duration-500" />
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-black/[0.01] rounded-full blur-3xl pointer-events-none group-hover:translate-x-12 group-hover:translate-y-12 transition-all duration-700" />

              {/* Classic Golden Double Accent Corners (Physical Card Detail) */}
              <div className="absolute top-3 right-3 flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40 group-hover:bg-[#C5A059] transition-all" />
                <span className="font-mono text-[7px] text-neutral-400 tracking-widest font-bold group-hover:text-neutral-500 transition-colors">STUDIO ID</span>
              </div>

              {/* Inner Exquisite Card Frame */}
              <div className="border border-neutral-100 rounded-lg p-5 bg-white relative z-10 space-y-6">
                
                {/* Header: Brand Identity */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-[#C5A059] font-bold block uppercase bg-[#C5A059]/10 px-2 py-0.5 rounded w-fit">
                      DIRECT INQUIRY
                    </span>
                    <h3 className="font-serif text-xl font-light text-neutral-900 uppercase tracking-wider">
                    AKASH SUNDHAKAR
                    </h3>
                  </div>
                  {/* Fine logo graphic */}
                  <div className="border border-[#C5A059]/20 p-1 bg-neutral-50 group-hover:border-[#C5A059]/50 transition-colors">
                    <span className="font-serif text-xs text-[#C5A059] font-bold tracking-widest">AS</span>
                  </div>
                </div>

                {/* Core Metadata List (Compact & Clean) */}
                <div className="space-y-3 pt-2 text-[11px]">
                  
                  {/* Name detail card */}
                  {/* <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">NAME</span>
                    <span className="font-serif text-sm text-neutral-905 font-light tracking-wide uppercase">AJAY</span>
                  </div> */}

                  {/* Phone detail card */}
                  <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">TEL</span>
                    <a href="tel:+971501234567" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors font-semibold">
                      +971 50 123 4567
                    </a>
                  </div>

                  {/* Email detail card */}
                  <div className="flex justify-between items-center pb-1">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">EMAIL</span>
                    <a href="mailto:akashsudhakar@gmail.com" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors underline font-semibold">
                      akashsudhakar@gmail.com
                    </a>
                  </div>
                </div>

                {/* Brand-Colored Connected Portals at Base */}
                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <span className="font-mono text-[8px] tracking-widest text-[#B28B45] uppercase font-bold block">
                    CONNECTED PORTALS
                  </span>
                  
                  <div className="flex gap-4 justify-start">
                    {/* WhatsApp Action */}
                    <a 
                      href="https://wa.me/971501234567" 
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
                      className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#0A66C2] hover:border-[#0A66C2] rounded-full transition-all duration-300"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 fill-current" />
                    </a>

                    {/* Email Action */}
                    <a 
                      href="mailto:akashsudhakar@gmail.com" 
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

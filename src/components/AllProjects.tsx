import { useState, useMemo, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Shield, Award, MapPin, Code, Copy, Check, FolderPlus, UploadCloud } from "lucide-react";
import { PROJECTS, Project } from "../data";

interface AllProjectsProps {
  onBackToHome: () => void;
}

export default function AllProjects({ onBackToHome }: AllProjectsProps) {
  // Filters configuration
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedLocation, setSelectedLocation] = useState<string>("ALL");
  const [inquireProject, setInquireProject] = useState<Project | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null);
  const [fullscreenProject, setFullscreenProject] = useState<Project | null>(null);

  // Keyboard close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFullscreenProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Developer Code Generator States
  const [showDevGuide, setShowDevGuide] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedProject, setCopiedProject] = useState(false);

  // Form states for local source code addition helper
  const [devTitle, setDevTitle] = useState("ARCHITECTURE Sky Mansion");
  const [devSubtitle, setDevSubtitle] = useState("High-Rise Geometric Sculptures");
  const [devLocation, setDevLocation] = useState("Downtown Dubai");
  const [devCategory, setDevCategory] = useState("Hyper-Tower");
  const [devPrice, setDevPrice] = useState("AED 12,000,000");
  const [devPlan, setDevPlan] = useState("70/30");
  const [devFileName, setDevFileName] = useState("sky_mansion.png");

  // Derive ID and variable name dynamically for robust TS compilation
  const devId = useMemo(() => {
    return devTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }, [devTitle]);

  const computedImgVarName = useMemo(() => {
    const cleanId = devId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return cleanId ? cleanId + "Img" : "customProjectImg";
  }, [devId]);

  const handleCopyImport = () => {
    const code = `import ${computedImgVarName} from "./assets/projects/${devFileName}";`;
    navigator.clipboard.writeText(code);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  const handleCopyProject = () => {
    const code = `  {
    id: "${devId || "custom-id"}",
    title: "${devTitle}",
    subtitle: "${devSubtitle}",
    location: "${devLocation}",
    image: ${computedImgVarName},
    category: "${devCategory}",
    startingPrice: "${devPrice}",
    paymentPlan: "${devPlan}",
  },`;
    navigator.clipboard.writeText(code);
    setCopiedProject(true);
    setTimeout(() => setCopiedProject(false), 2000);
  };

  const handleCardTouch = (projectId: string) => {
    setActiveTouchId(activeTouchId === projectId ? null : projectId);
  };

  // Available categories extracted from data
  const categories = useMemo(() => {
    const list = new Set(PROJECTS.map((p) => p.category));
    return ["ALL", ...Array.from(list)];
  }, []);

  // Available locations extracted from data
  const locations = useMemo(() => {
    const list = new Set(PROJECTS.map((p) => {
      if (p.location.includes("Jumeirah Village Circle")) return "Jumeirah Village Circle";
      if (p.location.includes("Business Bay")) return "Business Bay";
      if (p.location.includes("Downtown Dubai")) return "Downtown Dubai";
      if (p.location.includes("Dubai Water Canal")) return "Dubai Water Canal";
      return p.location;
    }));
    return ["ALL", ...Array.from(list)];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCategory = selectedCategory === "ALL" || p.category === selectedCategory;
      const matchLocation = selectedLocation === "ALL" || p.location.includes(selectedLocation);
      return matchCategory && matchLocation;
    });
  }, [selectedCategory, selectedLocation]);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquireProject(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white pt-28 sm:pt-32 md:pt-36 pb-14 relative w-full overflow-x-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Navigation & Header */}
        <div className="mb-14 relative z-30 pointer-events-auto">
          <div className="pb-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-gold uppercase hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>BACK TO HOME</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase font-bold block">
                ARCHITECTURE ARCHITECTURAL ARCHIVE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white uppercase leading-none">
                COMPLETE <span className="font-sans font-semibold text-gold italic">PORTFOLIO</span>
              </h1>
            </div>
            <p className="text-gray-400 font-sans font-light text-sm max-w-md leading-relaxed">
              
            </p>
          </div>
        </div>

        {/* Symmetrical Results Count */}
        <div className="flex justify-between items-center text-xs font-mono tracking-widest text-white/40 uppercase mb-8 border-b border-white/5 pb-4">
          <span>SHOWING {filteredProjects.length} ARCHITECTURAL MASTERWORKS</span>
          <span>DUBAI WORLD-CLASS STANDARDS</span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 space-y-4">
            <p className="font-serif text-2xl font-light text-white/60">NO RESIDENCES OF THIS SPECIFICATION FOUND</p>
            <p className="text-sm font-mono tracking-widest text-[#C5A059]">RESET FILTERS TO RE-EXPLORE</p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSelectedLocation("ALL");
              }}
              className="px-6 py-2 border border-gold text-gold font-mono text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all cursor-pointer mt-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Main Projects Section */}
            {filteredProjects.filter(p => p.category !== "AI Concept").length > 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects
                      .filter(p => p.category !== "AI Concept")
                      .map((project: Project, idx) => {
                        const isActive = activeTouchId === project.id;
                        return (
                          <motion.div
                            layout
                            initial={{
                              opacity: 0,
                              y: 35
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0
                            }}
                            exit={{ opacity: 0, y: 20 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                              duration: 0.6,
                              ease: [0.16, 1, 0.3, 1],
                              delay: (idx % 4) * 0.05
                            }}
                            key={project.id}
                            onClick={() => handleCardTouch(project.id)}
                            className={`border overflow-hidden group flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                              isActive
                                ? "bg-luxury-dark border-gold/50 shadow-2xl scale-[1.01]"
                                : "bg-luxury-dark/95 border-white/5 hover:border-gold/30 shadow-sm"
                            }`}
                          >
                            <div 
                              className="relative w-full h-[140px] min-[480px]:h-[170px] md:h-[200px] overflow-hidden cursor-zoom-in"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFullscreenProject(project);
                              }}
                              title="Click to view fullscreen masterwork"
                            >
                              <img
                                src={project.image}
                                alt={`${project.title}`}
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-cover transition-transform duration-[1.2s] ease-out filter brightness-95 ${
                                  isActive ? "scale-105" : "group-hover:scale-105"
                                }`}
                              />

                              {/* Luxury badge depending on class */}
                              <div className="absolute top-3 right-3 z-20">
                                <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold">
                                  <Shield className="w-3 h-3" />
                                </div>
                              </div>
                            </div>

                            {/* Content details */}
                            <div className="p-3.5 sm:p-5 space-y-3 flex-grow flex flex-col justify-center">
                              <div className="space-y-1">
                                <h3 className={`font-serif text-xs min-[400px]:text-sm sm:text-base font-normal leading-tight transition-colors duration-300 ${
                                  isActive ? "text-gold" : "text-white group-hover:text-gold"
                                }`}>
                                  {project.title}
                                </h3>
                                <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.14em] text-[#B28B45] uppercase font-semibold leading-tight">
                                  {project.subtitle}
                                </p>
                              </div>
                              {project.description && (
                                <p className="font-sans text-[10px] text-gray-400 font-light leading-relaxed line-clamp-3">
                                  {project.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* AI Concept Exploration Section Header */}
            {filteredProjects.filter(p => p.category === "AI Concept").length > 0 && (
              <div className="space-y-6 pt-10 border-t border-white/10">
                <div className="space-y-1.5 text-left">
                  <span className="font-mono text-[9px] tracking-[0.35em] text-gold uppercase font-bold block">
                    PARAMETRIC IMAGINATIONS
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-white uppercase tracking-wider">
                    AI Concept Exploration
                  </h2>
                  <div className="w-16 h-0.5 bg-gold mt-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects
                      .filter(p => p.category === "AI Concept")
                      .map((project: Project, idx) => {
                        const isActive = activeTouchId === project.id;
                        return (
                          <motion.div
                            layout
                            initial={{
                              opacity: 0,
                              y: 35
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0
                            }}
                            exit={{ opacity: 0, y: 20 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                              duration: 0.6,
                              ease: [0.16, 1, 0.3, 1],
                              delay: (idx % 4) * 0.05
                            }}
                            key={project.id}
                            onClick={() => handleCardTouch(project.id)}
                            className={`overflow-hidden group flex flex-col justify-between transition-all duration-500 cursor-pointer bg-transparent border-none ${
                              isActive ? "scale-[1.01]" : ""
                            }`}
                          >
                            <div 
                              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-zoom-in"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFullscreenProject(project);
                              }}
                              title="Click to view fullscreen concept exploration"
                            >
                              <img
                                src={project.image}
                                alt={`${project.title}`}
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-cover transition-transform duration-[1.2s] ease-out filter brightness-95 ${
                                  isActive ? "scale-105" : "group-hover:scale-105"
                                }`}
                              />

                              {/* Award icon badge for concept visual */}
                              <div className="absolute top-3 right-3 z-20">
                                <div className="w-6 h-6 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold">
                                  <Award className="w-3 h-3 animate-pulse" />
                                </div>
                              </div>
                            </div>

                            {/* Content details */}
                            <div className="pt-4 pb-2 space-y-2 flex-grow flex flex-col justify-start">
                              <div className="space-y-1">
                                <h3 className={`font-serif text-sm sm:text-base font-normal leading-tight transition-colors duration-300 ${
                                  isActive ? "text-gold" : "text-white group-hover:text-gold"
                                }`}>
                                  {project.title}
                                </h3>
                                <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.14em] text-[#B28B45] uppercase font-semibold leading-tight">
                                  {project.subtitle}
                                </p>
                              </div>
                              {project.description && (
                                <p className="font-sans text-[10px] text-gray-400 font-light leading-relaxed line-clamp-3">
                                  {project.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Elegant Modal for Inquiries */}
      <AnimatePresence>
        {inquireProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg bg-[#0e0e0e] border border-gold/20 p-8 md:p-10 relative space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-[8px] tracking-[0.3em] text-gold uppercase block">VIP CONSULTATION INQUIRY</span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white uppercase">{inquireProject.title}</h3>
                <p className="font-mono text-[10px] text-white/50 tracking-widest uppercase">{inquireProject.location}</p>
              </div>

              {inquirySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-gold bg-gold/5 flex items-center justify-center mx-auto text-gold animate-bounce">
                    ✓
                  </div>
                  <h4 className="font-serif text-xl text-gold uppercase">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs font-sans text-gray-400 max-w-sm mx-auto">
                    A ARCHITECTURE VIP Portfolio Manager will contact you shortly to present full architectural plans and unit layouts.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">FULL NAME</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 text-xs tracking-wider font-sans text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                      placeholder="e.g. Sir Julian Sterling"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-gold">EMAIL ADDRESS</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-xs tracking-wider font-sans text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                        placeholder="vip@domain.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-gold">TELEPHONE NUMBER</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-xs tracking-wider font-sans text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                        placeholder="+971 50 XXXXXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-3 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setInquireProject(null)}
                      className="px-6 py-3 border border-white/10 hover:border-white/20 text-white/60 hover:text-white bg-transparent transition-all cursor-pointer"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gold text-[#050505] font-bold tracking-widest uppercase border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 cursor-pointer"
                    >
                      TRANSMIT INQUIRY
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant Developer Source Code Import & Snippet Helper Modal */}
      <AnimatePresence>
        {showDevGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-[#0b0b0b] border border-gold/20 p-6 md:p-8 relative grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 max-h-[90vh] overflow-y-auto rounded-none"
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setShowDevGuide(false)}
                  className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer font-serif text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Col 1: Form and Guidelines (lg:col-span-5) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-gold uppercase block font-bold">SOURCE CODE COMPILATION ENGINE</span>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-white uppercase">ADD NEW PROJECTS</h3>
                  <p className="text-xs font-sans text-gray-400">
                    Specify the values below. We will instantly format the exact TypeScript statements to locate and embed local assets.
                  </p>
                </div>

                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                  {/* File Name */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">LOCAL ASSET FILENAME (place in /src/assets/projects/)</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                      value={devFileName}
                      onChange={(e) => setDevFileName(e.target.value)}
                    />
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">PROJECT TITLE</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                      value={devTitle}
                      onChange={(e) => setDevTitle(e.target.value)}
                    />
                  </div>

                  {/* Subtitle */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">SUBTITLE / COLLABORATOR</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                      value={devSubtitle}
                      onChange={(e) => setDevSubtitle(e.target.value)}
                    />
                  </div>

                  {/* Location selection */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">LOCATION</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                      value={devLocation}
                      onChange={(e) => setDevLocation(e.target.value)}
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-gold">CATEGORY CLASS</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                      value={devCategory}
                      onChange={(e) => setDevCategory(e.target.value)}
                    />
                  </div>

                  {/* Starting Price & plan in grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-[#C5A059]">STARTING PRICE</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                        value={devPrice}
                        onChange={(e) => setDevPrice(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-[#C5A059]">PAYMENT PLAN</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/15 px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-gold transition-colors"
                        value={devPlan}
                        onChange={(e) => setDevPlan(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Col 2: Generated Code Blocks (lg:col-span-7) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-white/10 lg:pl-8 pt-6 lg:pt-0">
                <div className="space-y-6 w-full">
                  <span className="font-mono text-[9px] tracking-widest text-[#C5A059] uppercase block font-bold">
                    STEP-BY-STEP COPY GUIDE
                  </span>

                  {/* Step 1: File placement */}
                  <div className="space-y-2 p-4 bg-white/5 border border-white/5 text-[11px] font-sans">
                    <div className="flex items-center space-x-2 text-[#C5A059] font-mono font-bold">
                      <UploadCloud className="w-4 h-4 shrink-0" />
                      <span>STEP 1: UPLOAD LOCAL FILE</span>
                    </div>
                    <p className="text-gray-300 font-light">
                      Place your image file (<code className="text-white bg-black px-1 rounded">.{devFileName.split('.').pop() || "png"}</code>) inside the projects assets directory on GitHub:
                    </p>
                    <code className="block bg-black px-3 py-1.5 rounded font-mono text-[10px] text-gray-200 mt-1 select-all">
                      /src/assets/projects/{devFileName}
                    </code>
                  </div>

                  {/* Step 2: Import Code generate */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <div className="flex items-center space-x-2 text-[#C5A059] font-mono font-bold">
                        <FolderPlus className="w-4 h-4 shrink-0" />
                        <span>STEP 2: ADD TO IMPORTS IN /src/data.ts</span>
                      </div>
                      <button
                        onClick={handleCopyImport}
                        className="text-[9px] font-mono text-gold hover:text-white uppercase tracking-widest flex items-center space-x-1 cursor-pointer focus:outline-none"
                      >
                        {copiedImport ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedImport ? "COPIED" : "COPY IMPORT"}</span>
                      </button>
                    </div>
                    <pre className="p-4 bg-black/80 border border-white/5 text-[10px] font-mono text-gray-200 overflow-x-auto select-all leading-relaxed whitespace-pre-wrap">
                      {`import ${computedImgVarName} from "./assets/projects/${devFileName}";`}
                    </pre>
                  </div>

                  {/* Step 3: TypeScript Array Object generator */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <div className="flex items-center space-x-2 text-[#C5A059] font-mono font-bold">
                        <Code className="w-4 h-4 shrink-0" />
                        <span>STEP 3: APPEND TO PROJECTS ARRAY IN /src/data.ts</span>
                      </div>
                      <button
                        onClick={handleCopyProject}
                        className="text-[9px] font-mono text-gold hover:text-white uppercase tracking-widest flex items-center space-x-1 cursor-pointer focus:outline-none"
                      >
                        {copiedProject ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedProject ? "COPIED" : "COPY CODE BLOCK"}</span>
                      </button>
                    </div>
                    <pre className="p-4 bg-black/80 border border-white/5 text-[10px] font-mono text-gray-200 overflow-x-auto select-all leading-relaxed whitespace-pre-wrap">
{`  {
    id: "${devId || "custom-id"}",
    title: "${devTitle}",
    subtitle: "${devSubtitle}",
    location: "${devLocation}",
    image: ${computedImgVarName || "placeholderImg"},
    category: "${devCategory}",
    startingPrice: "${devPrice}",
    paymentPlan: "${devPlan}",
  },`}
                    </pre>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-end gap-3 font-mono text-xs w-full">
                  <button
                    onClick={() => setShowDevGuide(false)}
                    className="px-8 py-3 bg-gold text-[#050505] font-bold tracking-widest uppercase border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 cursor-pointer"
                  >
                    COMPLETE & CLOSE
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {fullscreenProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#050505]/98 backdrop-blur-md flex flex-col justify-center items-center p-4 cursor-default select-none animate-fade-in"
            onClick={() => setFullscreenProject(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenProject(null);
                }}
                className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-gold hover:text-white uppercase transition-colors pointer-events-auto cursor-pointer"
              >
                <span className="w-6 h-6 flex items-center justify-center border border-gold/40 rounded-full group-hover:border-white transition-colors">&larr;</span>
                <span>BACK TO ARCHIVE</span>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenProject(null);
                }}
                className="text-xs font-mono tracking-widest text-[#9ca3af] hover:text-white transition-colors uppercase border border-white/10 px-3 py-1.5 backdrop-blur bg-black/40 pointer-events-auto cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Main Interactive Zoomable Image container */}
            <div className="max-w-4xl max-h-[70vh] md:max-h-[75vh] w-full flex justify-center items-center relative p-2 pointer-events-none">
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                src={fullscreenProject.image}
                alt={fullscreenProject.title}
                className="max-h-[60vh] md:max-h-[70vh] max-w-full object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Captions Detail Bar at bottom */}
            <div className="absolute bottom-6 md:bottom-10 text-center max-w-xl px-4 space-y-1">
              <h3 className="font-serif text-lg md:text-2xl text-white tracking-widest uppercase mb-1">
                {fullscreenProject.title}
              </h3>
              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#B28B45] uppercase font-bold">
                {fullscreenProject.subtitle} {fullscreenProject.location ? `| ${fullscreenProject.location}` : ''}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

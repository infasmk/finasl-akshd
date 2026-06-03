import { useState, useMemo, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Shield, Award, MapPin, BadgeDollarSign, CalendarDays, Code, Copy, Check, FolderPlus, UploadCloud } from "lucide-react";
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

  // Developer Code Generator States
  const [showDevGuide, setShowDevGuide] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedProject, setCopiedProject] = useState(false);

  // Form states for local source code addition helper
  const [devTitle, setDevTitle] = useState("Binghatti Sky Mansion");
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
    <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24 relative w-full overflow-x-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-14">
          <div className="pb-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="group flex items-center space-x-2.5 text-xs font-mono tracking-widest text-gold uppercase hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>BACK TO HOME</span>
            </button>

            <button
              onClick={() => setShowDevGuide(true)}
              className="group flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-white hover:text-gold uppercase transition-all duration-300 cursor-pointer focus:outline-none border border-white/10 hover:border-gold/30 px-3.5 py-1.5 bg-white/5 rounded-none"
            >
              <Code className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>ADD TO SOURCE CODE HELPER</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase font-bold block">
                BINGHATTI ARCHITECTURAL ARCHIVE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white uppercase leading-none">
                COMPLETE <span className="font-sans font-semibold text-gold italic">PORTFOLIO</span>
              </h1>
            </div>
            <p className="text-gray-400 font-sans font-light text-sm max-w-md leading-relaxed">
              Explore our full collection of iconic residential developments, defining a hyper-luxury standard of living throughout Dubai's prime locations.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: Project, idx) => {
                const isActive = activeTouchId === project.id;
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    layout
                    initial={{
                      opacity: 0,
                      y: 45
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{ opacity: 0, y: 30 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: (idx % 3) * 0.08
                    }}
                    key={project.id}
                    onClick={() => handleCardTouch(project.id)}
                    className={`border overflow-hidden group flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-luxury-dark border-gold/50 shadow-2xl scale-[1.01]"
                        : "bg-luxury-dark/95 border-white/5 hover:border-gold/30"
                    }`}
                  >
                    <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title}`}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-transform duration-[1.2s] ease-out filter brightness-95 ${
                          isActive ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />

                      {/* Luxury badge depending on class */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold">
                          {["bugatti", "jacob", "mercedes", "phantom", "galaxy"].includes(project.id) ? (
                            <Award className="w-4 h-4 animate-pulse" />
                          ) : (
                            <Shield className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content details */}
                    <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className={`font-serif text-xl font-normal transition-colors duration-300 ${
                          isActive ? "text-gold" : "text-white group-hover:text-gold"
                        }`}>
                          {project.title}
                        </h3>
                        <p className="font-mono text-[9px] tracking-widest text-black uppercase font-semibold">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex items-center text-xs text-gray-400 space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                          <span className="font-sans font-light truncate">{project.location}</span>
                        </div>

                        {/* Interactive Spec tags / Action */}
                        <div className="flex gap-2 items-center justify-between pt-2">
                          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">
                            PLAN: {project.paymentPlan}
                          </span>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Avoid triggering the parent touch toggle
                              setInquireProject(project);
                            }}
                            className={`px-4 py-2 font-mono text-[9px] tracking-widest uppercase border bg-transparent transition-all duration-300 cursor-pointer ${
                              isActive ? "border-gold text-gold scale-105" : "border-white/10 hover:border-gold text-white hover:text-gold"
                            }`}
                          >
                            INQUIRE NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
                    A Binghatti VIP Portfolio Manager will contact you shortly to present full architectural plans and unit layouts.
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
                    <label className="text-[9px] font-mono tracking-widest uppercase text-black">SUBTITLE / COLLABORATOR</label>
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
    </div>
  );
}

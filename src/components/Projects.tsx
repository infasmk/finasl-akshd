import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Shield, Award } from "lucide-react";
import { PROJECTS, Project } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Projects({ onViewAllProjects }: { onViewAllProjects?: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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

  const handleCardTouch = (projectId: string) => {
    setActiveTouchId(activeTouchId === projectId ? null : projectId);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full pt-20 pb-28 md:pt-32 md:pb-40 bg-luxury-black text-white border-b border-white/5"
    >
      {/* Absolute floating lights */}
      <div className="absolute top-[20%] right-[-15%] w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-15%] w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header containing title and buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="space-y-4">
          
            <h2 className="font-serif font-semibold text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
              PROJECTS <br className="hidden sm:block" />
              
            </h2>
          
          </div>

          <div className="text-left md:text-right font-mono text-[11px] tracking-widest text-white/50 max-w-xs uppercase">
            
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 md:mb-32"
        >
          {PROJECTS.slice(0, 6).map((project: Project, idx) => {
            const isActive = activeTouchId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 45
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (idx % 3) * 0.08
                }}
                onClick={() => handleCardTouch(project.id)}
                className={`bg-luxury-dark/90 border overflow-hidden group flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "border-gold/50 shadow-2xl shadow-gold/10 scale-[1.03]"
                    : "border-white/5 hover:border-gold/30 hover:scale-[1.03]"
                }`}
              >
                {/* Image Container with Blur Reveal and scaling */}
                <div 
                  className="relative w-full h-[280px] sm:h-[320px] overflow-hidden cursor-zoom-in group/img"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenProject(project);
                  }}
                  title="Click to view fullscreen masterwork"
                >
                  
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-[1.2s] ease-out filter brightness-95 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />

                  {/* Right Luxury Icon for Premium feel */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold opacity-80">
                      {project.id === "bugatti" || project.id === "jacob" ? (
                        <Award className="w-4 h-4 animate-pulse" />
                      ) : (
                        <Shield className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Card details */}
                <div className="p-6 md:p-8">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className={`font-serif text-xl font-normal transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-white group-hover:text-gold"
                      }`}>
                        {project.title}
                      </h3>
                
      {project.description && (
                      <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    </div>
              

      <p className="font-mono text-[10px] tracking-[0.25em] text-[#B28B45] uppercase font-semibold">
                        {project.subtitle}
                      </p>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 md:mt-20">
          <button
            onClick={() => {
              if (onViewAllProjects) {
                onViewAllProjects();
              } else {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-12 py-4.5 font-mono text-xs tracking-[0.25em] uppercase text-white hover:text-luxury-black border border-white/20 hover:border-gold hover:bg-gold transition-all duration-500 rounded-none cursor-pointer inline-flex items-center space-x-3 shadow-xl hover:shadow-gold/10"
          >
            <span>VIEW MORE PROJECTS</span>
            <ArrowUpRight className="w-4.5 h-4.5 text-gold shrink-0 group-hover:text-luxury-black" />
          </button>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {fullscreenProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#050505]/98 backdrop-blur-md flex flex-col justify-center items-center p-4 cursor-default select-none"
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
                <span>BACK TO PROJECTS</span>
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
    </section>
  );
}

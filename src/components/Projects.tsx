import { useRef, useState } from "react";
import { ArrowUpRight, Shield, Award } from "lucide-react";
import { PROJECTS, Project } from "../data";
import { motion } from "motion/react";

export default function Projects({ onViewAllProjects }: { onViewAllProjects?: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null);

  const handleCardTouch = (projectId: string) => {
    setActiveTouchId(activeTouchId === projectId ? null : projectId);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-12 md:py-16 bg-luxury-black text-white border-b border-white/5"
    >
      {/* Absolute floating lights */}
      <div className="absolute top-[20%] right-[-15%] w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-15%] w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header containing title and buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase font-bold block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
              REVOLUTIONARY <br className="hidden sm:block" />
              <span className="font-sans font-semibold text-gold italic tracking-wide">PROJECTS</span>
            </h2>
            <p className="font-sans font-light text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed uppercase tracking-wider">
              Explore our curated selection of retail concept layouts, photorealistic 3D modeling, and premium commercial interior spaces.
            </p>
          </div>

          <div className="text-left md:text-right font-mono text-[11px] tracking-widest text-white/50 max-w-xs uppercase">
            
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden">
                  
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
                  <div className="space-y-1">
                    <h3 className={`font-serif text-xl font-normal transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-white group-hover:text-gold"
                    }`}>
                      {project.title}
                    </h3>
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
        <div className="text-center">
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
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Milestones from "./components/Milestones";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import CV from "./components/CV";
import GoldParticleBackground from "./components/GoldParticleBackground";

export default function App() {
  const [viewState, setViewState] = useState<"home" | "all-projects" | "cv">("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: "home" | "all-projects" | "cv", targetSection?: string) => {
    setViewState(page);
    if (page === "home") {
      setTimeout(() => {
        const elementId = targetSection || "hero";
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className={`min-h-screen ${viewState === "cv" ? "bg-[#FAF9F5] text-neutral-800" : "bg-luxury-black text-white"} font-sans relative selection:bg-gold selection:text-black overflow-x-hidden w-full transition-colors duration-500`}>
      {/* Cinematic Luxury Preloading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-center items-center px-6"
          >
            {/* Ambient gold radial glow behind the loading logo */}
            <div className="absolute w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            
            <div className="text-center space-y-4 max-w-xs relative z-10">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="font-serif tracking-[0.3em] text-3xl font-bold text-gold block text-glow"
              >
                AK
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-gold/40 mx-auto"
              />
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-sans text-[11px] min-[360px]:text-xs md:text-sm tracking-[0.4em] text-white/95 font-light uppercase"
              >
                ARCHITECTURE
              </motion.h2>
              
              {/* Micro bouncing progress indicators */}
              <div className="flex justify-center items-center space-x-1.5 pt-4">
                <span className="w-1.5 h-1.5 bg-gold/30 rounded-full animate-bounce [animation-delay:0s]" />
                <span className="w-1.5 h-1.5 bg-gold/60 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main layout renders with subtle entering opacity */}
      <div className="w-full overflow-x-hidden opacity-100">
        {/* Dynamic Gold Dust background system */}
        <GoldParticleBackground />

        {/* SECTION 1 — NAVBAR */}
        <Navbar currentPage={viewState} onPageChange={handlePageChange} />

        <AnimatePresence mode="wait">
          {viewState === "home" ? (
            <motion.div
              key="homepage-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full relative overflow-x-hidden"
            >
              <main className="w-full relative overflow-x-hidden">
                {/* SECTION 2 — HERO COVER PAGE (fullscreen 100vh) */}
                <Hero />

                {/* SECTION 4 — ABOUT / WHY BINGHATTI */}
                <About />

                {/* SECTION 5 — MILESTONES */}
                <Milestones />

                {/* SECTION 7 — PROJECTS GRID */}
                <Projects onViewAllProjects={() => handlePageChange("all-projects")} />

                {/* SECTION 8 — TIMELINE */}
                <Timeline />

                {/* SECTION 9 — CONTACT / REGISTER */}
                <Contact />
              </main>
            </motion.div>
          ) : viewState === "all-projects" ? (
            <motion.div
              key="all-projects-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full relative overflow-x-hidden"
            >
              <AllProjects onBackToHome={() => handlePageChange("home")} />
            </motion.div>
          ) : (
            <motion.div
              key="cv-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full relative overflow-x-hidden"
            >
              <CV onBackToHome={() => handlePageChange("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


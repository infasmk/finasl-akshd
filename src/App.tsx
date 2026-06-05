import { useState } from "react";
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
    <div className="min-h-screen bg-luxury-black font-sans text-white relative selection:bg-gold selection:text-black overflow-x-hidden w-full">
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


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({
  currentPage,
  onPageChange,
}: {
  currentPage?: string;
  onPageChange?: (page: "home" | "all-projects" | "cv", targetSection?: string) => void;
}) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light-theme");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "cv") {
      if (onPageChange) {
        onPageChange("cv");
      }
      return;
    }
    if (currentPage !== "home" && onPageChange) {
      onPageChange("home", id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isScrolledOrCV = scrollActive || currentPage === "cv";

  return (
    <>
      <header
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "bg-[#050505]/98 py-6 border-b border-white/10"
            : isScrolledOrCV
              ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-gray-100"
              : "bg-transparent py-6 border-b border-white/10"
        }`}
        style={{ color: (isScrolledOrCV && !mobileMenuOpen) ? "#050505" : "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <span
              className={`font-serif tracking-[0.05em] text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold transition-colors duration-300 block ${
                isScrolledOrCV && !mobileMenuOpen ? "header-text-black" : "header-text-white"
              }`}
              style={{ color: isScrolledOrCV && !mobileMenuOpen ? "#050505" : "#ffffff" }}
            >
              AK
            </span>
            <span
              className="text-[8px] font-mono tracking-widest uppercase hidden sm:inline-block transition-colors duration-300 animate-pulse ml-2"
              style={{ color: isScrolledOrCV && !mobileMenuOpen ? "#6b7280" : "rgba(255,255,255,0.6)" }}
            >
            
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { label: "HOME", id: "hero" },
              { label: "ABOUT", id: "about" },
              { label: "PROJECTS", id: "projects" },
              { label: "CV", id: "cv" },
              { label: "CONTACT", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-mono tracking-widest relative py-1 hover:text-gold transition-colors duration-300 group cursor-pointer ${
                  isScrolledOrCV && !mobileMenuOpen ? "header-text-black" : "header-text-white"
                }`}
                style={{ color: isScrolledOrCV && !mobileMenuOpen ? "#050505" : "#ffffff" }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Action Controls */}
          <div className="flex items-center space-x-2.5 md:hidden">
            {/* Quick CV Direct Entry Button for Mobile with Adaptive Contrast Text */}
            <button
              onClick={() => handleNavClick("cv")}
              className={`px-2.5 py-1 text-[10px] font-mono tracking-widest font-bold uppercase rounded border bg-transparent transition-colors duration-300 cursor-pointer flex items-center justify-center ${
                currentPage === "cv"
                  ? "text-gold border-gold"
                  : isScrolledOrCV && !mobileMenuOpen
                    ? "header-text-black hover:text-gold hover:border-gold"
                    : "header-text-white hover:text-gold hover:border-gold"
              }`}
              style={{
                color: currentPage === "cv" ? "#C5A059" : (isScrolledOrCV && !mobileMenuOpen) ? "#050505" : "#ffffff",
                borderColor: currentPage === "cv" ? "#C5A059" : (isScrolledOrCV && !mobileMenuOpen) ? "rgba(5,5,5,0.8)" : "rgba(255,255,255,0.4)"
              }}
              title="Open CV"
            >
              CV
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-1.5 rounded focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 header-text-white" style={{ color: "#ffffff" }} />
              ) : (
                <Menu
                  className={`w-5 h-5 ${isScrolledOrCV && !mobileMenuOpen ? "header-text-black" : "header-text-white"}`}
                  style={{ color: isScrolledOrCV && !mobileMenuOpen ? "#050505" : "#ffffff" }}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center"
            style={{ backgroundColor: "rgba(10, 10, 10, 0.98)" }}
          >
            <nav className="flex flex-col items-center space-y-8 mb-12">
              {[
                { label: "HOME", id: "hero" },
                { label: "ABOUT", id: "about" },
                { label: "PROJECTS", id: "projects" },
                { label: "CV", id: "cv" },
                { label: "CONTACT", id: "contact" },
              ].map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-xl font-serif tracking-widest hover:text-gold transition-colors block py-2"
                  style={{ color: "#ffffff" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[640px] sm:min-h-[700px] md:min-h-0 md:h-screen overflow-hidden flex flex-col justify-center bg-luxury-black text-white"
    >
      {/* Background with Zoom, Fade, and Parallax */}
      <div
        className="absolute inset-0 w-full h-full scale-[1.08]"
        style={{
          transform: `translateY(${scrollY * 0.15}px) scale(${1.08 + scrollY * 0.0003})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600"
          alt="Premium Dubai Skyline Sunset"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none filter brightness-70 contrast-110"
        />
      </div>

      {/* Luxury Dark Gradients Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/30 z-10" />

      {/* Top Floating Particles / Glowing Light Orbs for Aesthetic Feel */}
      <div className="absolute top-[25%] right-[15%] w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse duration-5000" />

      {/* Main Content (Left Aligned) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center z-20 pt-16">
        <div className="max-w-2xl md:max-w-3xl space-y-8">


          {/* Combined Heading + Subheading with Cinematic Stagger */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans text-3xl xs:text-4xl min-[400px]:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none text-white uppercase"
              style={{ color: "#ffffff" }}
            >
              ARCHITECTURE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-xs md:text-sm font-sans font-light text-gray-300 max-w-md leading-relaxed tracking-wider uppercase"
              style={{ color: "#d1d5db" }}
            >
               THAT MOVES PEOPLE.
            </motion.p>
          </div>


        </div>
      </div>


    </section>
  );
}

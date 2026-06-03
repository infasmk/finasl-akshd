import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-36 bg-luxury-black text-white overflow-hidden border-b border-white/5"
    >
      {/* Light highlights in background */}
      <div className="absolute top-[40%] left-[-10%] w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center flex flex-col items-center"
        >
          {/* Small Label */}
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase font-bold block">
            PIONEERING ARCHITECTURE
          </span>

          {/* Main Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            WHY <span className="font-semibold text-gold font-sans italic tracking-wide">BINGHATTI?</span>
          </h2>

          {/* Divider line */}
          <div className="w-16 h-[1.5px] bg-gold" />

          {/* Conceptual description */}
          <div className="space-y-6 text-gray-300 font-sans font-light text-sm md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto text-center">
            <p>
              Binghatti is not merely a developer; it is an avant-garde design house rewriting the lifestyle rules of the world's most dynamic metropolis. With a design philosophy centered around bold, heavy-scale geometric architecture, we craft spaces that serve as timeless sculptural monuments on the Dubai skyline.
            </p>
            <p>
              By combining high-end industrial engineering with bespoke craftsmanship, every residence is customized down to the finest detail. Driven by the relentless pursuit of artistic distinction and strategic positioning, a Binghatti address acts as an appreciating asset, an engineering marvel, and a badge of pure residential triumph.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

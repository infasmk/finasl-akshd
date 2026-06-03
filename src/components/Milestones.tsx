import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { MILESTONES, Milestone as MilestoneType } from "../data";

// Helper component for counting up from 0 to target value
function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out function
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCurrent(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={ref} className="font-serif">
      {formatNumber(current)}
      <span className="text-gold font-sans font-light">{suffix}</span>
    </span>
  );
}

export default function Milestones() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 bg-luxury-dark text-white overflow-hidden border-b border-white/5"
    >
      {/* Background graphic elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute top-[50%] right-[5%] w-80 h-80 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.35em] text-gold uppercase"
          >
            SOCIETAL METRICS & SOLID PROOFS
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-light tracking-[0.1em] text-white uppercase"
          >
            MILESTONES
          </motion.h2>

          <div className="w-12 h-0.5 bg-gold mx-auto mt-2" />
        </div>

        {/* 3 Animated Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {MILESTONES.map((milestone: MilestoneType, index: number) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20px 0px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group space-y-2 p-5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-gold/30 transition-all duration-500 rounded-none relative"
            >
              {/* Corner Accent for luxury feel */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40 group-hover:border-gold transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40 group-hover:border-gold transition-colors" />

              {/* Number Counter */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white select-none">
                <CountingNumber value={milestone.number} suffix={milestone.suffix} />
              </div>

              {/* Label */}
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors uppercase pt-2">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

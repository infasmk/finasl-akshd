import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant incremental loading progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Quadratic random increments for luxury aesthetic pacing
        const remaining = 100 - prev;
        const speed = Math.max(2, Math.floor(remaining * 0.15));
        return Math.min(prev + speed, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-luxury-black z-50 flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Absolute faint background graphic glow */}
      <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main typographic container */}
      <div className="text-center relative z-10 space-y-8 px-6">
        
        {/* Cinematic Logo Animation */}
        <motion.div
          initial={{ opacity: 0, tracking: "[0.1em]", scale: 0.95 }}
          animate={{ opacity: 1, tracking: "[0.4em]", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center justify-center space-x-3"
        >
          <span className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.4em] text-white">
            BINGHATTI
          </span>
          <motion.span
            animate={{ scale: [1, 1.8, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-2.5 h-2.5 bg-gold rounded-full"
          />
        </motion.div>

        {/* Dynamic sub-label and progress index */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-mono text-[9px] tracking-[0.35em] uppercase text-white"
          >
            THE ART OF ELITE LIVING &bull; DUBAI
          </motion.p>

          {/* Loading progress bar */}
          <div className="w-48 sm:w-64 h-[1px] bg-white/10 mx-auto relative overflow-hidden">
            <motion.div
              style={{ width: `${progress}%` }}
              className="absolute left-0 top-0 h-full bg-gold transition-all duration-300 ease-out shadow-sm shadow-gold"
            />
          </div>

          {/* Progress Percent */}
          <p className="font-mono text-[10px] text-gold tracking-[0.2em] font-semibold">
            {progress}%
          </p>
        </div>

      </div>

      {/* Bottom licensing footer */}
      <div className="absolute bottom-10 font-mono text-[8px] tracking-widest text-white/25 uppercase">
        ARCHITECTURAL INITIATIVES DIVISION
      </div>
    </div>
  );
}

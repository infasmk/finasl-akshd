import { motion } from "motion/react";

export default function Timeline() {
  const CAREER_TIMELINE = [
    {
      period: "2026 - Present",
      title: "CO-ORDINATOR & RETAIL CONCEPTOAL DESIGNER",
      location: "",
      stats: "",
    },
    {
      period: "2025",
      title: "RETAIL CONCEPTUAL DESIGNER",
      location: "",
      stats: "",
    },
    {
      period: "2023 - 2024",
      title: "JUNIOR ARCHITECT",
      location: "",
      stats: " ",
    }
  ];

  return (
    <section
      id="timeline"
      className="relative w-full pt-28 pb-24 md:pt-40 md:pb-36 text-neutral-800 z-10 bg-[#FAF9F5] border-t border-neutral-200/60 overflow-hidden"
    >
      {/* Visual Background Blueprint System & Fine Grid Lines (same as CV) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT AREA: Heading (matching CV presentation) */}
          <div className="lg:col-span-4">
           
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 font-extralight tracking-tight uppercase">
              TIMELINE
            </h2>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#B28B45] uppercase mt-2 font-bold">
              PIXEL DESIGN STUDIO
            </p>
          </div>

          {/* RIGHT AREA: Chronological track */}
          <div className="lg:col-span-8 space-y-3">
            {/* Timeline container with vertical gold line path */}
            <div className="relative border-l border-[#C5A059]/35 pl-6 ml-4 space-y-6">
              {CAREER_TIMELINE.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group "
                >
                  {/* Timeline diamond point (matching CV design) */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 bg-[#FAF9F5] border-2 border-[#C5A059] rounded-none rotate-45 group-hover:bg-[#C5A059] group-hover:rotate-[135deg] transition-all duration-500 ease-out z-10" />
                  
                  <div className="space-y-1">
                    {/* Period and Stats header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[8px] tracking-widest text-[#B28B45] font-bold block uppercase bg-[#C5A059]/10 px-2.5 py-0.5">
                        {item.period}
                      </span>
                      <span className="font-mono text-[7px] tracking-[0.2em] text-[#B28B45] uppercase font-bold">
                        {item.stats}
                      </span>
                    </div>

                    {/* Detailed titles */}
                    <div className="pt-0.5">
                      <h4 className="font-serif text-[11px] md:text-[13px] font-normal text-neutral-900 tracking-wider uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
                        {item.location}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

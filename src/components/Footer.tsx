import { useState, useEffect } from "react";
import { Instagram, Youtube, Linkedin, Globe, ShieldCheck, Mail } from "lucide-react";

export default function Footer({
  currentPage,
  onPageChange,
}: {
  currentPage?: string;
  onPageChange?: (page: "home" | "all-projects" | "cv", targetSection?: string) => void;
}) {
  const [scrollY, setScrollY] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialIcons = [
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "Youtube" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Globe className="w-4 h-4" />, href: "#", label: "Official Web" },
  ];

  const handleNavClick = (id: string) => {
    if (id === "cv") {
      if (onPageChange) {
        onPageChange("cv");
      }
      return;
    }
    if (currentPage !== "home" && onPageChange) {
      onPageChange("home", id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={`relative w-full bg-luxury-black text-white overflow-hidden border-t border-white/5 transition-all duration-300 ${
      currentPage === "cv" ? "pt-12 pb-16" : "py-24"
    }`}>
      
      {/* Parallax Panoramic Architect Render Background */}
      <div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] opacity-15 pointer-events-none mix-blend-color-dodge select-none filter grayscale contrast-125"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay gradients for contrast and readability */}
      <div className="absolute inset-0 bg-black/85 z-0" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-16 relative z-10">
        
        {/* Newsletter Subscription requested */}
        <div className="max-w-md mx-auto space-y-6 bg-luxury-gray/30 border border-white/10 p-6 md:p-8 backdrop-blur-md">
          <div className="space-y-2">
            <span className="font-mono text-[8px] tracking-[0.35em] text-gold uppercase font-bold block">
              PRIVÉ CLUB NEWSLETTER
            </span>
            <h3 className="font-serif text-sm tracking-[0.15em] text-white/95 uppercase font-semibold">
              SUBSCRIBE FOR VIP PRIORITIES & UPDATES
            </h3>
            <p className="font-sans text-[10px] text-white/50 leading-relaxed font-light tracking-wide uppercase">
              Join our exclusive listings queue for the world's most desired branded home investments.
            </p>
          </div>
          
          {!subscribed ? (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-2 mt-4"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/50" />
                <input 
                  required
                  type="email" 
                  placeholder="ENTER YOUR EMAIL FOR VIP UPDATES"
                  className="w-full pl-9 pr-4 py-3 bg-black/80 text-white placeholder-white/25 border border-white/10 focus:border-gold rounded-none text-[9px] font-mono tracking-widest uppercase outline-none transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 font-mono text-[9px] tracking-widest uppercase font-semibold text-black bg-gold hover:bg-gold-hover hover:scale-[1.02] duration-300 transition-all cursor-pointer whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          ) : (
            <div className="text-center space-y-2 py-4 border border-gold/20 bg-gold/5 p-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase block">
                MEMBERSHIP GRANTED &bull; VIP ACCESS READY
              </span>
              <p className="font-sans text-[11px] text-white/90 leading-relaxed font-light">
                Your VIP subscription request has been received under secure protocol. Expect priority brand updates in your inbox shortly.
              </p>
            </div>
          )}
        </div>

        {/* Logo area - center */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <span className="font-serif tracking-[0.45em] text-2xl sm:text-3xl font-bold text-white group-hover:text-gold transition-colors duration-300">
              BINGHATTI
            </span>
            <span className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-all duration-300"></span>
          </button>
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase text-white/40">
            Art of Properties &bull; Dubai, UAE
          </span>
        </div>

        {/* Dynamic navigational links */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-2">
          {[
            { label: "HOME", id: "hero" },
            { label: "ABOUT", id: "about" },
            { label: "PROJECTS", id: "projects" },
            { label: "CV", id: "cv" },
            { label: "CONTACT", id: "contact" },
          ].map((anchor) => (
            <button
              key={anchor.id}
              onClick={() => handleNavClick(anchor.id)}
              className="font-mono text-[9px] tracking-[0.2em] text-white/50 hover:text-gold transition-colors block uppercase cursor-pointer"
            >
              {anchor.label}
            </button>
          ))}
        </div>

        {/* Accent Divider line */}
        <div className="w-16 h-px bg-white/10 mx-auto" />

        {/* Social Icons row */}
        <div className="flex justify-center items-center space-x-6">
          {socialIcons.map((soc, idx) => (
            <a
              key={idx}
              href={soc.href}
              aria-label={soc.label}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.01] hover:bg-gold hover:text-black hover:border-gold text-white/60 flex items-center justify-center transition-all duration-300"
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Footer Subtext (Branding compliance & licensing details) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-white/30 text-[9px] font-mono tracking-wider border-t border-white/5 space-y-3 md:space-y-0 text-center md:text-left">
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold/60 shrink-0" />
            <span>Appointed Licensed Builder Broker (Dubai Land Dept. RERA #5103)</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} BINGHATTI LANDINGS. ALL REAL ESTATE ASSETS SUBJECT TO REGISTRATION OFFERS.
          </p>
        </div>

      </div>
    </footer>
  );
}

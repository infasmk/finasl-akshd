import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-12 md:py-16 bg-luxury-dark/30 text-white overflow-hidden border-t border-luxury-border"
    >
      {/* Dynamic light highlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Intro Text Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#C5A059] uppercase block font-bold">
              07 / SECURE THE COLLABORATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-luxury-text font-extralight tracking-tight uppercase leading-tight">
              THANK YOU , LOOKING FORWARD TO WORK WITH YOU
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Get in touch for flagship retail design collaborations, boutique commercial interiors, or advanced parametric spatial workflows.
            </p>
          </div>

          {/* Right Direct Studio Contact card: Compact, Tactile, and Radiant (Bright Luxury Card) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[440px] bg-[#FCFCFC] border-2 border-[#EAEAEA] p-6 md:p-7 relative shadow-2xl rounded-xl overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500 group">
              
              {/* Card Texture Glare & Shimmer Effects */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A059]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A059]/15 transition-all duration-500" />
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-black/[0.01] rounded-full blur-3xl pointer-events-none group-hover:translate-x-12 group-hover:translate-y-12 transition-all duration-700" />

              {/* Classic Golden Double Accent Corners (Physical Card Detail) */}
              <div className="absolute top-3 right-3 flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40 group-hover:bg-[#C5A059] transition-all" />
                <span className="font-mono text-[7px] text-neutral-400 tracking-widest font-bold group-hover:text-neutral-500 transition-colors">STUDIO ID</span>
              </div>

              {/* Inner Exquisite Card Frame */}
              <div className="border border-neutral-100 rounded-lg p-5 bg-white relative z-10 space-y-6">
                
                {/* Header: Brand Identity */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-[#C5A059] font-bold block uppercase bg-[#C5A059]/10 px-2 py-0.5 rounded w-fit">
                      DIRECT INQUIRY
                    </span>
                    <h3 className="font-serif text-xl font-light text-neutral-900 uppercase tracking-wider">
                    AKASH SUNDHAKAR
                    </h3>
                  </div>
                  {/* Fine logo graphic */}
                  <div className="border border-[#C5A059]/20 p-1 bg-neutral-50 group-hover:border-[#C5A059]/50 transition-colors">
                    <span className="font-serif text-xs text-[#C5A059] font-bold tracking-widest">AS</span>
                  </div>
                </div>

                {/* Core Metadata List (Compact & Clean) */}
                <div className="space-y-3 pt-2 text-[11px]">
                  
                  {/* Name detail card */}
                  {/* <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">NAME</span>
                    <span className="font-serif text-sm text-neutral-905 font-light tracking-wide uppercase">AJAY</span>
                  </div> */}

                  {/* Phone detail card */}
                  <div className="flex justify-between items-center pb-2.5 border-b border-neutral-100">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">TEL</span>
                    <a href="tel:+971501234567" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors font-semibold">
                      +971 50 123 4567
                    </a>
                  </div>

                  {/* Email detail card */}
                  <div className="flex justify-between items-center pb-1">
                    <span className="font-mono text-[9px] tracking-widest text-[#B28B45] uppercase font-semibold">EMAIL</span>
                    <a href="mailto:akashsudhakar@gmail.com" className="font-mono text-xs text-neutral-800 hover:text-[#C5A059] transition-colors underline font-semibold">
                      akashsudhakar@gmail.com
                    </a>
                  </div>
                </div>

                {/* Brand-Colored Connected Portals at Base */}
                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <span className="font-mono text-[8px] tracking-widest text-[#B28B45] uppercase font-bold block">
                    CONNECTED PORTALS
                  </span>
                  
                  <div className="flex gap-4 justify-start">
                    {/* WhatsApp Action */}
                    <a 
                      href="https://wa.me/971501234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#25D366] hover:border-[#25D366] rounded-full transition-all duration-300"
                      title="Connect on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 stroke-[1.5]" />
                    </a>

                    {/* LinkedIn Action */}
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#0A66C2] hover:border-[#0A66C2] rounded-full transition-all duration-300"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 fill-current" />
                    </a>

                    {/* Email Action */}
                    <a 
                      href="mailto:akashsudhakar@gmail.com" 
                      className="flex items-center justify-center w-10 h-10 bg-transparent border border-neutral-200 text-neutral-600 hover:text-[#EA4335] hover:border-[#EA4335] rounded-full transition-all duration-300"
                      title="Send Email"
                    >
                      <Mail className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Move, Compass, Sparkles, ZoomIn, ZoomOut, Play, SquareTerminal, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

interface TourRoom {
  id: string;
  name: string;
  project: string;
  backgroundUrl: string;
  description: string;
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    title: string;
    info: string;
  }[];
}

const TOUR_ROOMS: TourRoom[] = [
  {
    id: "penthouse",
    name: "ASTRONOMICAL GRAND SALON",
    project: "BINGHATTI JACOB & CO RESIDENCES",
    backgroundUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
    description: "Soaring 100+ stories above the clouds, featuring crystal chandeliers, Jacob & Co astronomical accents, and double-height custom curved glazing.",
    hotspots: [
      { x: 35, y: 42, title: "Diamond Chandelier", info: "Handmade Murano glass intertwined safely with 1,200 miniature diamond-cut floating crystals." },
      { x: 68, y: 55, title: "Celestial Watch Pillar", info: "A custom astronomical clockwork mechanical installation aligned to Dubai skies." },
      { x: 50, y: 70, title: "Infinitum Quartz Floor", info: "Sourced exclusively from Italian quarry beds with continuous gold vein alignment." }
    ]
  },
  {
    id: "bedroom",
    name: "MERCEDES-BENZ MASTER SUITE",
    project: "BINGHATTI MERCEDES-BENZ PLACES",
    backgroundUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80",
    description: "Automotive high-performance luxury meets residential architecture. Flowing aerodynamic ceilings, carbon-fibre weaves, and panoramic skyline vistas.",
    hotspots: [
      { x: 25, y: 50, title: "Sensual Purity Styling Bed", info: "Curved headboard wrapped in exclusive Mercedes-Benz Maybach Nappa leather hides." },
      { x: 75, y: 45, title: "Smart Glass Partition", info: "Swaps from crystal-clear transparency to satin obsidian privacy shield on demand." }
    ]
  },
  {
    id: "spa",
    name: "HYPERCAR WELLNESS CABIN",
    project: "BUGATTI RESIDENCES BY BINGHATTI",
    backgroundUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80",
    description: "Inspired by Molsheim, France. Featuring French Riviera-themed private pools, bespoke carbon water jet therapies, and a private sand-beach sky terrace.",
    hotspots: [
      { x: 45, y: 60, title: "Chiron Therapy Basin", info: "Integrated hydrotherapy nozzles calibrated to massage muscle group zones specifically." },
      { x: 80, y: 40, title: "Vitesse Marine Terrace", info: "Retractable canopy matching the structural lines of high-speed yachts." }
    ]
  }
];

export default function VirtualTours() {
  const [activeRoom, setActiveRoom] = useState<TourRoom>(TOUR_ROOMS[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [panX, setPanX] = useState(50); // percentage-like panning value
  const [panY, setPanY] = useState(50);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioPlay, setAudioPlay] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; info: string } | null>(null);
  const [showVRModal, setShowVRModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startDragRef = useRef({ x: 0, y: 0, panX: 50, panY: 50 });

  // Handle Drag / Pan controls inside the virtual environment
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startDragRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX,
      panY
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startDragRef.current.x;
    const dy = e.clientY - startDragRef.current.y;
    
    // Scale dragging speed for smooth tactile response
    const speedFactor = 0.12;
    let nextPanX = startDragRef.current.panX - dx * speedFactor;
    let nextPanY = startDragRef.current.panY - dy * speedFactor;

    // Boundary constraints for panoramic backdrops
    nextPanX = Math.max(10, Math.min(90, nextPanX));
    nextPanY = Math.max(15, Math.min(85, nextPanY));

    setPanX(nextPanX);
    setPanY(nextPanY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Keyboard controls helper
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setPanX((prev) => Math.max(10, prev - 4));
      if (e.key === "ArrowRight") setPanX((prev) => Math.min(90, prev + 4));
      if (e.key === "ArrowUp") setPanY((prev) => Math.max(15, prev - 3));
      if (e.key === "ArrowDown") setPanY((prev) => Math.min(85, prev + 3));
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);

  const changeRoom = (room: TourRoom) => {
    setActiveRoom(room);
    setPanX(50);
    setPanY(50);
    setZoom(1);
    setActiveHotspot(null);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="virtual-tours"
      className="relative w-full py-24 md:py-32 bg-luxury-black text-white border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase font-bold block">
              IMMERSIVE 360 REALITY EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white leading-tight uppercase">
              COSMIC REALITY <br />
              <span className="text-gold font-sans font-semibold italic tracking-wide">VIRTUAL RESIDENCE TOURS</span>
            </h2>
            <p className="text-gray-400 font-sans font-light text-xs md:text-sm leading-relaxed">
              Step inside our hyper-refined penthouses and branded private salons through interactive cinematic 360-degree virtual layouts. Drag, explore, and teleport through architectural masterpieces before delivery.
            </p>
          </div>

          {/* Quick Stats of the tour */}
          <div className="flex items-center space-x-6 shrink-0 bg-luxury-gray/30 border border-white/5 p-4 rounded-none">
            <div className="text-center md:text-left">
              <span className="block font-mono text-xs text-gold font-bold">12K SHARP</span>
              <span className="block font-sans text-[9px] tracking-wider text-white/50 uppercase">Renders Integration</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-center md:text-left">
              <span className="block font-mono text-xs text-gold font-bold">LATENCY FREE</span>
              <span className="block font-sans text-[9px] tracking-wider text-white/50 uppercase">WebGL Acceleration</span>
            </div>
          </div>
        </div>

        {/* Dynamic 360 VR Simulator Studio Viewport */}
        <div
          ref={containerRef}
          className={`relative border border-white/15 overflow-hidden flex flex-col justify-between ${
            isFullscreen ? "fixed inset-0 z-50 h-screen w-screen bg-black" : "w-full h-[380px] sm:h-[500px] md:h-[620px] bg-black"
          }`}
        >
          {/* Active 360 Viewport Canvas Backdrop */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
              backgroundImage: `url(${activeRoom.backgroundUrl})`,
              backgroundPosition: `${panX}% ${panY}%`,
              backgroundSize: `${300 * zoom}%`,
              transition: isDragging ? "none" : "background-position 0.6s cubic-bezier(0.25, 1, 0.5, 1), background-size 0.4s ease-out",
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
          >
            {/* Soft lighting gold overlay for cinematic interior effect */}
            <div className="absolute inset-0 bg-gold/5 pointer-events-none mix-blend-color-burn" />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />

            {/* Simulated Hotspots Overlaid on the Coordinates mapped relative to Pan offsets */}
            {activeRoom.hotspots.map((hotspot, idx) => {
              // Simple proportional coordinates computation to position node in the panned space
              const styleX = `${((hotspot.x / 100) * 100 - 50) * zoom + 50}%`;
              const styleY = `${((hotspot.y / 100) * 100 - 50) * zoom + 50}%`;

              return (
                <div
                  key={`hotspot-${idx}`}
                  style={{ left: styleX, top: styleY }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot({ title: hotspot.title, info: hotspot.info });
                    }}
                    className="relative w-7 h-7 rounded-full bg-gold text-black border border-white flex items-center justify-center font-bold hover:scale-120 duration-300 transition-transform cursor-pointer shadow-xl animate-pulse"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {/* Ring pulsing decoration */}
                    <span className="absolute inset-[-4px] border border-gold rounded-full animate-ping pointer-events-none opacity-40" />
                  </button>
                </div>
              );
            })}

            {/* Core dragging guide ornament overlay in center */}
            {!isDragging && (
              <div className="pointer-events-none absolute bottom-1/3 left-1/2 -translate-x-1/2 bg-black/60 border border-gold/40 px-4 py-2 flex items-center space-x-2 rounded-full shadow-lg">
                <Move className="w-4 h-4 text-gold animate-bounce" />
                <span className="font-mono text-[9px] tracking-widest text-white/90">
                  DRAG & PAN TO EXPLORE SALON
                </span>
              </div>
            )}
          </div>

          {/* TOP CONTROLS AND HUD */}
          <div className="relative z-10 w-full p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent flex flex-wrap gap-4 items-start justify-between">
            {/* Room metadata HUD */}
            <div className="space-y-1 bg-black/45 p-2 sm:p-3 border border-white/5 backdrop-blur-md max-w-[220px] sm:max-w-xs">
              <span className="font-mono text-[8px] tracking-widest text-gold block">
                {activeRoom.project}
              </span>
              <h3 className="font-serif text-xs sm:text-base md:text-xl font-bold text-white tracking-wider truncate">
                {activeRoom.name}
              </h3>
              <p className="font-mono text-[8px] text-white/50 tracking-widest uppercase">
                COORDINATES: X: {Math.round(panX)} &bull; Y: {Math.round(panY)}
              </p>
            </div>

            {/* Quick interactive utility hub */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Zoom buttons */}
              <button
                onClick={() => setZoom((z) => Math.min(1.8, z + 0.25))}
                className="w-9 h-9 border border-white/10 bg-black/70 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                className="w-9 h-9 border border-white/10 bg-black/70 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {/* Simulated Lounge Music / Ambient Space Sound Audio */}
              <button
                onClick={() => setAudioPlay(!audioPlay)}
                className={`w-9 h-9 border border-white/10 flex items-center justify-center transition-all cursor-pointer ${
                  audioPlay ? "bg-gold text-black border-gold" : "bg-black/70 text-white hover:text-gold"
                }`}
                title={audioPlay ? "Mute Ambient Lounge Music" : "Play Ambient Lounge Music"}
              >
                {audioPlay ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Fullscreen button */}
              <button
                onClick={toggleFullscreen}
                className="w-9 h-9 border border-white/10 bg-black/70 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors cursor-pointer"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* MIDDLE HUD OVERLAYS (Shown when user fires hotspot details) */}
          <AnimatePresence>
            {activeHotspot && (
              <div className="mx-6 relative z-10 self-center max-w-sm bg-black/95 border-l-2 border-gold p-5 backdrop-blur-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-sm tracking-widest text-gold uppercase font-bold">
                    {activeHotspot.title}
                  </h4>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-white/40 hover:text-white text-xs font-mono cursor-pointer"
                  >
                    [CLOSE]
                  </button>
                </div>
                <p className="font-sans text-xs text-white/80 leading-relaxed font-light">
                  {activeHotspot.info}
                </p>
              </div>
            )}
          </AnimatePresence>

          {/* BOTTOM CONTROLS & SELECTION CAROUSEL */}
          <div className="relative z-10 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent space-y-4">
            
            {/* Descriptions & quick details */}
            <div className="max-w-2xl bg-black/30 p-3 pointer-events-none rounded-none border border-white/5">
              <p className="font-sans text-[11px] leading-relaxed text-white/80 font-light tracking-wide">
                {activeRoom.description}
              </p>
            </div>

            {/* Room presets array container */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-white/5">
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
                {TOUR_ROOMS.map((room) => {
                  const isSelected = activeRoom.id === room.id;
                  return (
                    <button
                      key={room.id}
                      onClick={() => changeRoom(room)}
                      className={`px-4 py-2 shrink-0 font-mono text-[9px] tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-gold text-black border-2 border-gold font-bold"
                          : "bg-black/60 text-white/70 border border-white/10 hover:border-gold hover:text-white"
                      }`}
                    >
                      {room.name.split(" ")[0]} SUITE
                    </button>
                  );
                })}
              </div>

              {/* Call-to-action button requested by the user */}
              <button
                onClick={() => {
                  setShowVRModal(true);
                }}
                className="px-6 py-3 font-mono text-[10px] tracking-widest uppercase font-semibold text-gold bg-transparent border-2 border-gold hover:bg-gold hover:text-black hover:scale-[1.02] duration-300 transition-all cursor-pointer flex items-center justify-center space-x-2.5 shadow-lg shadow-gold/5"
              >
                <Compass className="w-4 h-4 text-gold group-hover:text-black shrink-0 animate-spin-slow" />
                <span>Enter Virtual Tour VR</span>
              </button>
            </div>

          </div>

          {/* Luxury VR Connection Overlay Modal */}
          <AnimatePresence>
            {showVRModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  className="max-w-md w-full bg-luxury-gray/95 border border-gold/40 p-8 text-center space-y-6 relative shadow-2xl"
                >
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold bg-gold/5 animate-pulse">
                      <Compass className="w-7 h-7 animate-spin-slow" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] tracking-[0.3em] text-gold uppercase block">
                      IMMERSIVE VR INTERACTION
                    </span>
                    <h4 className="font-serif text-lg font-medium text-white tracking-widest">
                      Oculink & VisionOS Secure Node
                    </h4>
                  </div>

                  <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
                    Securing responsive spatial feed. Please mount your Oculus Quest, Apple Vision Pro, or set your high-resolution presentation screen to landscape to synchronize directly with the Binghatti cloud server nodes.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setShowVRModal(false)}
                      className="px-6 py-2.5 text-[10px] font-mono tracking-widest text-black bg-gold hover:bg-gold-hover duration-300 transition-colors uppercase font-bold"
                    >
                      DISMISS FEED
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

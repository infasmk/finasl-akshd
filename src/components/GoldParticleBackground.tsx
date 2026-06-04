import { useEffect, useRef, useState } from "react";

export default function GoldParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Monitor light/dark theme switch dynamically
    let isLightTheme = document.documentElement.classList.contains("light-theme");
    setIsLight(isLightTheme);

    const observer = new MutationObserver(() => {
      const current = document.documentElement.classList.contains("light-theme");
      isLightTheme = current;
      setIsLight(current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Interactive mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 200,
    };

    interface VectorLine {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      progress: number;
      speed: number;
      alpha: number;
      targetAlpha: number;
      isDrawing: boolean;
      delay: number;
    }

    interface Building {
      x: number;       // base center position x
      width: number;
      height: number;
      lines: VectorLine[];
      label: string;
      coordinate: string;
      state: "drawing" | "stable" | "fading" | "waiting";
      stableTimer: number;
      waitTimer: number;
      fadeAlpha: number;
    }

    interface DraftingCircle {
      x: number;
      y: number;
      radius: number;
      angle: number;
      rotSpeed: number;
      alpha: number;
      pulseDirection: number;
      currentRadius: number;
    }

    let buildings: Building[] = [];
    let lines: VectorLine[] = []; // standalone blueprint lines
    let dials: DraftingCircle[] = [];

    // Laser cross-section line coordinates sweeping up/down
    let laserY = 0;
    let laserSpeed = 1.2;
    let laserDirection = 1;

    // Helper to generate drawing lines for a building footprint
    const generateSkyscraper = (bx: number, bWidth: number, bHeight: number, label: string): Building => {
      const buildingLines: VectorLine[] = [];
      const baseLineY = height;
      const topY = height - bHeight;

      // Vertical outer pillars
      buildingLines.push({
        x1: bx - bWidth / 2, y1: baseLineY,
        x2: bx - bWidth / 2, y2: topY,
        progress: 0, speed: Math.random() * 0.012 + 0.006,
        alpha: 0, targetAlpha: Math.random() * 0.18 + 0.08,
        isDrawing: true, delay: Math.random() * 60
      });

      buildingLines.push({
        x1: bx + bWidth / 2, y1: baseLineY,
        x2: bx + bWidth / 2, y2: topY,
        progress: 0, speed: Math.random() * 0.012 + 0.006,
        alpha: 0, targetAlpha: Math.random() * 0.18 + 0.08,
        isDrawing: true, delay: Math.random() * 60
      });

      // Internal dividing structural columns
      const cols = Math.floor(Math.random() * 3) + 2;
      for (let i = 1; i < cols; i++) {
        const offset = -bWidth / 2 + (bWidth / cols) * i;
        buildingLines.push({
          x1: bx + offset, y1: baseLineY,
          x2: bx + offset, y2: topY,
          progress: 0, speed: Math.random() * 0.01 + 0.005,
          alpha: 0, targetAlpha: Math.random() * 0.09 + 0.04,
          isDrawing: true, delay: Math.random() * 120
        });
      }

      // Horizontal floor plates representing skyscraper floors
      const floorCount = Math.floor(bHeight / 18);
      for (let i = 0; i < floorCount; i++) {
        const floorY = baseLineY - (bHeight / floorCount) * i;
        buildingLines.push({
          x1: bx - bWidth / 2, y1: floorY,
          x2: bx + bWidth / 2, y2: floorY,
          progress: 0, speed: Math.random() * 0.018 + 0.008,
          alpha: 0, targetAlpha: Math.random() * 0.12 + 0.05,
          isDrawing: true, delay: Math.random() * 90
        });
      }

      // Elegant top architectural spire or step crowns
      const style = Math.floor(Math.random() * 4);
      if (style === 0) {
        // Linear angled triangular spire
        buildingLines.push({
          x1: bx - bWidth / 4, y1: topY,
          x2: bx, y2: topY - bHeight * 0.18,
          progress: 0, speed: 0.012,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 100
        });
        buildingLines.push({
          x1: bx + bWidth / 4, y1: topY,
          x2: bx, y2: topY - bHeight * 0.18,
          progress: 0, speed: 0.012,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 100
        });
        // Verticle antenna rod
        buildingLines.push({
          x1: bx, y1: topY - bHeight * 0.18,
          x2: bx, y2: topY - bHeight * 0.28,
          progress: 0, speed: 0.018,
          alpha: 0, targetAlpha: 0.25,
          isDrawing: true, delay: 140
        });
      } else if (style === 1) {
        // Geometric stepping tiers
        const steppedY1 = topY - bHeight * 0.08;
        const steppedY2 = steppedY1 - bHeight * 0.08;
        buildingLines.push({
          x1: bx - bWidth * 0.35, y1: topY,
          x2: bx - bWidth * 0.35, y2: steppedY1,
          progress: 0, speed: 0.014,
          alpha: 0, targetAlpha: 0.14,
          isDrawing: true, delay: 100
        });
        buildingLines.push({
          x1: bx + bWidth * 0.35, y1: topY,
          x2: bx + bWidth * 0.35, y2: steppedY1,
          progress: 0, speed: 0.014,
          alpha: 0, targetAlpha: 0.14,
          isDrawing: true, delay: 100
        });
        buildingLines.push({
          x1: bx - bWidth * 0.35, y1: steppedY1,
          x2: bx + bWidth * 0.35, y2: steppedY1,
          progress: 0, speed: 0.014,
          alpha: 0, targetAlpha: 0.14,
          isDrawing: true, delay: 125
        });
        buildingLines.push({
          x1: bx - bWidth * 0.18, y1: steppedY1,
          x2: bx - bWidth * 0.18, y2: steppedY2,
          progress: 0, speed: 0.016,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 140
        });
        buildingLines.push({
          x1: bx + bWidth * 0.18, y1: steppedY1,
          x2: bx + bWidth * 0.18, y2: steppedY2,
          progress: 0, speed: 0.016,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 140
        });
        buildingLines.push({
          x1: bx - bWidth * 0.18, y1: steppedY2,
          x2: bx + bWidth * 0.18, y2: steppedY2,
          progress: 0, speed: 0.018,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 150
        });
      } else if (style === 2) {
        // Modern sweep curve crest
        const segments = 12;
        for (let j = 0; j < segments; j++) {
          const ratio1 = j / segments;
          const ratio2 = (j + 1) / segments;
          const px1 = bx - bWidth / 2 + bWidth * ratio1;
          const px2 = bx - bWidth / 2 + bWidth * ratio2;
          const py1 = topY - Math.sin(ratio1 * Math.PI) * (bHeight * 0.12);
          const py2 = topY - Math.sin(ratio2 * Math.PI) * (bHeight * 0.12);
          buildingLines.push({
            x1: px1, y1: py1,
            x2: px2, y2: py2,
            progress: 0, speed: 0.024,
            alpha: 0, targetAlpha: 0.16,
            isDrawing: true, delay: 90 + j * 8
          });
        }
      } else {
        // Minimalist offset crown
        buildingLines.push({
          x1: bx - bWidth / 3, y1: topY,
          x2: bx + bWidth / 3, y2: topY - bHeight * 0.06,
          progress: 0, speed: 0.016,
          alpha: 0, targetAlpha: 0.18,
          isDrawing: true, delay: 100
        });
      }

      // Architectural diagonal structural cross-bracing (Very premium blueprint feel)
      const braceFloors = Math.floor(floorCount / 3);
      for (let k = 0; k < braceFloors; k++) {
        const yLow = baseLineY - (bHeight / braceFloors) * k;
        const yHigh = baseLineY - (bHeight / braceFloors) * (k + 1);
        if (Math.random() > 0.25) {
          buildingLines.push({
            x1: bx - bWidth / 2, y1: yLow,
            x2: bx + bWidth / 2, y2: yHigh,
            progress: 0, speed: 0.006,
            alpha: 0, targetAlpha: Math.random() * 0.08 + 0.03,
            isDrawing: true, delay: Math.random() * 150
          });
          buildingLines.push({
            x1: bx + bWidth / 2, y1: yLow,
            x2: bx - bWidth / 2, y2: yHigh,
            progress: 0, speed: 0.006,
            alpha: 0, targetAlpha: Math.random() * 0.08 + 0.03,
            isDrawing: true, delay: Math.random() * 150
          });
        }
      }

      const randomLat = (Math.random() * 5 + 25).toFixed(4);
      const randomLng = (Math.random() * 5 + 55).toFixed(4);

      return {
        x: bx,
        width: bWidth,
        height: bHeight,
        lines: buildingLines,
        label,
        coordinate: `DUBAI METROPOLIS ARC // NODE: ${bx}PX [ Lat: ${randomLat}° Lng: ${randomLng}° ]`,
        state: "drawing",
        stableTimer: Math.random() * 300 + 400, // keep full architecture visible for ~10 seconds
        waitTimer: 0,
        fadeAlpha: 1.0,
      };
    };

    const initializeBlueprints = () => {
      buildings = [];
      dials = [];
      lines = [];

      const isMobile = window.innerWidth < 768;
      const totalWidth = width || 1200;

      // 1. Spacing columns out beautifully
      if (isMobile) {
        buildings.push(generateSkyscraper(totalWidth * 0.15, 65, height * 0.38, "ARCHITECTURE SCULPT I"));
        buildings.push(generateSkyscraper(totalWidth * 0.5, 90, height * 0.55, "ARCHITECTURE TOWER V"));
        buildings.push(generateSkyscraper(totalWidth * 0.85, 70, height * 0.42, "ARCHITECTURE SCULPT II"));
      } else {
        buildings.push(generateSkyscraper(totalWidth * 0.12, 100, height * 0.45, "ARCHITECTURE SHADOW PLATINUM"));
        buildings.push(generateSkyscraper(totalWidth * 0.32, 120, height * 0.65, "ARCHITECTURE DECORATOR TOWER"));
        buildings.push(generateSkyscraper(totalWidth * 0.52, 145, height * 0.72, "ARCHITECTURE INTEGRAL PEAK"));
        buildings.push(generateSkyscraper(totalWidth * 0.72, 115, height * 0.58, "ARCHITECTURE SCULPTURAL APEX"));
        buildings.push(generateSkyscraper(totalWidth * 0.88, 95, height * 0.48, "ARCHITECTURE SYNERGY CROWN"));
      }

      // Place them at different seed frames so they don't draw in sync
      buildings.forEach((b, idx) => {
        if (idx % 2 === 1) {
          b.state = "waiting";
          b.waitTimer = Math.random() * 200 + 50;
          b.fadeAlpha = 0;
        } else if (idx % 3 === 2) {
          // pre-drawn to keep background lively immediately
          b.lines.forEach((l) => {
            l.progress = 1.0;
            l.alpha = l.targetAlpha;
          });
          b.state = "stable";
        }
      });

      // 2. Add structural compass/radar coordinate dials
      const circleCount = isMobile ? 1 : 3;
      for (let i = 0; i < circleCount; i++) {
        dials.push({
          x: isMobile ? totalWidth * 0.9 : totalWidth * (0.2 + i * 0.35),
          y: height * (0.25 + i * 0.2),
          radius: isMobile ? 40 : 65 + i * 15,
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
          alpha: Math.random() * 0.12 + 0.04,
          pulseDirection: 1,
          currentRadius: isMobile ? 40 : 65 + i * 15,
        });
      }

      // 3. Independent horizontal elevation lines to act as drawing datum lines
      lines.push({
        x1: 0, y1: height - 60,
        x2: totalWidth, y2: height - 60,
        progress: 0, speed: 0.004,
        alpha: 0, targetAlpha: 0.15,
        isDrawing: true, delay: 50
      });
      lines.push({
        x1: 0, y1: height - 120,
        x2: totalWidth, y2: height - 120,
        progress: 0, speed: 0.002,
        alpha: 0, targetAlpha: 0.08,
        isDrawing: true, delay: 150
      });
      lines.push({
        x1: 0, y1: height - 10,
        x2: totalWidth, y2: height - 10,
        progress: 0, speed: 0.006,
        alpha: 0, targetAlpha: 0.2,
        isDrawing: true, delay: 0
      });
    };

    // Responsive setup with debounce/debounce resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        width = newWidth;
        height = newHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;
        laserY = newHeight / 2;
        initializeBlueprints();
      }
    });

    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    let tick = 0;

    // Drawing loops
    const drawLine = (line: VectorLine, fadeMultiplier: number = 1.0) => {
      if (line.delay > 0) {
        line.delay--;
        return;
      }

      if (line.progress < 1) {
        line.progress += line.speed;
        if (line.progress > 1) line.progress = 1;
      }

      if (line.alpha < line.targetAlpha) {
        line.alpha += 0.008;
      }

      const activeX = line.x1 + (line.x2 - line.x1) * line.progress;
      const activeY = line.y1 + (line.y2 - line.y1) * line.progress;

      // Laser scanner glowing boost
      const deltaLaser = Math.abs(activeY - laserY);
      let laserGlow = 0;
      if (deltaLaser < 80) {
        laserGlow = (1 - deltaLaser / 80) * 0.25;
      }

      // Mouse interaction glowing boost
      let mouseGlow = 0;
      if (mouse.x > 0 && mouse.y > 0) {
        const dX1 = line.x1 - mouse.x;
        const dY1 = line.y1 - mouse.y;
        const dX2 = activeX - mouse.x;
        const dY2 = activeY - mouse.y;
        const dist1 = Math.hypot(dX1, dY1);
        const dist2 = Math.hypot(dX2, dY2);
        if (dist1 < mouse.radius || dist2 < mouse.radius) {
          const minDist = Math.min(dist1, dist2);
          mouseGlow = (1 - minDist / mouse.radius) * 0.35;
        }
      }

      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(activeX, activeY);

      const computedAlpha = Math.max(0, Math.min(1.0, line.alpha * fadeMultiplier + laserGlow + mouseGlow));

      // Color scheme selector: elegant luxury gold `#C5A059`
      if (isLightTheme) {
        ctx.strokeStyle = `rgba(135, 100, 35, ${computedAlpha * 0.85})`;
      } else {
        ctx.strokeStyle = `rgba(197, 160, 89, ${computedAlpha})`;
      }
      ctx.stroke();

      // Draw subtle drafting endpoint dots with responsive themes
      if (line.progress > 0.02 && line.progress < 0.98) {
        ctx.beginPath();
        ctx.arc(activeX, activeY, 1.3, 0, Math.PI * 2);
        const dotAlpha = Math.max(0, Math.min(1.0, 0.4 + laserGlow * 2));
        if (isLightTheme) {
          ctx.fillStyle = `rgba(135, 100, 35, ${dotAlpha * 0.7})`;
        } else {
          ctx.fillStyle = `rgba(197, 160, 89, ${dotAlpha * 0.9})`;
        }
        ctx.fill();
      }
    };

    const drawGrid = () => {
      const spacing = 80;
      const rows = Math.ceil(height / spacing) + 1;
      const cols = Math.ceil(width / spacing) + 1;

      ctx.lineWidth = 0.35;
      ctx.strokeStyle = isLightTheme 
        ? "rgba(135, 100, 35, 0.015)" 
        : "rgba(197, 160, 89, 0.022)";

      // Gentle vertical scrolling offset to make the background feel alive and moving
      const gridScrollY = (tick * 0.08) % spacing;

      // Horizontal lines of architectural grid
      for (let r = -1; r < rows; r++) {
        const yPos = r * spacing + gridScrollY;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(width, yPos);
        ctx.stroke();
      }

      // Vertical lines of architectural grid
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * spacing, 0);
        ctx.lineTo(c * spacing, height);
        ctx.stroke();
      }

      // Small elegant "+" crosshair markers on architectural intersections
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isLightTheme 
        ? "rgba(135, 100, 35, 0.05)" 
        : "rgba(197, 160, 89, 0.07)";
        
      for (let r = 0; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
          const px = c * spacing;
          const py = r * spacing + gridScrollY;

          // Subtle interaction offset near cursor
          let offsetX = 0;
          let offsetY = 0;
          if (mouse.x > 0 && mouse.y > 0) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < mouse.radius) {
              const push = (1 - dist / mouse.radius) * 4;
              offsetX = (dx / dist) * push;
              offsetY = (dy / dist) * push;
            }
          }

          ctx.beginPath();
          ctx.moveTo(px - 3 + offsetX, py + offsetY);
          ctx.lineTo(px + 3 + offsetX, py + offsetY);
          ctx.moveTo(px + offsetX, py - 3 + offsetY);
          ctx.lineTo(px + offsetX, py + 3 + offsetY);
          ctx.stroke();
        }
      }
    };

    const drawCompassDials = () => {
      dials.forEach((d) => {
        d.angle += d.rotSpeed;

        // Slow pulsing of circles to create continuous organic movement
        d.currentRadius = d.radius + Math.sin(tick * 0.015) * 5;

        ctx.lineWidth = 0.45;
        ctx.strokeStyle = isLightTheme
          ? `rgba(135, 100, 35, ${d.alpha * 0.65})`
          : `rgba(197, 160, 89, ${d.alpha})`;

        // Draw main compass circle
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.currentRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner nested architectural circle
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.currentRadius * 0.72, 0, Math.PI * 2);
        ctx.stroke();

        // Architectural degree markings that spin with dials
        for (let i = 0; i < 4; i++) {
          const markingAngle = d.angle + (i * Math.PI / 2);
          const xStart = d.x + Math.cos(markingAngle) * (d.currentRadius * 0.72);
          const yStart = d.y + Math.sin(markingAngle) * (d.currentRadius * 0.72);
          const xEnd = d.x + Math.cos(markingAngle) * d.currentRadius;
          const yEnd = d.y + Math.sin(markingAngle) * d.currentRadius;

          ctx.beginPath();
          ctx.moveTo(xStart, yStart);
          ctx.lineTo(xEnd, yEnd);
          ctx.stroke();
        }

        // Tiny center axis mark
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
        if (isLightTheme) {
          ctx.fillStyle = `rgba(135, 100, 35, 0.12)`;
        } else {
          ctx.fillStyle = `rgba(197, 160, 89, 0.22)`;
        }
        ctx.fill();
      });
    };

    const drawBuildingLabels = () => {
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      buildings.forEach((b) => {
        if (b.state === "waiting") return;

        // Find if the vertical lines are drawn to show labels
        const mainLine = b.lines[0];
        if (!mainLine || mainLine.progress < 0.1) return;

        const currentOpacity = mainLine.alpha * b.fadeAlpha * 2.5;
        if (currentOpacity <= 0) return;

        // Custom architectural display details
        ctx.font = "6px monospace";
        ctx.fillStyle = isLightTheme
          ? `rgba(135, 100, 35, ${currentOpacity * 0.55})`
          : `rgba(197, 160, 89, ${currentOpacity * 0.72})`;

        const labelY = height - b.height + 4;
        ctx.fillText(b.label, b.x, labelY);

        ctx.font = "4px monospace";
        ctx.fillStyle = isLightTheme
          ? `rgba(135, 100, 35, ${currentOpacity * 0.38})`
          : `rgba(197, 160, 89, ${currentOpacity * 0.45})`;

        ctx.fillText(b.coordinate, b.x, labelY + 12);
      });
    };

    const drawLaserScanLine = () => {
      // Swings like an elegant scan line down the entire height of the viewport
      laserY += laserSpeed * laserDirection;
      if (laserY >= height) {
        laserY = height;
        laserDirection = -1;
      } else if (laserY <= 0) {
        laserY = 0;
        laserDirection = 1;
      }

      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isLightTheme
        ? "rgba(135, 100, 35, 0.08)"
        : "rgba(197, 160, 89, 0.12)";

      ctx.beginPath();
      ctx.moveTo(0, laserY);
      ctx.lineTo(width, laserY);
      ctx.stroke();

      // Subtle localized scanning beam highlights
      ctx.fillStyle = isLightTheme
        ? "rgba(135, 100, 35, 0.005)"
        : "rgba(197, 160, 89, 0.008)";
      ctx.fillRect(0, laserY - 15, width, 30);
    };

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate tracking
      if (mouse.targetX > -500) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      ctx.lineWidth = 0.55;

      // 1. Structural drafting grid background with slow auto-scrolling
      drawGrid();

      // 2. Spinning drafting radar layout with slow pulsing motion
      drawCompassDials();

      // 3. Standalone datum lines
      lines.forEach((line) => {
        drawLine(line);

        // Cyclic restart for complete datum lines
        if (line.progress >= 1 && Math.random() < 0.004) {
          line.progress = 0;
          line.delay = Math.random() * 150 + 50;
        }
      });

      // 4. Skyscraper blueprint vectors driven by state machine logic
      buildings.forEach((b, bIdx) => {
        if (b.state === "waiting") {
          b.waitTimer--;
          if (b.waitTimer <= 0) {
            b.state = "drawing";
            b.fadeAlpha = 0;
            b.lines.forEach((line) => {
              line.progress = 0;
              line.alpha = 0;
              line.delay = Math.random() * 100;
            });
          }
          return;
        }

        if (b.state === "drawing") {
          if (b.fadeAlpha < 1.0) {
            b.fadeAlpha += 0.02;
          }

          let allDone = true;
          b.lines.forEach((line) => {
            drawLine(line, b.fadeAlpha);
            if (line.progress < 1.0) {
              allDone = false;
            }
          });

          if (allDone) {
            b.state = "stable";
            b.stableTimer = Math.random() * 450 + 550; // hold full state for 15-18 seconds
          }
        } else if (b.state === "stable") {
          b.lines.forEach((line) => {
            drawLine(line, b.fadeAlpha);
          });

          b.stableTimer--;
          if (b.stableTimer <= 0) {
            b.state = "fading";
          }
        } else if (b.state === "fading") {
          b.fadeAlpha -= 0.01;
          if (b.fadeAlpha <= 0) {
            b.fadeAlpha = 0;
            b.state = "waiting";
            b.waitTimer = Math.random() * 320 + 100; // wait before reconstruction
          }

          b.lines.forEach((line) => {
            drawLine(line, b.fadeAlpha);
          });
        }
      });

      // 5. Grid blueprint digital coordinate logs
      drawBuildingLabels();

      // 6. Laser cross-section sliding scanning beam
      drawLaserScanLine();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver.unobserve(container);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="architectural-blueprint-container"
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[2]"
      style={{ mixBlendMode: "normal" }}
    >
      {/* Decorative blurred gradient orbs floating slowly behind blueprints */}
      <div className="absolute inset-0 w-full h-full overflow-hidden blur-[80px] md:blur-[140px] pointer-events-none z-[1] select-none">
        {/* Orb 1: Premium Luxury Gold/Bronze (#c9a46a) */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-[#c9a46a] opacity-[0.11] md:opacity-[0.13] animate-luxury-orb-1"
          style={{ willChange: "transform, opacity" }}
        />
        {/* Orb 2: Gleaming Real Estate Champagne (#e7d4b5) */}
        <div
          className="absolute -bottom-[10%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-[#e7d4b5] opacity-[0.12] md:opacity-[0.14] animate-luxury-orb-2"
          style={{ willChange: "transform, opacity" }}
        />
        {/* Orb 3: Soft Alabaster Beige (#f5efe6) */}
        <div
          className="absolute top-[25%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-[#f5efe6] opacity-[0.13] md:opacity-[0.15] animate-luxury-orb-3"
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Canvas vector blueprint simulation */}
      <canvas
        ref={canvasRef}
        className="relative w-full h-full block opacity-[0.9] z-[2]"
      />
    </div>
  );
}


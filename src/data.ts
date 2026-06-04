import bugattiImg from "./assets/projects/bugatti.svg";
import jacobImg from "./assets/projects/jacob.svg";
import mercedesImg from "./assets/projects/mercedes.svg";
import onyxImg from "./assets/projects/onyx.svg";
import crestImg from "./assets/projects/crest.svg";
import amberImg from "./assets/projects/amber.svg";
import phantomImg from "./assets/projects/phantom.svg";
import genericLuxuryImg from "./assets/projects/generic_luxury.svg";

export interface Project {s
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  category: string;
  startingPrice: string;
  paymentPlan: string;
}

export interface Milestone {
  id: string;
  tag: string;
  number: number;
  suffix: string;
  label: string;
}

export interface LocationPin {
  id: string;
  name: string;
  x: number; // custom SVG relative coordinates (%)
  y: number; // custom SVG relative coordinates (%)
  description: string;
  premiumStatus: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: "bugatti",
    title: "Bugatti Residences",
    subtitle: "By Binghatti",
    location: "Business Bay, Dubai",
    image: bugattiImg,
    category: "Hyper-Tower",
    startingPrice: "AED 19,099,000",
    paymentPlan: "70/30",
  },
  {
    id: "jacob",
    title: "Burj Binghatti Jacob & Co",
    subtitle: "Crown Jewel Residences",
    location: "Business Bay, Dubai",
    image: jacobImg,
    category: "Super-Tall Skyscraper",
    startingPrice: "AED 22,000,000",
    paymentPlan: "60/40",
  },
  {
    id: "mercedes",
    title: "Mercedes-Benz Places",
    subtitle: "Modernist Sensual Purity",
    location: "Downtown Dubai",
    image: mercedesImg,
    category: "Global Branded Living",
    startingPrice: "AED 15,500,000",
    paymentPlan: "70/30",
  },
  {
    id: "onyx",
    title: "Binghatti Onyx",
    subtitle: "Sleek Obsidian Geometry",
    location: "Jumeirah Village Circle",
    image: onyxImg,
    category: "Boutique Luxury",
    startingPrice: "AED 3,200,000",
    paymentPlan: "50/50",
  },
  {
    id: "crest",
    title: "Binghatti Crest",
    subtitle: "Dynamic Golden Waves",
    location: "Jumeirah Village Circle",
    image: crestImg,
    category: "High-Rise Residential",
    startingPrice: "AED 2,800,000",
    paymentPlan: "60/40",
  },
  {
    id: "amber",
    title: "Binghatti Amber",
    subtitle: "Warm Radiant Facades",
    location: "Jumeirah Village Circle",
    image: amberImg,
    category: "Exclusive Community",
    startingPrice: "AED 2,500,000",
    paymentPlan: "50/50",
  },
  {
    id: "phantom",
    title: "Binghatti Phantom",
    subtitle: "Sovereign Sky Aesthetics",
    location: "Dubai Water Canal",
    image: phantomImg,
    category: "Waterfront Luxury",
    startingPrice: "AED 4,500,000",
    paymentPlan: "70/30",
  },
  {
    id: "venus",
    title: "Binghatti Venus",
    subtitle: "High-Rise Geometric Sophistication",
    location: "Jumeirah Village Circle",
    image: genericLuxuryImg,
    category: "Boutique Luxury",
    startingPrice: "AED 2,400,000",
    paymentPlan: "60/40",
  },
  {
    id: "canal",
    title: "Binghatti Canal",
    subtitle: "Fluid Maritime Wave Art",
    location: "Business Bay, Dubai",
    image: genericLuxuryImg,
    category: "Waterfront Luxury",
    startingPrice: "AED 2,900,000",
    paymentPlan: "60/40",
  },
  {
    id: "luna",
    title: "Binghatti Luna",
    subtitle: "Elite Contemporary Residences",
    location: "Jumeirah Village Circle",
    image: genericLuxuryImg,
    category: "Premium Living",
    startingPrice: "AED 2,200,000",
    paymentPlan: "50/50",
  },
  {
    id: "galaxy",
    title: "Binghatti Galaxy",
    subtitle: "Interstellar Organic Form",
    location: "Jumeirah, Dubai",
    image: genericLuxuryImg,
    category: "Global Branded Living",
    startingPrice: "AED 8,900,000",
    paymentPlan: "70/30",
  },
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    tag: "completed",
    number: 80,
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    id: "m2",
    tag: "units",
    number: 12000,
    suffix: "+",
    label: "UNITS HANDED OVER",
  },
  {
    id: "m3",
    tag: "value",
    number: 70,
    suffix: " BILLION",
    label: "PROJECT VALUE (AED)",
  },
];

export const MAP_PINS: LocationPin[] = [
  {
    id: "l1",
    name: "Business Bay",
    x: 48,
    y: 38,
    description: "Home to the futuristic Bugatti Residences and custom-designed Burj Binghatti Jacob & Co Residences heightening the canal-front skyline.",
    premiumStatus: "Hyper-Luxury Hub",
  },
  {
    id: "l2",
    name: "Downtown Dubai",
    x: 52,
    y: 28,
    description: "Hosting Mercedes-Benz Places by Binghatti, perfectly framed beside the Burj Khalifa with premier unobstructed terrace views.",
    premiumStatus: "Ultra-Premium Signature",
  },
  {
    id: "l3",
    name: "Jumeirah Village Circle (JVC)",
    x: 28,
    y: 65,
    description: "Elite boutique towers like Binghatti Onyx, Crest, and Amber, redefining mid-rise architecture with trademark golden structural lines.",
    premiumStatus: "Premium Residential",
  },
  {
    id: "l4",
    name: "Dubai Marina Waterfront",
    x: 20,
    y: 78,
    description: "Waterfront luxury residences designed for high-density elegance, state of the art amenities, and panoramic ocean vistas.",
    premiumStatus: "Exquisite Shoreline Living",
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2023",
    title: "The Architectural Expansion",
    description: "Expanded our real estate footprint with over AED 10 Billion in structural projects, breaking boundaries in iconic building styles and bold geometric facades.",
  },
  {
    year: "2024",
    title: "Global Designer Alliances",
    description: "Forged historic alliances with premier high-luxury global brands including Bugatti, Jacob & Co, and Mercedes-Benz, defining an entirely separate class of branded real estate.",
  },
  {
    year: "2025",
    title: "The Hyper-Tower Groundbreaking",
    description: "Initiated engineering work on Dubai's tallest residential hyper-towers, with cutting-edge cantilever structural systems elevating private sky mansions over 100 floors high.",
  },
  {
    year: "2026",
    title: "The Legacy Handover",
    description: "Entering global delivery phases for our diamond-standard residences, elevating the urban living paradigm with precision handovers and legendary architectural service.",
  },
];

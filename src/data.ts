import adidasImg from "./assets/projects/adidas.png";
import buenoImg from "./assets/projects/bueno.png";
import aldarEasternMangrovbsImg from "./assets/projects/pool.png";
import seikoDubaiMallImg from "./assets/projects/seiko.png";
import editDEssenceImg from "./assets/projects/spray.png";
import adidasY3Img from "./assets/projects/y3.png";


export interface Project {
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
    id: "adidas",
    title: "SINGAPORE AIRPORT",
    subtitle: "TERMINAL 2",
    location: "",
    image: adidasImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  },
  {
    id: "bueno",
    title: "BUENO-DFC",
    subtitle: "Design development, 3D modeling, and rendering",
    location: "",
    image: buenoImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  },
    {
    id: "aldar-eastern-mangrovbs",
    title: "ALDAR EASTERN MANGROVBS ",
    subtitle: "Concept and design developement , 3D model And rendering",
    location: "",
    image: aldarEasternMangrovbsImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  },
  {
    id: "seiko-dubai-mall",
    title: "SEIKO DUBAI MALL",
    subtitle: "Concept and design developement , 3D model And rendering",
    location: "",
    image: seikoDubaiMallImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  },
    {
    id: "edit-d-essence",
    title: "EDIT'D ESSENCE",
    subtitle: "Concept and design developement , 3D model And rendering",
    location: "",
    image: editDEssenceImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  },
   {
    id: "adidas-y3",
    title: "ADIDAS Y3",
    subtitle: "Concept and design developement , 3D model And rendering",
    location: "",
    image: adidasY3Img,
    category: "",
    startingPrice: "",
    paymentPlan: "",
  }, 
{
    id: "concept-chronos",
    title: "CHRONOS COMPLEX",
    subtitle: "AI-Generated Skyscraper Exploration",
    location: "Downtown Dubai",
    image: concept1Img,
    category: "AI Concept",
    startingPrice: "AED 9,500,000",
    paymentPlan: "80/20",
  },
  {
    id: "concept-biophilic",
    title: "BIOPHILIC PLAZA",
    subtitle: "Organic Patterns & Sustainable Concept",
    location: "Business Bay",
    image: concept2Img,
    category: "AI Concept",
    startingPrice: "AED 7,200,000",
    paymentPlan: "70/30",
  },
  {
    id: "concept-zenith",
    title: "ZENITH RESIDENCES",
    subtitle: "Parametric Geometry & Golden Light Study",
    location: "Jumeirah Village Circle (JVC)",
    image: concept3Img,
    category: "AI Concept",
    startingPrice: "AED 4,800,000",
    paymentPlan: "60/40",
  },
  {
    id: "concept-galaxy",
    title: "GALAXY SHORELINE",
    subtitle: "Liquid Architecture & Floating Pavilions",
    location: "Dubai Marina Waterfront",
    image: concept4Img,
    category: "AI Concept",
    startingPrice: "AED 11,500,000",
    paymentPlan: "50/50",
  },
];
export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    tag: "completed",
    number: 250,
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    id: "m2",
    tag: "units",
    number: 25,
    suffix: "+",
    label: "COUNTRY",
  },
  {
    id: "m3",
    tag: "value",
    number: 10,
    suffix: "+",
    label: "GLOBAL BRANDS",
  },
];

export const MAP_PINS: LocationPin[] = [
  {
    id: "l1",
    name: "Business Bay",
    x: 48,
    y: 38,
    description: "Home to the futuristic Bugatti Residences and custom-designed Burj ARCHITECTURE Jacob & Co Residences heightening the canal-front skyline.",
    premiumStatus: "Hyper-Luxury Hub",
  },
  {
    id: "l2",
    name: "Downtown Dubai",
    x: 52,
    y: 28,
    description: "Hosting Mercedes-Benz Places by ARCHITECTURE, perfectly framed beside the Burj Khalifa with premier unobstructed terrace views.",
    premiumStatus: "Ultra-Premium Signature",
  },
  {
    id: "l3",
    name: "Jumeirah Village Circle (JVC)",
    x: 28,
    y: 65,
    description: "Elite boutique towers like ARCHITECTURE Onyx, Crest, and Amber, redefining mid-rise architecture with trademark golden structural lines.",
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

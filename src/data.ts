import adidasImg from "./assets/projects/adidas.png";
import buenoImg from "./assets/projects/bueno.png";
import aldarEasternMangrovbsImg from "./assets/projects/pool.png";
import seikoDubaiMallImg from "./assets/projects/seiko.png";
import editDEssenceImg from "./assets/projects/spray.png";
import adidasY3Img from "./assets/projects/y3.png";

import bImg from "./assets/projects/all/b.png";
import cImg from "./assets/projects/all/c.png";
import dImg from "./assets/projects/all/d.png";
import eImg from "./assets/projects/all/e.png";
import fImg from "./assets/projects/all/f.png";
import gImg from "./assets/projects/all/g.png";
import hImg from "./assets/projects/all/h.png";
import iImg from "./assets/projects/all/i.png";
import jImg from "./assets/projects/all/j.jpg";
import kImg from "./assets/projects/all/k.jpg";
import lImg from "./assets/projects/all/l.jpg";
import mImg from "./assets/projects/all/m.png";
import nImg from "./assets/projects/all/n.png";
import oImg from "./assets/projects/all/o.png";
import pImg from "./assets/projects/all/p.jpg";
import qImg from "./assets/projects/all/q.png";
import rImg from "./assets/projects/all/r.jpeg";
import sImg from "./assets/projects/all/s.png";
import tImg from "./assets/projects/all/t.jpeg";
import uImg from "./assets/projects/all/u.png";
import vImg from "./assets/projects/all/v.png";
import wImg from "./assets/projects/all/w.png";
import xImg from "./assets/projects/all/x.png";
import yImg from "./assets/projects/all/y.png";
import aaImg from "./assets/projects/ai/555.png";
 import abImg from "./assets/projects/ai/BCB.png";
  import acImg from "./assets/projects/ai/DFGFG.png";
   import adImg from "./assets/projects/ai/DZGZFDG.png";
    import aeImg from "./assets/projects/ai/SDSD.png";
     import afImg from "./assets/projects/ai/Untitled-1.png"; 
     import agImg from "./assets/projects/ai/UTTYU.png";
      import ahImg from "./assets/projects/ai/FGDFGD.png";
       import aiImg from "./assets/projects/ai/FGFD.png"; 
       import ajImg from "./assets/projects/ai/FGHF.png";
        import akImg from "./assets/projects/ai/FS.png";
         import alImg from "./assets/projects/ai/GDFG.png"; 
         import amImg from "./assets/projects/ai/HH.png"; 
         import anImg from "./assets/projects/ai/RDGDG.png";
          import aoImg from "./assets/projects/ai/RETER.png";
           import apImg from "./assets/projects/ai/2.png";
            import aqImg from "./assets/projects/ai/52.png"; 
            import arImg from "./assets/projects/ai/55.png";
             import asImg from "./assets/projects/ai/85.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  category: string;
  startingPrice: string;
  paymentPlan: string;
   description: string;
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
    subtitle: "Concept and design developement , 3D model And rendering",
    location: "",
    image: adidasImg,
    category: "",
    startingPrice: "",
    paymentPlan: "",
    description: " Scope Of Work ",
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
    description: "Scope Of Work",
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
    description: "Scope Of Work",
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
    description: "Scope Of Work",
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
    description: "Scope Of Work",
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
    description: "Scope Of Work",
  }, 
//   {
//   id: "A",
//   title: "",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: aImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
{
  id: "B",
  title: "VIETNAM - HONAI CENTRE ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: bImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "C",
  title: "PHILIPPINES - MALL OF ASIA ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: cImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "D",
  title: "BELGIUM",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: dImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
// {
//   id: "E",
//   title: "",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: eImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
{
  id: "F",
  title: "AUH",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: fImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "G",
  title: "NETHERLANDS ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: gImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "H",
  title: "DUBAI DFC -EDIT D ESSENCE",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: hImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "I",
  title: "DUBAI WORKSPACE  ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: iImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "J",
  title: "WORKSPACE",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: jImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "K",
  title: "INDONESIA BALI - ADIDAS ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: kImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "L",
  title: "DUBAI HOTEL LOBBY ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: lImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "M",
  title: "DUBAI DFC -BEUNO",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: mImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "N",
  title: "SINGAPORE TERMINAL  3",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: nImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "O",
  title: "DUBAI WORKSPACE  LOBBY ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: oImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "P",
  title: "ABUDHABI EASTERN MANGROVES -PLAY AREA ",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: pImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "Q",
  title: "VIETNAM",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: qImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "R",
  title: "OMAN JEWELLERY",
  subtitle: "FIXTURE DESIGN AND MODELING",
  location: "",
  image: rImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
// {
//   id: "S",
//   title: "",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: sImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
// {
//   id: "T",
//   title: "",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: tImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
// {
//   id: "U",
//   title: "MALAYSIA BOUSTEADOR ",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: uImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
// {
//   id: "V",
//   title: "",
//   subtitle: "Concept and design developement , 3D model And rendering",
//   location: "",
//   image: vImg,
//   category: "",
//   startingPrice: "",
//   paymentPlan: "",
//    description: "Scope Of Work",
// },
{
  id: "W",
  title: "MALAYSIA BOUSTEADOR",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: wImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "X",
  title: "DUBAI - CONCEPT STORE",
  subtitle: "Concept and design developement , 3D model And rendering",
  location: "",
  image: xImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
{
  id: "Y",
  title: "TURKIYA - SEDA UMUT ORDU ",
  subtitle: "FACADE  DESIGN AND MODELLING",
  location: "",
  image: yImg,
  category: "",
  startingPrice: "",
  paymentPlan: "",
   description: "Scope Of Work",
},
  { id: "555", title: "", subtitle: "", location: "", image: aaImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
   { id: "BCB", title: "", subtitle: "", location: "", image: abImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
    { id: "DFGFG", title: "", subtitle: "", location: "", image: acImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
     { id: "DZGZFDG", title: "", subtitle: "", location: "", image: adImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", }, 
     { id: "SDSD", title: "", subtitle: "", location: "", image: aeImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", }, 
     { id: "Untitled-1", title: "", subtitle: "", location: "", image: afImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
      { id: "UTTYU", title: "", subtitle: "", location: "", image: agImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
       { id: "FGDFGD", title: "", subtitle: "", location: "", image: ahImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
        { id: "FGFD", title: "", subtitle: "", location: "", image: aiImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", }, 
        { id: "FGHF", title: "", subtitle: "", location: "", image: ajImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", }, 
        { id: "FS", title: "", subtitle: "", location: "", image: akImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
        { id: "GDFG", title: "", subtitle: "", location: "", image: alImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", }, 
        { id: "HH", title："", subtitle："", location："", image：amImg, category："AI Concept", startingPrice："", paymentPlan："",  description："", },
         { id："RDGDG", title："", subtitle："", location："", image：anImg, category："AI Concept", startingPrice："", paymentPlan："",  description："", },
          { id："RETER", title："", subtitle："", location："", image：aoImg, category："AI Concept", startingPrice："", paymentPlan："",  description："", },
           { id："2", title："", subtitle："", location："", image：apImg, category："AI Concept", startingPrice："", paymentPlan："",  description："", },
            { id："52", title："", subtitle："", location："", image："aqImg", category："AI Concept", startingPrice："", paymentPlan："",  description："", },
             { id: "55", title: "", subtitle: "", location: "", image: arImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", },
              { id: "85", title: "", subtitle: "", location: "", image: asImg, category: "AI Concept", startingPrice: "", paymentPlan: "",  description: "", } 

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

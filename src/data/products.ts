import type { StaticImageData } from "next/image";
import heroImage from "@/../public/resonance/hero.png";
import colorYellowImage from "@/../public/resonance/color-yellow.png";
import colorGreenImage from "@/../public/resonance/color-green.png";
import colorRedImage from "@/../public/resonance/color-red.png";
import featurePortrait from "@/../public/resonance/feature-portrait.png";
import detailOne from "@/../public/resonance/detail-1.png";
import detailThree from "@/../public/resonance/detail-3.png";
import detailFour from "@/../public/resonance/detail-4.png";
import detailFive from "@/../public/resonance/detail-5.png";
import detailSix from "@/../public/resonance/detail-6.png";
import dreamlikeImage from "@/../public/resonance/dreamlike.png";
import modelImage from "@/../public/resonance/model.png";

export type ProductColor = {
  id: string;
  label: string;
  hex: string;
  image: StaticImageData;
};

export type ProductHighlight = {
  title: string;
  body: string;
  image: StaticImageData;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  heroImage: StaticImageData;
  colors: ProductColor[];
  tagline: string;
  description: string;
  highlights: ProductHighlight[];
};

export type SpecCategory = {
  id: string;
  title: string;
  bullets: string[];
};

export type CompareFeature = {
  id: string;
  label: string;
  icon: "chip" | "noise" | "spatial" | "audio" | "health" | "touch" | "battery" | "water" | "mic";
  auraValue: string;
  flowValue: string;
};

const COLOR_OPTIONS: ProductColor[] = [
  {
    id: "sunstone",
    label: "Sunstone",
    hex: "#c9a445",
    image: colorYellowImage,
  },
  {
    id: "sage",
    label: "Sage",
    hex: "#8da55a",
    image: colorGreenImage,
  },
  {
    id: "terra",
    label: "Terra",
    hex: "#8b3c3a",
    image: colorRedImage,
  },
];

export const auraProII: Product = {
  slug: "aura-pro-ii",
  name: "Aura Pro II",
  price: 320,
  heroImage,
  colors: COLOR_OPTIONS,
  tagline: "Your Style. Your Sound.",
  description:
    "Studio-grade acoustics that dissolve distractions and awaken clarity.",
  highlights: [
    {
      title: "Deep lows. Lush mids.",
      body: "Airy highs. All perfectly in balance thanks to Resonance Sculpted Sound.",
      image: detailSix,
    },
  ],
};

export const flowII: Product = {
  slug: "flow-ii",
  name: "Flow II",
  price: 160,
  heroImage: modelImage,
  colors: COLOR_OPTIONS,
  tagline: "Compact, expressive earbuds tuned for motion.",
  description: "Adaptive equalization keeps music full wherever you move.",
  highlights: [
    {
      title: "Designed to move",
      body: "Featherweight earbuds that keep pace with every routine.",
      image: detailThree,
    },
  ],
};

export const detailTiles: ProductHighlight[] = [
  {
    title: "Every stitch considered",
    body: "Bio-based mesh ear padding stays cool for all-day sessions.",
    image: detailOne,
  },
  {
    title: "Analog soul, digital heart",
    body: "Custom R2 sound core with adaptive EQ for cinematic presence.",
    image: detailFour,
  },
  {
    title: "Precision controls",
    body: "Gesture-aware surfaces keep playback effortless and intuitive.",
    image: detailFive,
  },
  {
    title: "Sound that travels",
    body: "Pressure-balancing vents maintain comfort across journeys.",
    image: detailSix,
  },
];

export const homepageImages = {
  featurePortrait,
  dreamlikeImage,
};

export const specCategories: SpecCategory[] = [
  {
    id: "audio",
    title: "Audio Technology",
    bullets: [
      "Custom-tuned 40mm Resonance™ drivers for deep bass.",
      "Ultra-low distortion signal processing.",
      "Adaptive Sound Sculpting™ — real-time EQ.",
      "Spatial Audio Calibration with dynamic head tracking.",
      "Natural Voice isolation for calls, focus, and immersive listening.",
      "Pressure-balancing acoustic vents for long-wear comfort.",
    ],
  },
  {
    id: "intelligence",
    title: "Intelligence",
    bullets: [
      "Dual noise-targeting microphones.",
      "Internal ear-position mic for personalized audio tuning.",
      "Proximity & motion sensors to detect wear and usage.",
      "Gesture-aware force sensor for effortless control.",
      "Accelerometer-assisted voice capture for clarity on the move.",
    ],
  },
  {
    id: "power",
    title: "Power",
    bullets: [
      "Custom-designed R2 Sound Core chip.",
      "Advanced audio algorithms tuned for emotional clarity.",
      "Onboard neural audio engine for Spatial Audio and Adaptive EQ.",
    ],
  },
  {
    id: "controls",
    title: "Controls",
    bullets: [
      "Tap once to play/pause or answer a call.",
      "Tap twice to skip forward or end a call.",
      "Tap three times to rewind.",
      "Press and hold to access voice assistant.",
      "Automatic mute when removed, smart resume when worn.",
    ],
  },
  {
    id: "elements",
    title: "Built For The Elements",
    bullets: [
      "Rated IPX4 for sweat and weather resistance.",
      "Designed for long sessions, light activity, or relaxed stillness.",
    ],
  },
  {
    id: "battery",
    title: "Battery",
    bullets: [
      "Up to 36 hours total listening time with case.",
      "Up to 8.5 hours on a single charge.",
      "Fast charge: 10 minutes = 2 hours of play.",
      "USB-C charging + Qi-compatible wireless charging.",
      "LED status light + Find My compatible tone alert.",
    ],
  },
  {
    id: "connectivity",
    title: "Connectivity",
    bullets: [
      "Bluetooth® 5.3 low-latency audio.",
      "Multipoint connection with auto handoff.",
      "Seamless pairing across all your devices.",
    ],
  },
  {
    id: "materials",
    title: "Materials",
    bullets: [
      "100% recycled aluminum in internal frames.",
      "Bio-based mesh ear padding.",
      "Rare earth magnets sourced from reclaimed materials.",
      "Plastic-free, fiber-based packaging.",
      "Assembled in Zero Waste-certified facilities.",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability & Materials",
    bullets: [
      "Bio-based mesh ear padding.",
      "Rare earth magnets sourced from reclaimed materials.",
      "Plastic-free, fiber-based packaging.",
      "Assembled in Zero Waste-certified facilities.",
    ],
  },
];

export const compareFeatures: CompareFeature[] = [
  {
    id: "chip",
    label: "Custom Chip",
    icon: "chip",
    auraValue: "R1 Chip",
    flowValue: "R2 Chip",
  },
  {
    id: "noise",
    label: "Noise Cancellation",
    icon: "noise",
    auraValue: "2x more Active Noise Cancellation",
    flowValue: "Active Noise Cancellation",
  },
  {
    id: "spatial",
    label: "Spatial Audio",
    icon: "spatial",
    auraValue: "Personalized Spatial Audio",
    flowValue: "Personalized Spatial Audio",
  },
  {
    id: "audio",
    label: "Audio Fidelity",
    icon: "audio",
    auraValue: "Lossless Audio",
    flowValue: "None",
  },
  {
    id: "health",
    label: "Hearing Health",
    icon: "health",
    auraValue: "None",
    flowValue: "Hearing Test & Protection",
  },
  {
    id: "touch",
    label: "Controls",
    icon: "touch",
    auraValue: "None",
    flowValue: "Touch Sensor",
  },
  {
    id: "battery",
    label: "Battery Life",
    icon: "battery",
    auraValue: "Up to 17 hours",
    flowValue: "Up to 6 hours",
  },
  {
    id: "water",
    label: "Water Resistance",
    icon: "water",
    auraValue: "None",
    flowValue: "Water resistant",
  },
  {
    id: "mic",
    label: "Microphones",
    icon: "mic",
    auraValue: "5 microphones total",
    flowValue: "Dual beamforming mics",
  },
];

export const compareProducts = [auraProII, flowII];


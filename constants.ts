
import { Project } from './types';

const generateImages = (baseId: number, count: number) => {
  return Array.from({ length: count }, (_, i) => 
    `https://picsum.photos/1600/900?grayscale&blur=2&random=${baseId * 100 + i}`
  );
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AeroSpace Dashboard",
    category: "UI/UX Design",
    description: "A high-fidelity telemetry dashboard for next-gen commercial aviation monitoring systems, focusing on cognitive load reduction during critical flight phases.",
    imageUrl: "https://picsum.photos/800/1000?grayscale&blur=2",
    images: generateImages(1, 10),
    tags: ["Figma", "React", "Data Viz"],
    year: "2024",
    platforms: ["Desktop", "Tablet"],
    type: "Work"
  },
  {
    id: 2,
    title: "NeoBank Mobile",
    category: "Product Design",
    description: "Complete overhaul of a fintech application ecosystem, introducing decentralized identity verification and a modular widget system for personalized banking.",
    imageUrl: "https://picsum.photos/800/1001?grayscale&blur=2",
    images: generateImages(2, 10),
    tags: ["Figma", "Protopie"],
    year: "2023",
    platforms: ["iOS", "Android"],
    type: "Work"
  },
  {
    id: 3,
    title: "Synth-X VST",
    category: "Creative Coding",
    description: "An experimental audio plugin interface designed for granular synthesis. The UI uses procedural generation to visualize sound waves in real-time.",
    imageUrl: "https://picsum.photos/800/1002?grayscale&blur=2",
    images: generateImages(3, 10),
    tags: ["C++", "JUCE", "OpenGL"],
    year: "2024",
    platforms: ["Desktop", "VST3"],
    type: "Side Projects"
  },
  {
    id: 4,
    title: "Quantum Analytics",
    category: "Design System",
    description: "A comprehensive atomic design system built for a quantum computing research platform, ensuring consistency across complex scientific data tools.",
    imageUrl: "https://picsum.photos/800/1003?grayscale&blur=2",
    images: generateImages(4, 10),
    tags: ["Storybook", "React"],
    year: "2023",
    platforms: ["Web", "Electron"],
    type: "Work"
  },
  {
    id: 5,
    title: "Void Terminal Theme",
    category: "Interface Customization",
    description: "A high-contrast, minimal ZSH theme and terminal color scheme designed for developers working in low-light environments.",
    imageUrl: "https://picsum.photos/800/1004?grayscale&blur=2",
    images: generateImages(5, 10),
    tags: ["Shell", "Lua"],
    year: "2023",
    platforms: ["Linux", "macOS"],
    type: "Side Projects"
  },
  {
    id: 6,
    title: "Hyperloop Interface",
    category: "Interaction Design",
    description: "Passenger interface concepts for high-speed transit pods, prioritizing accessibility at speed and integrating AR wayfinding for stations.",
    imageUrl: "https://picsum.photos/800/1005?grayscale&blur=2",
    images: generateImages(6, 10),
    tags: ["After Effects", "Cinema 4D"],
    year: "2022",
    platforms: ["Embedded", "Touch"],
    type: "Work"
  },
  {
    id: 7,
    title: "Holo-Architect",
    category: "Spatial Computing",
    description: "AR application allowing architects to visualize blueprints at 1:1 scale on construction sites using mixed reality headsets.",
    imageUrl: "https://picsum.photos/800/1006?grayscale&blur=2",
    images: generateImages(7, 10),
    tags: ["Unity", "C#", "ARKit"],
    year: "2022",
    platforms: ["VisionOS"],
    type: "Side Projects"
  },
  {
    id: 8,
    title: "Medical AI Triage",
    category: "Service Design",
    description: "An AI-assisted intake system for emergency rooms, streamlining patient data entry and prioritizing cases based on vital sign anomalies.",
    imageUrl: "https://picsum.photos/800/1007?grayscale&blur=2",
    images: generateImages(8, 10),
    tags: ["Figma", "Python"],
    year: "2021",
    platforms: ["Web", "Tablet"],
    type: "Work"
  },
  {
    id: 9,
    title: "Generative Art Tool",
    category: "Web Experiment",
    description: "A browser-based canvas allowing users to create abstract geometry using noise algorithms and export them as vector SVGs.",
    imageUrl: "https://picsum.photos/800/1008?grayscale&blur=2",
    images: generateImages(9, 10),
    tags: ["Three.js", "WebGL"],
    year: "2021",
    platforms: ["Web"],
    type: "Side Projects"
  },
  {
    id: 10,
    title: "Autonomous Logistics",
    category: "System Design",
    description: "Fleet management software for autonomous trucking, providing real-time route optimization and remote takeover capabilities.",
    imageUrl: "https://picsum.photos/800/1009?grayscale&blur=2",
    images: generateImages(10, 10),
    tags: ["React", "Mapbox"],
    year: "2020",
    platforms: ["Desktop"],
    type: "Work"
  }
];

export const SPARE_PARTS = [
  { id: 1, title: "Glitch Shader Experiment", imageUrl: "https://picsum.photos/800/1200?grayscale&random=10" },
  { id: 2, title: "Neural Net Visualization", imageUrl: "https://picsum.photos/800/600?grayscale&random=11" },
  { id: 3, title: "Cyberpunk City Concept", imageUrl: "https://picsum.photos/800/800?grayscale&random=12" },
  { id: 4, title: "Data Flow Diagram", imageUrl: "https://picsum.photos/800/1000?grayscale&random=13" },
  { id: 5, title: "Mech Part Study", imageUrl: "https://picsum.photos/800/500?grayscale&random=14" },
  { id: 6, title: "UI Fragment 001", imageUrl: "https://picsum.photos/800/900?grayscale&random=15" },
  { id: 7, title: "Abstract Mesh", imageUrl: "https://picsum.photos/800/700?grayscale&random=16" },
  { id: 8, title: "Void Texture", imageUrl: "https://picsum.photos/800/1100?grayscale&random=17" },
  { id: 9, title: "Scanline Logic", imageUrl: "https://picsum.photos/800/600?grayscale&random=18" },
  { id: 10, title: "Interface Glitch", imageUrl: "https://picsum.photos/800/700?grayscale&random=19" },
  { id: 11, title: "Typeface Study", imageUrl: "https://picsum.photos/800/900?grayscale&random=20" },
  { id: 12, title: "Holographic Shader", imageUrl: "https://picsum.photos/800/1200?grayscale&random=21" },
  { id: 13, title: "Cyber Deck UI", imageUrl: "https://picsum.photos/800/600?grayscale&random=22" },
  { id: 14, title: "Wireframe Logic", imageUrl: "https://picsum.photos/800/800?grayscale&random=23" },
  { id: 15, title: "Network Node", imageUrl: "https://picsum.photos/800/500?grayscale&random=24" },
  { id: 16, title: "Code Fragment", imageUrl: "https://picsum.photos/800/1000?grayscale&random=25" },
  { id: 17, title: "Sensor Data", imageUrl: "https://picsum.photos/800/700?grayscale&random=26" },
  { id: 18, title: "Bot Response", imageUrl: "https://picsum.photos/800/400?grayscale&random=27" },
  { id: 19, title: "Signal Noise", imageUrl: "https://picsum.photos/800/1100?grayscale&random=28" },
  { id: 20, title: "System Boot", imageUrl: "https://picsum.photos/800/900?grayscale&random=29" },
];

export const FIELD_NOTES = [
  { 
    id: 1, 
    title: "The Ethics of AI Interfaces", 
    date: "Oct 12, 2024", 
    category: "Theory", 
    preview: "Exploring the moral implications of anthropomorphic design patterns in large language models and the responsibility of the designer in shaping perceived sentience." 
  },
  { 
    id: 2, 
    title: "Brutalism in 2025", 
    date: "Sep 28, 2024", 
    category: "Trend", 
    preview: "Why raw data exposure and structural transparency are becoming the ultimate signifiers of trust in fintech applications, replacing clean minimalism." 
  },
  { 
    id: 3, 
    title: "Haptic Feedback Loops", 
    date: "Aug 15, 2024", 
    category: "UX", 
    preview: "Designing for touch in a world that is increasingly moving towards spatial computing. How we can convey weight and texture through vibration." 
  },
  { 
    id: 4, 
    title: "Systemic Design Thinking", 
    date: "Jul 02, 2024", 
    category: "Process", 
    preview: "Moving beyond atomic design into molecular adaptive systems for enterprise scale. A look at how we built the Quantum Analytics design system." 
  },
  { 
    id: 5, 
    title: "The Death of the Modal", 
    date: "Jun 18, 2024", 
    category: "UI", 
    preview: "Argument for non-blocking inline editing and context-aware panels over disruptive overlays in productivity software." 
  },
];

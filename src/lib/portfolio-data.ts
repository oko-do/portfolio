export interface Experience {
  company: string;
  role: { en: string; ru: string };
  period: { en: string; ru: string };
  current?: boolean;
}

export interface Tool {
  name: string;
  category: "design" | "prototyping" | "collaboration" | "ai";
}

export const experience: Experience[] = [
  {
    company: "JustTrack",
    role: {
      en: "Senior Product Designer",
      ru: "Старший продуктовый дизайнер",
    },
    period: { en: "2025 — Present", ru: "2025 — настоящее время" },
    current: true,
  },
  {
    company: "Huawei",
    role: {
      en: "Lead Product Designer",
      ru: "Ведущий продуктовый дизайнер",
    },
    period: { en: "2024 — 2025", ru: "2024 — 2025" },
  },
  {
    company: "EPAM",
    role: {
      en: "Lead Experience Designer",
      ru: "Ведущий дизайнер",
    },
    period: { en: "2022 — 2024", ru: "2022 — 2024" },
  },
  {
    company: "EPAM",
    role: {
      en: "Senior UI/UX Designer",
      ru: "Старший UI/UX дизайнер",
    },
    period: { en: "2020 — 2022", ru: "2020 — 2022" },
  },
  {
    company: "TechWings",
    role: {
      en: "Senior Web Designer",
      ru: "Старший веб-дизайнер",
    },
    period: { en: "2019 — 2020", ru: "2019 — 2020" },
  },
];

export const tools: Tool[] = [
  { name: "Figma", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "Illustrator", category: "design" },
  { name: "After Effects", category: "design" },
  { name: "ProtoPie", category: "prototyping" },
  { name: "Framer", category: "prototyping" },
  { name: "Miro", category: "collaboration" },
  { name: "FigJam", category: "collaboration" },
  { name: "Notion", category: "collaboration" },
  { name: "Cinema 4D", category: "design" },
  { name: "Cursor", category: "ai" },
  { name: "Claude", category: "ai" },
];

export const clients = [
  "Huawei",
  "Google",
  "ADNOC",
  "Alcon",
  "McKesson",
  "EPAM",
  "JustTrack",
];

export const about = {
  name: "Konstantin Dolgov",
  role: {
    en: "Senior+ / Lead Product Designer",
    ru: "Senior+ / Ведущий продуктовый дизайнер",
  },
  location: {
    en: "Hamburg, Germany",
    ru: "Гамбург, Германия",
  },
  tagline: {
    en: "Designing complex enterprise products with user-centered approach",
    ru: "Проектирование сложных корпоративных продуктов с человекоцентричным подходом",
  },
  expertise: [
    "UI Systems Design",
    "Legacy Revamp",
    "Design Scaling",
    "User Research",
    "User-Centered Design",
  ],
  email: "kons.dolgov@gmail.com",
  telegram: "@KonstantinDol",
  linkedin: "https://linkedin.com/in/konstantindolgov",
  cvLink: "https://docs.google.com",
};

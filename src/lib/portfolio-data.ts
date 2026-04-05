export interface ExperienceRole {
  role: { en: string; ru: string };
  period: { en: string; ru: string };
}

export interface Experience {
  company: string;
  description: { en: string; ru: string };
  roles: ExperienceRole[];
  tasks: { en: string[]; ru: string[] };
  logo?: string;
  current?: boolean;
}

export interface Tool {
  name: string;
  category: "design" | "prototyping" | "collaboration" | "ai";
  icon: string;
}

export const experience: Experience[] = [
  {
    company: "JustTrack",
    logo: "/images/logos/justtrack.svg",
    description: {
      en: "Comprehensive mobile measurement and marketing automation platform (MMP+) that empowers app and game publishers to scale globally by unifying advanced attribution, real-time monetization analytics, and automated campaign optimization into a single, high-performance dashboard.",
      ru: "Комплексная платформа мобильных измерений и автоматизации маркетинга (MMP+), которая помогает издателям приложений и игр масштабироваться глобально, объединяя продвинутую атрибуцию, аналитику монетизации в реальном времени и автоматизированную оптимизацию кампаний в единый высокопроизводительный дашборд.",
    },
    roles: [
      {
        role: {
          en: "Senior Product Designer",
          ru: "Senior Product designer",
        },
        period: { en: "2025 — Present", ru: "2025 — наст. время" },
      },
    ],
    tasks: {
      en: [
        "I build a scalable design system to keep the platform consistent, fast, and easy to use.",
        "Reimagining the navigation to be app-centric, ensuring users can manage their growth and analytics from a more intuitive, product-focused perspective.",
        'I am as well redesigning "Smart Diagnostic Insights" to help users instantly understand why their performance is changing. By organizing notifications and highlighting only the most important issues, I help users avoid "alert fatigue" and take action through simple, data-driven tools.',
      ],
      ru: [
        "Создание масштабируемой дизайн-системы для обеспечения консистентности, быстродействия и удобства платформы.",
        "Переосмысление навигации с приложение-ориентированным подходом, позволяющим пользователям управлять ростом и аналитикой с более интуитивной, продуктовой перспективы.",
        'Редизайн "Smart Diagnostic Insights" для мгновенного понимания изменений производительности. Организация уведомлений и выделение важнейших проблем помогает избежать "усталости от алертов" и принимать решения через простые, data-driven инструменты.',
      ],
    },
    current: true,
  },
  {
    company: "Huawei",
    logo: "/images/logos/huawei.svg",
    description: {
      en: "A technology company known for innovative solutions in information technology.",
      ru: "Технологическая компания, известная инновационными решениями в области информационных технологий",
    },
    roles: [
      {
        role: {
          en: "Lead Designer",
          ru: "Lead designer",
        },
        period: { en: "2024 — 2025", ru: "2024 — 2025" },
      },
    ],
    tasks: {
      en: [
        "Designing the IDE (Integrated Development Environment).",
        "Maintenance and improvement. Implementing new features.",
        "Research and competitive analysis.",
      ],
      ru: [
        "Проектирование дизайна IDE (интегрированной среды разработки).",
        "Поддержка и улучшение. Внедрение новых фич.",
        "Исследование и анализ конкурентов.",
      ],
    },
  },
  {
    company: "EPAM",
    logo: "/images/logos/epam.svg",
    description: {
      en: "A leading technology company specializing in software development and consulting.",
      ru: "Ведущая технологическая компания, специализирующаяся на разработке программного обеспечения и консалтинге",
    },
    roles: [
      {
        role: {
          en: "Lead Designer",
          ru: "Lead designer",
        },
        period: { en: "2022 — 2024", ru: "2022 — 2024" },
      },
    ],
    tasks: {
      en: [
        "Managing and coordinating the design team.",
        "Close collaboration with other departments.",
        "Implementing design thinking processes and increasing design-maturity.",
        "Conducting interviews.",
        "Creating and updating design systems.",
      ],
      ru: [
        "Управление и координация работы команды дизайнеров.",
        "Тесное сотрудничество с другими отделами.",
        "Внедрение процессов дизайнерского мышления и повышение design-maturity.",
        "Проведение собеседований.",
        "Создание и обновление дизайн-систем.",
      ],
    },
  },
  {
    company: "EPAM",
    logo: "/images/logos/epam.svg",
    description: {
      en: "A leading technology company specializing in software development and consulting.",
      ru: "Ведущая технологическая компания, специализирующаяся на разработке программного обеспечения и консалтинге",
    },
    roles: [
      {
        role: {
          en: "Senior UI/UX Designer",
          ru: "Senior UI/UX Designer",
        },
        period: { en: "2021 — 2022", ru: "2021 — 2022" },
      },
    ],
    tasks: {
      en: [
        "Tokenization.",
        "Requirements gathering.",
        "B2B user interfaces.",
        "Design reviews and mentoring.",
        "Optimization, accessibility.",
      ],
      ru: [
        "Токенизация.",
        "Сбор требований.",
        "Пользовательские интерфейсы B2B.",
        "Дизайн-ревью и наставничество.",
        "Оптимизация, аксессабилити.",
      ],
    },
  },
  {
    company: "TechWings",
    logo: "/images/logos/techwings.svg",
    description: {
      en: "Design and development of web services and mobile applications in real estate, finance, education, logistics, and e-commerce.",
      ru: "Дизайн и разработка веб-сервисов и мобильных приложений в направлениях недвижимости, финансов, образования, логистики и e-commerce",
    },
    roles: [
      {
        role: {
          en: "Senior Web Designer",
          ru: "Senior Web Designer",
        },
        period: { en: "2019 — 2021", ru: "2019 — 2021" },
      },
    ],
    tasks: {
      en: [
        "Designing web and mobile applications.",
        "Clarifying client and user needs, reworking previous solutions.",
        "Collaboration and optimization of work with the development team.",
        "Presenting solutions.",
        "Mentoring juniors.",
      ],
      ru: [
        "Проектирование веб и мобильных приложений.",
        "Уточнение потребностей клиентов и пользователей, переработка предыдущих решений.",
        "Взаимодействие и оптимизация работы с командой разработчиков.",
        "Презентация решений.",
        "Менторинг джунов.",
      ],
    },
  },
];

export const tools: Tool[] = [
  { name: "Figma", category: "design", icon: "/images/tools/figma.svg" },
  { name: "Illustrator", category: "design", icon: "/images/tools/illustrator.svg" },
  { name: "After Effects", category: "design", icon: "/images/tools/after-effects.svg" },
  { name: "Framer", category: "prototyping", icon: "/images/tools/framer.svg" },
  { name: "Miro", category: "collaboration", icon: "/images/tools/miro.svg" },
  { name: "Cinema 4D", category: "design", icon: "/images/tools/cinema4d.svg" },
  { name: "Cursor", category: "ai", icon: "/images/tools/cursor.svg" },
  { name: "Claude", category: "ai", icon: "/images/tools/claude.svg" },
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
  linkedin: "https://www.linkedin.com/in/okodo",
  cvLink: "https://docs.google.com",
};

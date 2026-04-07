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
      en: "Mobile measurement and marketing automation platform unifying attribution, monetization analytics, and campaign optimization.",
      ru: "Платформа мобильных измерений и автоматизации маркетинга: атрибуция, аналитика монетизации и оптимизация кампаний.",
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
        "Integrated Storybook into the design-to-development handoff process, minimizing tech debt and component discrepancies.",
      ],
      ru: [
        "Спроектировал и внедрил дизайн-систему, которая обеспечила консистентность платформы и ускорила темпы разработки в 3 раза.",
        "Пересмотрел навигацию, применив приложение-ориентированный подход. Рост удовлетворённости пользователей (Customer Satisfaction Score) на 40%.",
        "Провёл редизайн модуля диагностики. Организация уведомлений и приоритизация данных помогли устранить «усталость от алертов», сделав принятие решений быстрым и data-driven.",
        "Интегрировал Storybook в процесс передачи дизайна в разработку, минимизировав технический долг и расхождения в компонентах.",
      ],
    },
    current: true,
  },
  {
    company: "Huawei",
    logo: "/images/logos/huawei.svg",
    description: {
      en: "BigTech company providing developer tools and cloud infrastructure.",
      ru: "BigTech-компания, инструменты для разработчиков и облачная инфраструктура.",
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
        "Conducted deep benchmarking and competitive analysis (VS Code, IntelliJ IDEA, Xcode) to identify best patterns and adapt them to internal requirements.",
      ],
      ru: [
        "Проводил глубокий бенчмаркинг и конкурентный анализ (VS Code, IntelliJ IDEA, Xcode) для выявления лучших паттернов и их адаптации под внутренние задачи.",
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
      ru: "Агентство дизайна и разработки веб-сервисов и мобильных приложений в сферах недвижимости, финансов, образования, логистики и e-commerce.",
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
  // { name: "Adobe", category: "design", icon: "/images/tools/adobe.svg" },
  // { name: "After Effects", category: "design", icon: "/images/tools/after-effects.svg" },
  { name: "AI Studio", category: "ai", icon: "/images/tools/ai-studio.svg" },
  { name: "Cinema 4D", category: "design", icon: "/images/tools/cinema4d.svg" },
  { name: "Claude", category: "ai", icon: "/images/tools/claude.svg" },
  { name: "Cursor", category: "ai", icon: "/images/tools/cursor.svg" },
  { name: "Dovetail", category: "collaboration", icon: "/images/tools/dovetail.svg" },
  { name: "Figma", category: "design", icon: "/images/tools/figma.svg" },
  { name: "Framer", category: "prototyping", icon: "/images/tools/framer.svg" },
  { name: "GitHub", category: "collaboration", icon: "/images/tools/github.svg" },
  { name: "Illustrator", category: "design", icon: "/images/tools/illustrator.svg" },
  { name: "Linear", category: "collaboration", icon: "/images/tools/linear.svg" },
  { name: "Maze", category: "prototyping", icon: "/images/tools/maze.svg" },
  { name: "Midjourney", category: "ai", icon: "/images/tools/midjourney.svg" },
  { name: "Miro", category: "collaboration", icon: "/images/tools/miro.svg" },
  { name: "OpenCode", category: "ai", icon: "/images/tools/opencode.svg" },
];

export const clients: { name: string; logo: string; url: string }[] = [
  { name: "ADNOC", logo: "/images/clients/adnoc.svg", url: "https://www.adnoc.ae/" },
  { name: "Alcon", logo: "/images/clients/alcon.svg", url: "https://www.alcon.com/" },
  { name: "Bacardi", logo: "/images/clients/bacardi.svg", url: "https://www.bacardi.com/" },
  { name: "Coursera", logo: "/images/clients/coursera.svg", url: "https://coursera.org/" },
  { name: "Goethe Institute", logo: "/images/clients/goethe.svg", url: "https://www.goethe.de/en/index.html" },
  { name: "Google", logo: "/images/clients/google.svg", url: "https://abc.xyz/" },
  { name: "McKesson", logo: "/images/clients/mckesson.svg", url: "https://www.mckesson.com/" },
  { name: "Sonifi", logo: "/images/clients/sonifi.svg", url: "https://www.sonifi.com/" },
];

export const about = {
  name: {
    en: "Konstantin Dolgov",
    ru: "Константин Долгов",
  },
  role: {
    en: "Lead Product Designer",
    ru: "Lead продуктовый дизайнер",
  },
  location: {
    en: "Hamburg, Germany",
    ru: "Гамбург, Германия",
  },
  tagline: {
    en: "Designing complex enterprise products with user-centered approach",
    ru: "Проектирование сложных корпоративных продуктов с\u00A0человекоцентричным подходом",
  },
  expertise: [
    "AI-Driven",
    "Design Operations",
    "Design Systems",
    "Enterprise SaaS / B2B",
    "Mentoring",
  ],
  email: "kons.dolgov@gmail.com",
  telegram: "@KonstantinDol",
  linkedin: "https://www.linkedin.com/in/okodo",
  cvLink: "https://docs.google.com",
};

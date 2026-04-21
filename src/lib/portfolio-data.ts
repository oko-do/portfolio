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
        "Designing concepts and prototypes with AI tools integrated into the design pipeline.",
      ],
      ru: [
        "Спроектировал и внедрил дизайн-систему, которая обеспечила консистентность платформы и ускорила темпы разработки в 3 раза.",
        "Осуществил полный ре-дизайн навигации, интегрировав app-centric подход.",
        "Провёл редизайн модуля диагностики. Организация уведомлений и приоритизация данных помогли устранить «усталость от алертов», сделав принятие решений быстрым и data-driven.",
        "Интегрировал Storybook в процесс передачи дизайна в разработку, минимизировав технический долг и расхождения в компонентах.",
        "Проектировал концепты и прототипы с внедрением AI-инструментов в дизайн-пайплайн.",
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
        "Led the full design cycle of CodeArts IDE for Java and Python — from information architecture to final UI.",
        "Conducted deep benchmarking and competitive analysis (VS Code, IntelliJ IDEA, Xcode) to adopt best industry patterns.",
        "Designed a scalable design library focused on Developer Experience (DX) and support for complex engineering scenarios.",
        "Ensured continuous usability and interface performance improvements based on user feedback analysis and metrics.",
        "Built a process of close collaboration with engineering teams (30+ developers) to balance powerful functionality and ease of use.",
      ],
      ru: [
        "Руководил полным циклом проектирования CodeArts IDE для Java и Python — от информационной архитектуры до финального UI.",
        "Проводил глубокий бенчмаркинг и конкурентный анализ (VS Code, IntelliJ IDEA, Xcode) для внедрения лучших индустриальных паттернов.",
        "Спроектировал масштабируемую дизайн-библиотеку, сфокусированную на Developer Experience (DX) и поддержке сложных инженерных сценариев.",
        "Обеспечивал непрерывное улучшение юзабилити и производительности интерфейса на основе анализа пользовательского фидбека и метрик.",
        "Выстроил процесс тесного взаимодействия с инженерными командами (30+ разработчиков) для соблюдения баланса между мощным функционалом и простотой использования.",
      ],
    },
  },
  {
    company: "EPAM",
    logo: "/images/logos/epam.svg",
    description: {
      en: "Global technology company specializing in software development, information services and consulting.",
      ru: "Глобальная технологическая компания, специализирующаяся на разработке ПО, информационных сервисах и консалтинге.",
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
        "Managed a distributed design team, overseeing professional development and mentorship of specialists.",
        "Built processes for close collaboration with engineers, business analysts and client-side stakeholders.",
        "Implemented Design Thinking methodologies and optimized internal processes to raise overall design maturity.",
        "Built the project design team: conducted technical interviews and oversaw the onboarding process.",
        "Led the evolution and maintenance of complex design systems to ensure consistency across large Enterprise ecosystems.",
      ],
      ru: [
        "Управлял распределенной командой дизайнеров, отвечая за профессиональное развитие и менторство специалистов.",
        "Выстроил процессы плотного взаимодействия с инженерами, бизнес-аналитиками и стейкхолдерами на стороне клиента.",
        "Внедрил методологии Design Thinking и оптимизировал внутренние процессы для повышения общего уровня дизайн-зрелости.",
        "Формировал дизайн-команду проекта: проводил технические собеседования и курировал процесс онбординга.",
        "Руководил развитием и поддержкой комплексных дизайн-систем для обеспечения консистентности в крупных Enterprise-экосистемах.",
      ],
    },
  },
  {
    company: "EPAM",
    logo: "/images/logos/epam.svg",
    description: {
      en: "Global technology company specializing in software development, information services and consulting.",
      ru: "Глобальная технологическая компания, специализирующаяся на разработке ПО, информационных сервисах и консалтинге.",
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
        "Designed and scaled design systems using advanced design token architecture.",
        "Managed requirements gathering and UX strategy development, translating business requests into functional specifications.",
        "Built complex interfaces for Enterprise ecosystems and high-load B2B products.",
        "Implemented Design QA processes: conducted systematic design reviews and mentored Junior/Middle specialists.",
        "Ensured interface inclusivity per accessibility standards (WCAG) and optimized user journey performance.",
      ],
      ru: [
        "Проектировал и масштабировал дизайн-системы с использованием продвинутой архитектуры дизайн-токенов.",
        "Управлял этапом сбора требований и разработкой UX-стратегии, переводя запросы бизнеса в функциональные спецификации.",
        "Создавал сложные интерфейсы для Enterprise-экосистем и высоконагруженных B2B-продуктов.",
        "Внедрял процессы Design QA: проводил систематические дизайн-ревью и менторил Junior/Middle специалистов.",
        "Обеспечивал инклюзивность интерфейсов согласно стандартам доступности (WCAG) и оптимизировал производительность пользовательских путей.",
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
        "Responsible for the full end-to-end design cycle of web and mobile products in Fintech, E-commerce and Real Estate.",
        "Transformed business requirements into intuitive interfaces, conducting deep redesign of legacy solutions based on user needs analysis.",
        "Managed stakeholder communication: from initial requirements gathering to successful defense of design concepts to clients.",
        "Supervised the professional growth of Junior designers and ensured quality control of visual and UX solutions within the team.",
      ],
      ru: [
        "Отвечал за полный цикл проектирования (End-to-end) веб- и мобильных продуктов в сферах Fintech, E-commerce и Real Estate.",
        "Трансформировал бизнес-требования в интуитивные интерфейсы, проводя глубокий редизайн legacy-решений на основе анализа потребностей пользователей.",
        "Управлял коммуникацией со стейкхолдерами: от сбора первичных требований до успешной защиты дизайн-концепций перед заказчиками.",
        "Курировал профессиональный рост Junior-дизайнеров и обеспечивал контроль качества визуальных и UX-решений в команде.",
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
  behance: "https://www.behance.net/keloid",
  cvLink: {
    ru: "https://drive.google.com/file/d/12yEiiAcqMRP82Nk6_LgrvRvf-4jw2F5h/view?usp=share_link",
    en: "https://drive.google.com/file/d/1UNk3-PdmLsFQvaBJrqeTXWR79CGx9I2S/view?usp=share_link",
  },
};

import type { Locale } from "@/i18n/routing";

type Localized<T> = Record<Locale, T>;

export interface ExperienceRole {
  role: Localized<string>;
  period: Localized<string>;
}

export interface Experience {
  company: string;
  description: Localized<string>;
  roles: ExperienceRole[];
  tasks: Localized<string[]>;
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
      de: "Plattform für Mobile Measurement und Marketingautomatisierung, die Attribution, Monetarisierungsanalysen und Kampagnenoptimierung vereint.",
      en: "Mobile measurement and marketing automation platform unifying attribution, monetization analytics, and campaign optimization.",
      ru: "Платформа мобильных измерений и автоматизации маркетинга: атрибуция, аналитика монетизации и оптимизация кампаний.",
    },
    roles: [
      {
        role: {
          de: "Senior Product Designer",
          en: "Senior Product Designer",
          ru: "Senior Product designer",
        },
        period: { de: "2025 – 2026", en: "2025 – 2026", ru: "2025 – 2026" },
      },
    ],
    tasks: {
      de: [
        "Ich entwickelte ein skalierbares Designsystem, das die Plattform konsistent, schnell und benutzerfreundlich macht und die Umsetzungszeit deutlich verkürzt. Bestehende UI- und UX-Muster wurden neu gestaltet, damit Nutzer Wachstum und Analysen in einem intuitiveren, aufgabenorientierten Ablauf steuern können.",
        "Ich gestaltete „Smart Diagnostic Insights“, damit Nutzer Leistungsänderungen sofort verstehen. Einfache, datenbasierte Werkzeuge reduzieren die Überlastung durch Benachrichtigungen.",
        "Ich integrierte Storybook in die Übergabe vom Design an die Entwicklung und reduzierte dadurch technische Altlasten und Abweichungen bei Komponenten.",
        "Ich entwickelte Konzepte und Prototypen mit KI-Werkzeugen, die direkt in den Designprozess eingebunden sind.",
      ],
      en: [
        "Built a scalable design system to keep the platform consistent, fast, easy-to-use and significantly reducing delivery time. Reimagined legacy UI and UX patterns, ensuring users can manage their growth and analytics from a more intuitive, task-oriented workflow.",
        'Designed "Smart Diagnostic Insights" to help users understand performance changes instantly, reducing "alert fatigue" through simple, data-driven tools.',
        "Integrated Storybook into the design-to-development handoff process, minimizing tech debt and component discrepancies.",
        "Designed concepts and prototypes utilizing AI tools integrated directly into the design pipeline.",
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
      de: "Technologieunternehmen mit Entwicklerwerkzeugen und Cloud-Infrastruktur.",
      en: "BigTech company providing developer tools and cloud infrastructure.",
      ru: "BigTech-компания, инструменты для разработчиков и облачная инфраструктура.",
    },
    roles: [
      {
        role: {
          de: "Lead Designer",
          en: "Lead Designer",
          ru: "Lead designer",
        },
        period: { de: "2024 — 2025", en: "2024 — 2025", ru: "2024 — 2025" },
      },
    ],
    tasks: {
      de: [
        "Ich leitete den gesamten Designzyklus von CodeArts IDE für Java und Python – von der Informationsarchitektur bis zur finalen Oberfläche.",
        "Ich führte umfassendes Benchmarking und Wettbewerbsanalysen durch (VS Code, IntelliJ IDEA, Xcode), um bewährte Branchenmuster zu übernehmen.",
        "Ich entwickelte eine skalierbare Designbibliothek mit Schwerpunkt auf Developer Experience (DX) und der Unterstützung komplexer technischer Szenarien.",
        "Ich sorgte für kontinuierliche Verbesserungen der Benutzerfreundlichkeit und der Oberflächenleistung auf Basis von Nutzerfeedback und Kennzahlen.",
        "Ich etablierte eine enge Zusammenarbeit mit Entwicklungsteams mit über 30 Entwicklern, um leistungsfähige Funktionen mit einfacher Bedienung zu verbinden.",
      ],
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
      de: "Globales Technologieunternehmen mit Schwerpunkt auf Softwareentwicklung, Informationsdiensten und Beratung.",
      en: "Global technology company specializing in software development, information services and consulting.",
      ru: "Глобальная технологическая компания, специализирующаяся на разработке ПО, информационных сервисах и консалтинге.",
    },
    roles: [
      {
        role: {
          de: "Lead Designer",
          en: "Lead Designer",
          ru: "Lead designer",
        },
        period: { de: "2022 — 2024", en: "2022 — 2024", ru: "2022 — 2024" },
      },
    ],
    tasks: {
      de: [
        "Ich leitete ein verteiltes Designteam und verantwortete die fachliche Entwicklung und das Mentoring der Teammitglieder.",
        "Ich etablierte Prozesse für die enge Zusammenarbeit mit Entwicklern, Business Analysts und Stakeholdern auf Kundenseite.",
        "Ich führte Design-Thinking-Methoden ein und optimierte interne Prozesse, um den Designreifegrad insgesamt zu erhöhen.",
        "Ich baute das Designteam des Projekts auf, führte Fachinterviews und betreute das Onboarding.",
        "Ich leitete die Weiterentwicklung und Pflege komplexer Designsysteme, um Konsistenz in großen Unternehmensökosystemen sicherzustellen.",
      ],
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
      de: "Globales Technologieunternehmen mit Schwerpunkt auf Softwareentwicklung, Informationsdiensten und Beratung.",
      en: "Global technology company specializing in software development, information services and consulting.",
      ru: "Глобальная технологическая компания, специализирующаяся на разработке ПО, информационных сервисах и консалтинге.",
    },
    roles: [
      {
        role: {
          de: "Senior UI/UX Designer",
          en: "Senior UI/UX Designer",
          ru: "Senior UI/UX Designer",
        },
        period: { de: "2021 — 2022", en: "2021 — 2022", ru: "2021 — 2022" },
      },
    ],
    tasks: {
      de: [
        "Ich entwarf und skalierte Designsysteme mit einer fortgeschrittenen Architektur für Design-Tokens.",
        "Ich verantwortete die Anforderungsaufnahme und die UX-Strategie und übersetzte geschäftliche Anforderungen in funktionale Spezifikationen.",
        "Ich gestaltete komplexe Oberflächen für Unternehmensökosysteme und stark ausgelastete B2B-Produkte.",
        "Ich führte Design-QA-Prozesse ein, prüfte Entwürfe systematisch und betreute Junior- und Mid-Level-Designer als Mentor.",
        "Ich stellte inklusive Oberflächen gemäß den WCAG-Standards sicher und optimierte die Effizienz der Nutzerwege.",
      ],
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
      de: "Design und Entwicklung von Webdiensten und mobilen Anwendungen für Immobilien, Finanzen, Bildung, Logistik und E-Commerce.",
      en: "Design and development of web services and mobile applications in real estate, finance, education, logistics, and e-commerce.",
      ru: "Агентство дизайна и разработки веб-сервисов и мобильных приложений в сферах недвижимости, финансов, образования, логистики и e-commerce.",
    },
    roles: [
      {
        role: {
          de: "Senior Web Designer",
          en: "Senior Web Designer",
          ru: "Senior Web Designer",
        },
        period: { de: "2019 — 2021", en: "2019 — 2021", ru: "2019 — 2021" },
      },
    ],
    tasks: {
      de: [
        "Ich verantwortete den gesamten Designzyklus von Web- und Mobilprodukten in den Bereichen Fintech, E-Commerce und Immobilien.",
        "Ich übersetzte Geschäftsanforderungen in intuitive Oberflächen und gestaltete bestehende Lösungen anhand analysierter Nutzerbedürfnisse grundlegend neu.",
        "Ich steuerte die Kommunikation mit Stakeholdern von der ersten Anforderungsaufnahme bis zur erfolgreichen Präsentation der Designkonzepte beim Kunden.",
        "Ich begleitete die fachliche Entwicklung von Junior-Designern und sicherte die Qualität visueller und UX-Lösungen im Team.",
      ],
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
  {
    name: "Dovetail",
    category: "collaboration",
    icon: "/images/tools/dovetail.svg",
  },
  { name: "Figma", category: "design", icon: "/images/tools/figma.svg" },
  { name: "Framer", category: "prototyping", icon: "/images/tools/framer.svg" },
  {
    name: "GitHub",
    category: "collaboration",
    icon: "/images/tools/github.svg",
  },
  {
    name: "Illustrator",
    category: "design",
    icon: "/images/tools/illustrator.svg",
  },
  {
    name: "Linear",
    category: "collaboration",
    icon: "/images/tools/linear.svg",
  },
  { name: "Maze", category: "prototyping", icon: "/images/tools/maze.svg" },
  { name: "Midjourney", category: "ai", icon: "/images/tools/midjourney.svg" },
  { name: "Miro", category: "collaboration", icon: "/images/tools/miro.svg" },
  { name: "OpenCode", category: "ai", icon: "/images/tools/opencode.svg" },
];

export const clients: { name: string; logo: string; url: string }[] = [
  {
    name: "ADNOC",
    logo: "/images/clients/adnoc.svg",
    url: "https://www.adnoc.ae/",
  },
  {
    name: "Alcon",
    logo: "/images/clients/alcon.svg",
    url: "https://www.alcon.com/",
  },
  {
    name: "Bacardi",
    logo: "/images/clients/bacardi.svg",
    url: "https://www.bacardi.com/",
  },
  {
    name: "Coursera",
    logo: "/images/clients/coursera.svg",
    url: "https://coursera.org/",
  },
  {
    name: "Goethe Institute",
    logo: "/images/clients/goethe.svg",
    url: "https://www.goethe.de/en/index.html",
  },
  {
    name: "Google",
    logo: "/images/clients/google.svg",
    url: "https://abc.xyz/",
  },
  {
    name: "McKesson",
    logo: "/images/clients/mckesson.svg",
    url: "https://www.mckesson.com/",
  },
  {
    name: "Sonifi",
    logo: "/images/clients/sonifi.svg",
    url: "https://www.sonifi.com/",
  },
];

export const about = {
  name: {
    de: "Konstantin Dolgov",
    en: "Konstantin Dolgov",
    ru: "Константин Долгов",
  },
  role: {
    de: "Senior / Lead Product Designer",
    en: "Senior / Lead Product Designer",
    ru: "Senior / Lead продуктовый дизайнер",
  },
  location: {
    de: "Hamburg, Deutschland",
    en: "Hamburg, Germany",
    ru: "Гамбург, Германия",
  },
  tagline: {
    de: "Komplexe Unternehmensprodukte nutzerzentriert gestalten",
    en: "Designing complex enterprise products with user-centered approach",
    ru: "Проектирование сложных корпоративных продуктов с\u00A0человекоцентричным подходом",
  },
  expertise: {
    en: [
      "AI-Driven",
      "Design Operations",
      "Design Systems",
      "Enterprise SaaS / B2B",
      "Mentoring",
    ],
    ru: [
      "AI-Driven",
      "Design Operations",
      "Design Systems",
      "Enterprise SaaS / B2B",
      "Mentoring",
    ],
    de: [
      "KI-gestützt",
      "Design Operations",
      "Designsysteme",
      "Enterprise SaaS / B2B",
      "Mentoring",
    ],
  },
  email: "kons.dolgov@gmail.com",
  telegram: "@KonstantinDol",
  linkedin: "https://www.linkedin.com/in/okodo",
  behance: "https://www.behance.net/keloid",
  cvLink: {
    ru: "https://drive.google.com/file/d/12yEiiAcqMRP82Nk6_LgrvRvf-4jw2F5h/view?usp=share_link",
    de: "https://drive.google.com/drive/folders/1BydtE8dhFxW2jO0ZrR4FAYZEboO27Kbn?usp=sharing",
    en: "https://drive.google.com/drive/folders/1BydtE8dhFxW2jO0ZrR4FAYZEboO27Kbn?usp=sharing",
  },
};

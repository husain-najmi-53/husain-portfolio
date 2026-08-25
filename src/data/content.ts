export const profile = {
  name: "Husain Najmi",
  role: "Full-Stack Developer (MERN) · Odoo Developer",
  location: "Pune, Maharashtra, India",
  email: "husainnajmi515253@gmail.com",
  github: "https://github.com/husain-najmi-53",
  linkedin: "https://www.linkedin.com/in/husainnajmi07/",
  tagline:
    "I build and ship real-world web and mobile products \u2014 from ERP features at work to BizMate, my own business-tools platform, on the side.",
  about:
    "Full-stack developer with hands-on experience building and deploying real-world web and mobile applications across the full SDLC. I hold an MCA and currently work as a Software Developer on Odoo/ERP systems, and build independent projects like BizMate and UtilVerse using the MERN stack.",
};

export const topSkills = ["Dart", "Flutter", "Python", "React"];

export const stack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Platforms",
    items: ["Node.js", "Express.js", "Supabase", "Odoo", "PHP"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Tools & Practice",
    items: ["Git", "GitHub", "Zustand", "Agile", "SDLC"],
  },
];

export type Build = {
  id: string;
  status: "IN PRODUCTION" | "PUBLISHED" | "ARCHIVED";
  name: string;
  timeline: string;
  role: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  flagship?: boolean;
};

export const builds: Build[] = [
  {
    id: "bizmate",
    status: "PUBLISHED",
    name: "BizMate",
    timeline: "2026 \u2014 ongoing",
    role: "Solo builder, full-stack",
    description:
      "A free, web-based toolkit for Indian freelancers and small businesses \u2014 GST calculator, invoice generator, quotation generator, and saved-document management, with auth-gated profile auto-fill and a full PWA setup.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
    ],
    links: [{ label: "Visit live site", href: "https://mybizmate.vercel.app" }],
    flagship: true,
  },
  {
    id: "hmcreations53",
    status: "PUBLISHED",
    name: "HMcreations53",
    timeline: "2026 \u2014 ongoing",
    role: "Solo builder, full-stack",
    description:
      'My freelance dev-studio brand \u2014 a landing page showcasing web, mobile, and custom development services, with a live projects showcase, a working contact form, and a custom hexagonal "HM" logo system.',
    stack: ["React", "TypeScript", "Vite", "Fraunces", "Inter", "Web3Forms"],
    links: [
      { label: "Visit live site", href: "https://hmcreations53.vercel.app" },
    ],
  },
  {
    id: "utilverse",
    status: "PUBLISHED",
    name: "UtilVerse",
    timeline: "Jul 2023 \u2014 Apr 2024",
    role: "Solo builder",
    description:
      "An Android multi-utility app built to cut daily friction \u2014 calculators, task managers, and schedulers bundled into one productivity tool, built on a structured Flutter project workflow.",
    stack: ["Flutter", "Dart"],
    links: [{ label: "Download APK", href: "/downloads/utilverse.apk" }],
  },
  {
    id: "autoinsure",
    status: "PUBLISHED",
    name: "Autoinsure",
    timeline: "Jul 2025 \u2014 Oct 2025",
    role: "Software Engineer Intern, NBK Software Solutions",
    description:
      "Contributed to the end-to-end development of a production-ready fintech mobile app in Flutter, deployed on the Google Play Store, across the full SDLC including testing, bug-fixing, and technical documentation.",
    stack: ["Flutter", "Dart"],
    links: [],
  },
  {
    id: "life-unscripted",
    status: "ARCHIVED",
    name: "Life Unscripted",
    timeline: "Oct 2022 \u2014 Feb 2023",
    role: "Solo builder",
    description:
      "A clean, minimal blogging website built for first-time bloggers \u2014 CRUD post management, authentication, and a deliberately lightweight footprint for fast page loads.",
    stack: ["HTML5", "CSS3", "PHP"],
    links: [],
  },
];

export type LogEntry = {
  date: string;
  title: string;
  org: string;
  detail: string;
  type: "work" | "education";
  badge: string;
  skills: string[];
  current?: boolean;
  highlight?: string;
};

export const log: LogEntry[] = [
  {
    date: "Feb 2026 — Present",
    title: "Software Developer",
    org: "Axanta Business Solutions (Axanta ERP)",
    detail:
      "Developing new features, resolving production bugs, and maintaining core business modules on enterprise Odoo ERP systems.",
    type: "work",
    badge: "Full-time",
    skills: ["Odoo", "Python", "ERP Systems", "PostgreSQL", "Business Logic"],
    current: true,
  },
  {
    date: "Jul 2025 — Oct 2025",
    title: "Software Engineer Intern",
    org: "NBK Software Solutions",
    detail:
      "Contributed to the end-to-end development of the Autoinsure fintech mobile app in Flutter through to Google Play Store publication for Bhartiya Bima Fintech — covering feature development, QA testing, bug-fixing, and technical documentation.",
    type: "work",
    badge: "Internship",
    skills: ["Flutter", "Dart", "Fintech", "Play Store", "SDLC", "Git"],
  },
  {
    date: "2024 — 2026",
    title: "Master of Computer Applications (MCA)",
    org: "Sinhgad Institute of Business Administration and Research (SIBAR)",
    detail:
      "Advanced coursework covering Software Architecture, Full-Stack Web Technologies, Database Systems, and Cloud-native Development.",
    type: "education",
    badge: "Postgraduate",
    highlight: "80.12% Score",
    skills: ["Software Engineering", "Full-Stack Dev", "Database Design", "Algorithms"],
  },
  {
    date: "2021 — 2024",
    title: "BBA (Computer Application) / BCA",
    org: "Abeda Inamdar Senior College of Arts, Science and Commerce",
    detail:
      "Dual-titled degree in Web Development and App Development with strong foundations in object-oriented programming, data structures, and web technologies.",
    type: "education",
    badge: "Undergraduate",
    highlight: "90.92% Score",
    skills: ["Web Development", "App Development", "Java", "PHP", "Data Structures"],
  },
];

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
    "Full-stack developer with hands-on experience building and deploying real-world web and mobile applications across the complete SDLC \u2014 requirement analysis, development, testing, and deployment. I hold an MCA degree and currently work as a Jr. Software Developer on Odoo/ERP systems, while continuing to strengthen the MERN stack (MongoDB, Express.js, React.js, Node.js) and ship independent projects like BizMate and UtilVerse.",
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
    status: "IN PRODUCTION",
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

export const log = [
  {
    date: "Feb 2026 \u2014 Present",
    title: "Jr. Software Developer",
    org: "Axanta Business Solutions (Axanta ERP)",
    detail:
      "Working on Odoo-based ERP systems \u2014 developing new features, fixing day-to-day bugs, and general maintenance work across business modules.",
    current: true,
  },
  {
    date: "Jul 2025 \u2014 Oct 2025",
    title: "Software Engineer Intern",
    org: "NBK Software Solutions",
    detail:
      "Contributed to the end-to-end development of the Autoinsure mobile app in Flutter through to Play Store publication, for fintech client Bhartiya Bima Fintech \u2014 development, testing, bug-fixing, and technical documentation.",
  },
  {
    date: "2024 \u2014 2026",
    title: "Master of Computer Applications (MCA)",
    org: "Sinhgad Institute of Business Administration and Research (SIBAR)",
    detail: "Completed",
  },
  {
    date: "2021 \u2014 2024",
    title: "BBA (Computer Application) / BCA",
    org: "Abeda Inamdar Senior College of Arts, Science and Commerce",
    detail:
      "Dual-titled degree in Web Development and App Development. Graduated with 90.92%.",
  },
];

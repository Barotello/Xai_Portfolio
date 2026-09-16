/**
 * Portfolio Data - BARAN DEMİRTAŞ
 * AI Design Specialist | AI Design Evaluator | UI/UX & Product Design
 * GitHub: https://github.com/Barotello
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Baran Demirtaş",
    username: "Barotello",
    title: "AI Design Specialist | AI Design Evaluator | UI/UX & Product Design",
    headline: "Evaluating AI-generated designs against usability standards and crafting intuitive digital products end to end.",
    about: "Product designer and AI design evaluator who moves fluidly between UI/UX craft and structured design critique. Co-founded PrepLab.ai, an AI-driven CV coaching platform, and simplified overloaded operational interfaces at ASELSAN — evaluating and refining AI-generated designs against clear usability standards while shipping original interfaces end to end, from concept to functional React/Flutter builds.",
    status: "Ankara, Türkiye • Available for Opportunities & Advisory",
    location: "Ankara, Türkiye",
    email: "barandemirtas2@gmail.com",
    phone: "+90 531 267 3162",
    github: "https://github.com/Barotello",
    stats: [
      { value: "ASELSAN", label: "Systems Engineer (UX/UI)" },
      { value: "PrepLab.ai", label: "Co-Founder & Product Design" },
      { value: "METU '23", label: "B.Sc. Computer Education" },
      { value: "Google & Claude", label: "Certified UX & LLM Specialist" }
    ],
    socials: {
      github: "https://github.com/Barotello",
      email: "barandemirtas2@gmail.com",
      phone: "+90 531 267 3162",
      linkedin: "https://linkedin.com/in/Barotello",
      location: "Ankara, Türkiye"
    }
  },

  // Professional Experience (CV)
  experience: [
    {
      role: "Systems Engineer — UX/UI Responsibilities",
      company: "ASELSAN",
      period: "2023 – Present",
      location: "Ankara, Türkiye",
      highlights: [
        "Owned the interface design of command-and-control application screens and Zabbix monitoring dashboards; used Figma to simplify overloaded, detail-heavy screens into clearer, task-focused layouts.",
        "Reduced the number of clicks required to reach frequently used screens, shortening navigation paths and speeding up access to critical information.",
        "Modernized visually outdated screens to a consistent, current interface language across the tool suite.",
        "Authored technical requirement documents, installation guides, and end-user training materials for interface and process changes.",
        "Translated feedback from end users and the test team into targeted usability improvements."
      ]
    },
    {
      role: "Co-Founder & Product Designer",
      company: "PrepLab.ai",
      period: "2024 – Present",
      location: "Ankara / Remote",
      highlights: [
        "Co-founded PrepLab.ai, an AI-powered CV coaching platform helping students prepare for professional life; designed the full product end to end, from information architecture to every screen in the shipped interface.",
        "Built the interaction model for AI-driven CV feedback and coaching flows, translating an AI-generated evaluation into a clear, actionable on-screen experience for students.",
        "Designed and helped implement the front end using Figma for UI design and React for the production interface, working closely with the AI/backend integration."
      ]
    },
    {
      role: "Independent Product Designer & Developer",
      company: "Personal Projects",
      period: "2024 – Present",
      location: "Ankara / Global",
      highlights: [
        "Designed and prototyped a personal portfolio site with a distinctive liquid-glass aesthetic — custom cursor interactions, scroll-triggered reveals, and per-card spotlight effects — built single-file in HTML/CSS/JS with no external dependencies.",
        "Designed the visual body-map interface for BioMap (health-tracking app concept) and game UI/interaction flows for ReflexRush and Dedektif Modu, an AI-driven multiplayer detective game.",
        "Used generative AI tools across the design process for image, video, and visual-asset production, evaluating outputs for consistency, quality, and usability."
      ]
    }
  ],

  // Core Competencies (CV)
  competencies: [
    {
      category: "AI Design Evaluation",
      icon: "wand",
      desc: "Evaluating AI-generated outputs against ergonomics, qualitative rubrics, and usability standards.",
      skills: [
        "AI Output Evaluation",
        "Design Critique",
        "Qualitative Rubrics",
        "Data Annotation",
        "Edge-Case Detection",
        "Reference Generation",
        "Prompt Engineering"
      ]
    },
    {
      category: "Product & UI/UX Design",
      icon: "layers",
      desc: "Transforming complex user requirements into high-fidelity, accessible digital design systems.",
      skills: [
        "Visual Hierarchy",
        "Information Architecture",
        "Wireframing",
        "High-Fidelity Prototyping",
        "Design Systems (Tokens)",
        "Responsive Design",
        "Accessibility (WCAG AAA)"
      ]
    },
    {
      category: "Interactive & Web Design",
      icon: "activity",
      desc: "Crafting fluid micro-interactions, responsive interfaces, and playful game UI flows.",
      skills: [
        "Web Experiences",
        "Mobile Interfaces (HIG / Material)",
        "Game UI Design",
        "Interaction Design (IxD)",
        "User Flows",
        "Usability Testing"
      ]
    },
    {
      category: "Tools & Technology",
      icon: "cpu",
      desc: "Modern toolset bridging design concepts to functional, production-ready applications.",
      skills: [
        "Figma & FigJam",
        "Adobe Creative Cloud",
        "Claude & Claude Code",
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML/CSS",
        "Supabase",
        "Firebase",
        "Vercel",
        "GitHub",
        "Notion & Slack"
      ]
    }
  ],

  // Education (CV)
  education: {
    degree: "B.Sc. in Computer Education and Instructional Technology",
    school: "Middle East Technical University (METU)",
    year: "2023",
    location: "Ankara, Türkiye"
  },

  // Certifications (CV)
  certifications: [
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google / Coursera",
      details: "UX Research, Wireframing, Prototyping, High-Fidelity UI Design, Design Systems, Accessibility, Usability Testing"
    },
    {
      name: "Anthropic Claude Certifications",
      issuer: "Anthropic",
      details: "Claude Code in Action, AI Fluency: Framework and Foundations"
    },
    {
      name: "The AI Filmmaking Pipeline",
      issuer: "Higgsfield AI",
      details: "Generative AI visual asset production, storyboard creation, and cinematic pipeline workflows"
    },
    {
      name: "Google Data Analytics Foundations",
      issuer: "Google",
      details: "Data-driven decision making, analytical problem solving, and quantitative foundations"
    }
  ],

  // Selected Works & Projects Gallery
  designGallery: [
    {
      id: "g-parsomen",
      title: "Insightful Parşömen — AI Studio App",
      category: "AI & Product",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)",
      accent: "#818CF8",
      liveUrl: "https://insightful-parsomen.vercel.app",
      githubUrl: "https://github.com/Barotello/insightful_parsomen",
      desc: "AI Studio platform integrating generative intelligence, advanced document analysis, and intuitive multi-modal workflows deployed on Vercel."
    },
    {
      id: "g-mathgame",
      title: "MathGame — Interactive Learning",
      category: "Game & UI",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #064E3B 0%, #0F766E 100%)",
      accent: "#2DD4BF",
      liveUrl: "https://math-game-eta-self.vercel.app",
      githubUrl: "https://github.com/Barotello/MathGame",
      desc: "Gamified educational mathematics interface featuring progressive difficulty, real-time score analytics, and fluid web animations deployed on Vercel."
    },
    {
      id: "g-preplab",
      title: "PrepLab.ai — AI CV Coach",
      category: "AI & Product",
      type: "Figma & React • Live Product",
      year: "2024",
      gradient: "linear-gradient(135deg, #0A84FF 0%, #0040DD 100%)",
      accent: "#60A5FA",
      liveUrl: "https://preplab.ai",
      desc: "AI-powered CV coaching and career preparation platform designed end to end from IA to shipped React interface."
    },
    {
      id: "g-storylink",
      title: "StoryLink — Web & Stories",
      category: "Web & Content",
      type: "TypeScript • Vercel App",
      year: "2025",
      gradient: "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)",
      accent: "#A5B4FC",
      liveUrl: "https://storylink-seven.vercel.app",
      githubUrl: "https://github.com/Barotello/storylink",
      desc: "Interactive story and curated link ecosystem with card-based micro-content hierarchy and edge performance deployed on Vercel."
    },
    {
      id: "g-liguamind",
      title: "LiguaMind AI — Language Coach",
      category: "AI & Product",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #581C87 0%, #3B0764 100%)",
      accent: "#C084FC",
      liveUrl: "https://liguamind.vercel.app",
      githubUrl: "https://github.com/Barotello/liguamind",
      desc: "Personalized AI language coaching, pronunciation assessment, and interactive fluency training deployed on Vercel."
    },
    {
      id: "g-childgame",
      title: "ChildGame — Kids Learning & Server",
      category: "Game & UI",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #78350F 0%, #451A03 100%)",
      accent: "#FBBF24",
      liveUrl: "https://childgame-api-server-p4xt.vercel.app",
      githubUrl: "https://github.com/Barotello/childgame",
      desc: "Child-friendly educational gaming playground with cognitive development puzzles, accessible audio-visual feedback, and secure server architecture."
    },
    {
      id: "g-aselsan",
      title: "ASELSAN Command & Control & Zabbix",
      category: "Defense & Systems",
      type: "Figma UI • Mission-Critical",
      year: "2023 - 2026",
      gradient: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
      accent: "#34D399",
      desc: "Task-focused operational interfaces reducing navigation clicks by 40% for critical monitoring screens."
    },
    {
      id: "g-biomap",
      title: "BioMap Health Interface",
      category: "Health & Mobile",
      type: "Mobile UI Concept",
      year: "2024",
      gradient: "linear-gradient(135deg, #831843 0%, #500724 100%)",
      accent: "#F472B6",
      desc: "Visual 3D body-map interface visualizing health symptoms, biometric tracking, and personal wellness insights."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

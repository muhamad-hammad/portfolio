export const hero = {
  name: "Hammad Bhatti",
  tagline: "CS student building at the intersection of AI/ML and game dev.",
  status: "Available for internships",
  currentProject: "Auto-Insight EDA Platform",
  currentStack: "Next.js + FastAPI + TensorFlow",
  cvUrl: "/cv.pdf",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "hammad@email.com",
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Auto-Insight — Automated EDA Platform",
    description:
      "Full-stack automated EDA and model recommendation platform. Pandas used only for schema detection; all data ops run inside a TensorFlow computation graph via tf.data. Streaming FastAPI backend with SSE, Next.js frontend with live analysis.",
    tags: ["Next.js", "FastAPI", "TensorFlow 2.18", "OpenAI API", "Docker"],
    githubUrl: "https://github.com/yourusername/auto-insight",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Autonomous Data Analysis Agent",
    description:
      "LangGraph agent with 5 nodes (planner, coder, executor, reflector, reporter), E2B sandbox execution, pgvector RAG pattern store, and SSE streaming via FastAPI.",
    tags: ["LangGraph", "pgvector", "E2B", "FastAPI"],
    githubUrl: "https://github.com/yourusername/data-agent",
    liveUrl: null,
    featured: false,
  },
  {
    title: "Book Recommendation System",
    description:
      "Deployed ML-powered book recommender using collaborative and content filtering. Streamlit UI, deployed on AWS.",
    tags: ["scikit-learn", "Streamlit", "AWS S3"],
    githubUrl: "https://github.com/yourusername/book-rec",
    liveUrl: "https://your-streamlit-app.streamlit.app",
    featured: false,
  },
  {
    title: "Meteor Mash — C++ SFML Game",
    description:
      "Fully custom C++ arcade game using SFML. Manual memory management, hand-rolled data structures, no STL containers.",
    tags: ["C++", "SFML"],
    githubUrl: "https://github.com/yourusername/meteor-mash",
    liveUrl: null,
    featured: false,
  },
];

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "AI / ML",
    items: [
      "scikit-learn",
      "TensorFlow",
      "XGBoost",
      "LangGraph",
      "OpenAI API",
      "RAG",
      "Optuna",
    ],
  },
  {
    group: "Backend / Infra",
    items: [
      "FastAPI",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "GitHub Actions",
      "PostgreSQL",
    ],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Game Dev",
    items: ["C++", "SFML", "Minimax / Alpha-Beta", "A*"],
  },
  {
    group: "CS Foundations",
    items: [
      "Data Structures",
      "OS",
      "Computer Networks",
      "Automata",
      "Compiler Construction",
      "Databases",
    ],
  },
];

export type Experience = {
  date: string;
  role: string;
  org: string;
  description: string;
};

export const experience: Experience[] = [
  {
    date: "2022 — 2027",
    role: "BS Computer Science",
    org: "FAST NUCES, Karachi",
    description:
      "3rd year (mid-6th semester). Relevant coursework: OS, Computer Networks, Databases, Software Engineering, Automata, Compiler Construction, Computer Architecture, AI, Information Retrieval.",
  },
  {
    date: "ongoing",
    role: "Food Cart Venture",
    org: "Co-founder",
    description:
      "Running an active food business. Built a CSP-based menu optimizer (AC-3 + backtracking with MRV) as an AI lab project around this venture.",
  },
];

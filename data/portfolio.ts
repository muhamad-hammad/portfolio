export const hero = {
  name: "Muhammad Hammad",
  tagline: "CS student building at the intersection of Agentic and Gen AI.",
  status: "Available for internships",
  currentProject: "RecSpo A music Recommender",
  currentProjectUrl: "https://recspo-five.vercel.app",
  currentStack: "Next.js + FastAPI + SpotifyAPI",
  cvUrl: "/cv.pdf",
  github: "https://github.com/muhammad-hammad",
  linkedin: "https://linkedin.com/in/muhammad-hammad-b6b782296",
  email: "m.hammad.bhatti09@gmail.com",
  avatarUrl: "" as string, // place your photo in /public and set the path e.g. "/avatar.jpg"
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  domain: string;
};

export const projects: Project[] = [
  // ─── FULL-STACK / PLATFORM PROJECTS ─────────────────────────────────────────

  {
    title: "AutoInsights: Automated EDA Platform",
    description:
      "AutoML platform that profiles a raw CSV and recommends ranked TensorFlow model architectures. Streaming FastAPI backend with SSE, Next.js 14 frontend with Recharts, and runtime-switchable LLM providers.",
    tags: ["Next.js 14", "FastAPI", "TensorFlow 2.18", "Pydantic v2", "Recharts", "OpenAI API", "Anthropic API", "Playwright"],
    githubUrl: "https://github.com/muhamad-hammad/AutoInsight",
    liveUrl: "https://autoinsight-mh.vercel.app/",
    featured: true,
    domain: "AI & GenAI",
  },

  {
    title: "ResearchAssistantRAG: Academic Paper Q&A Platform",
    description:
      "LangGraph RAG platform for academic papers with three modes: chat, explain, and visualize. FastAPI backend with FAISS vector store, sentence-transformers, and Dockerized async task queue.",
    tags: ["FastAPI", "LangGraph", "LangChain", "FAISS", "Gemini API", "Ollama", "Docker", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/muhamad-hammad/ResearchAssistantRAG",
    liveUrl: null,
    featured: true,
    domain: "AI & GenAI",
  },

  {
    title: "Sportics Event Manager",
    description:
      "Sports event management system for FAST NUCES gaming leagues. Role-based auth, draft registration, bracket management, court booking, and leaderboards.",
    tags: ["Next.js 16", "Django REST Framework", "JWT", "MySQL", "SQLite", "TypeScript", "TailwindCSS 4"],
    githubUrl: "https://github.com/muhamad-hammad/SporticsEventMAnager",
    liveUrl: null,
    featured: false,
    domain: "Full-Stack",
  },

  {
    title: "LIGMA: Real-Time Collaborative Infinite Canvas",
    description:
      "A real-time collaborative infinite canvas with CRDT-based conflict-free sync via Yjs, node-level RBAC, AI-powered intent classification using Groq LLaMA, event sourcing with PostgreSQL, time-travel replay, and live cursor presence. Built with Next.js 16, React 19, Express/Bun, and Drizzle ORM.",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Yjs", "WebSocket", "Express", "Bun", "PostgreSQL", "Drizzle ORM", "Groq API", "CRDT", "RBAC"],
    githubUrl: "https://github.com/muhamad-hammad/ligma",
    liveUrl: "https://ligma-web.vercel.app",
    featured: true,
    domain: "Fullstack & Real-Time",
  },

  // ─── AI / ALGORITHMS ─────────────────────────────────────────────────────────

  {
    title: "Minesweeper AutoSolve",
    description:
      "Minesweeper with a two-phase AI solver: constraint propagation for certain moves, CSP enumeration as fallback. Includes a real-time debug panel showing phase, confidence, and move history.",
    tags: ["Next.js 14", "React 18", "TypeScript", "Framer Motion", "Tailwind CSS", "Jest"],
    githubUrl: "https://github.com/muhamad-hammad/Minesweeper-AutoSolve-",
    liveUrl: null,
    featured: true,
    domain: "Systems & Algorithms",
  },

  {
    title: "Packet Routing with Reinforcement Learning",
    description:
      "Streamlit GUI comparing DQN-based packet routing (multi-agent and single-agent) against Dijkstra's algorithm, with live training metrics and path visualization.",
    tags: ["Python", "TensorFlow", "Streamlit", "NetworkX", "Reinforcement Learning", "DQN"],
    githubUrl: "https://github.com/muhamad-hammad/PacketRoutingWithReinforcementLearning",
    liveUrl: null,
    featured: false,
    domain: "AI & GenAI",
  },

  {
    title: "ArguMind: Multi-Agent Debate System",
    description:
      "A software engineering coursework project architecting a multi-agent debate system with UML/system diagrams and a FastAPI backend. Features an OpenAI-powered agent route, LangGraph/LangChain integration for future orchestration, and a Next.js 15 + TypeScript frontend.",
    tags: ["FastAPI", "Next.js 15", "TypeScript", "LangGraph", "LangChain", "OpenAI API", "Pydantic", "Python"],
    githubUrl: "https://github.com/muhamad-hammad/ArguMind",
    liveUrl: "https://argumind.vercel.app",
    featured: false,
    domain: "AI & GenAI",
  },

  {
    title: "Negation-Lens: Negation-Aware Information Retrieval",
    description:
      "An IR research project evaluating how well retrieval models handle negation using the NevIR dataset. Benchmarks BM25, TF-IDF, Sentence-BERT, and MonoT5 3B cross-encoder across query accuracy, pairwise accuracy, and MRR, with rule-based negation type labeling (explicit, implicit, comparative).",
    tags: ["Python", "NLP", "Information Retrieval", "BM25", "TF-IDF", "Sentence-BERT", "MonoT5", "Hugging Face", "NevIR Dataset"],
    githubUrl: "https://github.com/muhamad-hammad/Negation-Lens",
    liveUrl: null,
    featured: false,
    domain: "AI & NLP",
  },

  // ─── COMPILERS / SYSTEMS ─────────────────────────────────────────────────────

  {
    title: "NumScript Mini Compiler",
    description:
      "Single-file compiler for a statically-typed language. Full pipeline: Lexer, recursive-descent Parser, AST, Semantic Analyzer, IR Generator, Optimizer, Bytecode Generator, and Stack VM.",
    tags: ["Python", "Compiler Design", "AST", "Bytecode VM", "Three-Address Code"],
    githubUrl: "https://github.com/muhamad-hammad/NumScript",
    liveUrl: null,
    featured: true,
    domain: "Systems & Algorithms",
  },

  {
    title: "Thread Wars",
    description:
      "A multiplayer 2D survival game written in C using raylib where two players share a battery-powered gun, collect solar cells to charge up, and defend against zombie waves. Each player runs as a separate OS thread with mutex-based synchronization for thread-safe rendering.",
    tags: ["C", "raylib", "Multithreading", "POSIX Threads", "Mutex", "Game Development"],
    githubUrl: "https://github.com/muhamad-hammad/thread-wars",
    liveUrl: null,
    featured: false,
    domain: "Systems & Game Development",
  },

  {
    title: "eatFAST: University Campus Food Management System",
    description:
      "A terminal-based C++ food ordering and pickup management system for university campuses, allowing students and faculty to place orders or schedule pickups from on-campus shops. Built using object-oriented programming principles during the second semester.",
    tags: ["C++", "OOP", "Terminal Application", "CLI", "Object-Oriented Design"],
    githubUrl: "https://github.com/muhamad-hammad/eatFAST",
    liveUrl: null,
    featured: false,
    domain: "Systems & CLI Tools",
  },

  // ─── ML / DATA SCIENCE ───────────────────────────────────────────────────────

  {
    title: "Spam Detector App",
    description:
      "Streamlit app with a Naive Bayes classifier and NLP preprocessing pipeline (tokenization, stopword removal, stemming) plus a history of the last 5 checks.",
    tags: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Naive Bayes"],
    githubUrl: "https://github.com/muhamad-hammad/Spaaaaaam",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  {
    title: "Book Recommendation System",
    description:
      "KNN-based collaborative filtering app. Select a book and get similar recommendations with cover images and Google search links. Model serialized with Pickle.",
    tags: ["Python", "Streamlit", "Scikit-learn", "KNN", "Pandas", "Collaborative Filtering"],
    githubUrl: "https://github.com/muhamad-hammad/BookRecomendationSystem",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  {
    title: "Customer Churn Rate Predictor",
    description:
      "ANN-based churn prediction model built with TensorFlow/Keras on the Churn Modelling dataset.",
    tags: ["Python", "TensorFlow", "Keras", "Jupyter Notebook", "ANN"],
    githubUrl: "https://github.com/muhamad-hammad/chrurnRatePredictor",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  {
    title: "Indians Diabetes Predictor",
    description:
      "Multi-model classification experiment on the Pima Indians Diabetes dataset with Optuna hyperparameter tuning. Best result: ~79% accuracy with a tuned Decision Tree.",
    tags: ["Python", "Scikit-learn", "Optuna", "Jupyter Notebook", "Hyperparameter Tuning"],
    githubUrl: "https://github.com/muhamad-hammad/IndiansDiabetesPredictor",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  {
    title: "Personality Predictor (Introvert vs Extrovert)",
    description:
      "Kaggle competition entry (Playground Series S5E7) using Random Forest and Gradient Boosting with GridSearchCV, achieving ~97% accuracy.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Jupyter Notebook", "Kaggle"],
    githubUrl: "https://github.com/muhamad-hammad/PersonalityPredictor",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  {
    title: "ProBattle: Driving Scene Classification",
    description:
      "Kaggle competition entry for multi-label classification of urban driving images, predicting scene type, time of day, and weather condition via averaged F1 score.",
    tags: ["Python", "Jupyter Notebook", "Computer Vision", "Multi-label Classification", "Kaggle"],
    githubUrl: "https://github.com/muhamad-hammad/probattle",
    liveUrl: null,
    featured: false,
    domain: "ML & Data",
  },

  // ─── COURSE / LEARNING REPOS ─────────────────────────────────────────────────

  {
    title: "DSA Labs",
    description:
      "C++ lab assignments covering linked lists, trees, heaps, graphs, BFS/DFS, BSTs, and more across 12 labs.",
    tags: ["C++", "Data Structures", "Algorithms", "Graphs", "BST"],
    githubUrl: "https://github.com/muhamad-hammad/DSA_LABS",
    liveUrl: null,
    featured: false,
    domain: "Systems & Algorithms",
  },

  {
    title: "COAL Lab (Assembly)",
    description:
      "x86 Assembly (MASM/NASM) lab assignments from the Computer Organization and Assembly Language course across 12 labs.",
    tags: ["Assembly", "x86", "COAL", "Low-level Programming"],
    githubUrl: "https://github.com/muhamad-hammad/COAL-LAB",
    liveUrl: null,
    featured: false,
    domain: "Systems & Algorithms",
  },

  {
    title: "Flutter Todo App",
    description:
      "Simple todo list app built while learning Flutter/Dart.",
    tags: ["Flutter", "Dart", "Mobile"],
    githubUrl: "https://github.com/muhamad-hammad/flutter_todo_app",
    liveUrl: null,
    featured: false,
    domain: "Mobile & Learning",
  },

  {
    title: "Flutter E-Commerce App",
    description:
      "Flutter e-commerce app built as a practice project while learning Flutter/Dart.",
    tags: ["Flutter", "Dart", "Mobile", "E-Commerce"],
    githubUrl: "https://github.com/muhamad-hammad/flutter_ecommerce_app",
    liveUrl: null,
    featured: false,
    domain: "Mobile & Learning",
  },
];

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "C", "C++", "SQL"],
  },
  {
    group: "Agentic AI / Gen AI",
    items: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "OpenAI API",
      "Anthropic API",
      "Gemini API",
      "HuggingFace",
      "Vector Embeddings",
      "Retrieval Pipelines",
      "FAISS",
      "ChromaDB",
      "RAG",
    ],
  },
  {
    group: "Data & EDA",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "Exploratory Analysis",
      "Data Visualisation",
    ],
  },
  {
    group: "Machine Learning",
    items: [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Linear Models",
      "Tree-based Models",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Optuna",
      "Model Pipelines",
    ],
  },
  {
    group: "Deep Learning",
    items: ["TensorFlow", "Keras", "Neural Network Architectures", "Training Workflows"],
  },
  {
    group: "Reinforcement Learning",
    items: ["OpenAI Gymnasium", "RL Environments", "Policy Training"],
  },
  {
    group: "Backend / APIs",
    items: [
      "FastAPI",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "SQLAlchemy",
      "Redis",
      "Celery",
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "Docker",
      "GitHub Actions",
      "AWS EC2",
      "AWS S3",
      "IAM Basics",
      "CI/CD",
    ],
  },
  {
    group: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "Streamlit",
    ],
  },
  {
    group: "Systems / Low-Level",
    items: ["C++", "Assembly (x86)", "Compiler Design", "Bytecode VMs"],
  },
  {
    group: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    group: "Tools",
    items: ["Git", "VS Code", "Jupyter Notebooks", "Streamlit"],
  },
  {
    group: "CS Foundations",
    items: [
      "Data Structures",
      "Algorithms",
      "OS",
      "Computer Networks",
      "Automata",
      "Compiler Construction",
      "Databases",
    ],
  },
];

export type Education = {
  date: string;
  role: string;
  org: string;
  description: string;
};

export const education: Education[] = [
  {
    date: "2023 — 2027",
    role: "BS Computer Science",
    org: "FAST NUCES, Karachi",
    description:
      "4th year. Relevant coursework: OS, Computer Networks, Databases, Software Engineering, Automata, Compiler Construction, Computer Architecture, AI, Information Retrieval.",
  },
];
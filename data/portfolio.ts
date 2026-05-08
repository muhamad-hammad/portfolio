export const hero = {
  name: "Muhammad Hammad",
  tagline: "CS student building at the intersection of Agentic and Gen AI.",
  status: "Available for internships",
  currentProject: "Portfolio Website (this!)",
  currentStack: "Next.js + FastAPI",
  cvUrl: "/cv.pdf",
  github: "https://github.com/muhammad-hammad",
  linkedin: "https://linkedin.com/in/muhammad-hammad-b6b782296",
  email: "m.hammad.bhatti09@gmail.com",
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
 // ─── FULL-STACK / PLATFORM PROJECTS ─────────────────────────────────────────

{
  title: "AutoInsights: Automated EDA Platform",
  description:
    "Full-stack AutoML platform that profiles a raw CSV in a single streaming pass and recommends ranked TensorFlow model architectures. Pandas used only for schema sniffing (nrows=0); all downstream stats run via tf.data, tf.linalg, and tf.math (Welford, HLL, Pearson). Streaming FastAPI backend with SSE (5-stage pipeline), Next.js 14 App Router frontend with Recharts visualizations. LLM provider is runtime-switchable between OpenAI and Anthropic.",
  tags: ["Next.js 14", "FastAPI", "TensorFlow 2.18", "Pydantic v2", "Recharts", "OpenAI API", "Anthropic API", "Playwright"],
  githubUrl: "https://github.com/muhamad-hammad/AutoInsight",
  liveUrl: null,
  featured: true,
},

{
  title: "ResearchAssistantRAG: Academic Paper Q&A Platform",
  description:
    "LangGraph-based RAG platform for academic research. Supports three modes — chat (Q&A), explain (structured breakdown), and visualize (data diagrams) — routed through a state machine graph. FastAPI backend with SQLAlchemy, FAISS vector store, sentence-transformers for embeddings, and PyMuPDF for PDF ingestion. JavaScript/CSS frontend, fully Dockerized with Redis/Celery for async tasks. Migrated from Grok to Gemini API; also supports local Ollama setup.",
  tags: ["FastAPI", "LangGraph", "LangChain", "FAISS", "Gemini API", "Ollama", "Docker", "Redis", "PostgreSQL"],
  githubUrl: "https://github.com/muhamad-hammad/ResearchAssistantRAG",
  liveUrl: null,
  featured: true,
},

{
  title: "Sportics Event Manager",
  description:
    "Full-stack sports event management system built as a DBMS course project for managing gaming leagues at FAST NUCES Karachi. Features role-based authentication (Admin, Captain, Player), a LOG draft/player-registration module, Olympiad bracket management, court booking with price calculation, match scheduling, and leaderboards. Django REST Framework backend with JWT auth, Next.js 16 App Router frontend.",
  tags: ["Next.js 16", "Django REST Framework", "JWT", "MySQL", "SQLite", "TypeScript", "TailwindCSS 4"],
  githubUrl: "https://github.com/muhamad-hammad/SporticsEventMAnager",
  liveUrl: null,
  featured: false,
},

// ─── AI / ALGORITHMS ─────────────────────────────────────────────────────────

{
  title: "Minesweeper AutoSolve",
  description:
    "Interactive Minesweeper game with a built-in two-phase AI solver. Phase 1 applies constraint propagation to derive certain safe/mine moves via subset reduction; Phase 2 falls back to CSP enumeration, choosing the lowest-probability mine cell. Features a real-time AI debug panel (phase, constraints, confidence, move history), adjustable step speed, and step-by-step inspection mode. Board generates after first click to guarantee a safe start.",
  tags: ["Next.js 14", "React 18", "TypeScript", "Framer Motion", "Tailwind CSS", "Jest"],
  githubUrl: "https://github.com/muhamad-hammad/Minesweeper-AutoSolve-",
  liveUrl: null,
  featured: true,
},

{
  title: "Packet Routing with Reinforcement Learning",
  description:
    "Interactive Streamlit GUI demonstrating Deep Q-Network (DQN) packet routing on dynamic network topologies. Supports two architectures: Multi-Agent (per-router agents with individual forwarding tables) and Universal (single centralized agent). Compares RL agent performance against Dijkstra's shortest-path algorithm with side-by-side path visualization and live training metrics. Uses TensorFlow (CPU) and NetworkX.",
  tags: ["Python", "TensorFlow", "Streamlit", "NetworkX", "Reinforcement Learning", "DQN"],
  githubUrl: "https://github.com/muhamad-hammad/PacketRoutingWithReinforcementLearning",
  liveUrl: null,
  featured: false,
},

// ─── COMPILERS / SYSTEMS ─────────────────────────────────────────────────────

{
  title: "NumScript Mini Compiler",
  description:
    "Single-file compiler (~660 lines) for NumScript, a statically-typed language with variables, arithmetic, control flow, and functions. Full pipeline: Regex Lexer → Recursive-descent Parser → AST → Semantic Analyzer (type checking, symbol tables) → IR Generator (Three-Address Code) → Optimizer (constant folding, dead code elimination) → Bytecode Generator → Stack-based VM. Built in Python with no external dependencies as a Compiler Construction course project.",
  tags: ["Python", "Compiler Design", "AST", "Bytecode VM", "Three-Address Code"],
  githubUrl: "https://github.com/muhamad-hammad/NumScript",
  liveUrl: null,
  featured: true,
},

// ─── ML / DATA SCIENCE ───────────────────────────────────────────────────────

{
  title: "Spam Detector App",
  description:
    "Interactive spam detection web app built with Streamlit and a trained Multinomial Naive Bayes classifier. Includes full NLP preprocessing pipeline (tokenization, stopword removal, stemming via NLTK) and displays spam/not-spam classification with a history of the last 5 checks.",
  tags: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Naive Bayes"],
  githubUrl: "https://github.com/muhamad-hammad/Spaaaaaam",
  liveUrl: null,
  featured: false,
},

{
  title: "Book Recommendation System",
  description:
    "Personalized book recommendation app using a KNN-based collaborative filtering model. Users select a book from a dropdown and receive similar recommendations with cover images and clickable Google search links. Built with Scikit-learn, Pandas, and a Streamlit interface; model and pivot table serialized with Pickle.",
  tags: ["Python", "Streamlit", "Scikit-learn", "KNN", "Pandas", "Collaborative Filtering"],
  githubUrl: "https://github.com/muhamad-hammad/BookRecomendationSystem",
  liveUrl: null,
  featured: false,
},

{
  title: "Customer Churn Rate Predictor",
  description:
    "ANN-based customer churn prediction model trained on the Churn Modelling dataset. Built in a Jupyter notebook using TensorFlow/Keras for the neural network architecture.",
  tags: ["Python", "TensorFlow", "Keras", "Jupyter Notebook", "ANN"],
  githubUrl: "https://github.com/muhamad-hammad/chrurnRatePredictor",
  liveUrl: null,
  featured: false,
},

{
  title: "Indians Diabetes Predictor",
  description:
    "Multi-model classification experiment on the Pima Indians Diabetes dataset using Optuna for hyperparameter tuning. Trained and compared RandomForestClassifier, GradientBoostingClassifier, KNeighborsClassifier, SVC, GaussianNB, and DecisionTreeClassifier; best result was ~79% accuracy with a tuned Decision Tree.",
  tags: ["Python", "Scikit-learn", "Optuna", "Jupyter Notebook", "Hyperparameter Tuning"],
  githubUrl: "https://github.com/muhamad-hammad/IndiansDiabetesPredictor",
  liveUrl: null,
  featured: false,
},

{
  title: "Personality Predictor (Introvert vs Extrovert)",
  description:
    "Kaggle competition entry (Playground Series S5E7) to classify introverts vs extroverts. Used RandomForestClassifier and GradientBoostingClassifier with GridSearchCV tuning, achieving ~97% accuracy.",
  tags: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Jupyter Notebook", "Kaggle"],
  githubUrl: "https://github.com/muhamad-hammad/PersonalityPredictor",
  liveUrl: null,
  featured: false,
},

{
  title: "ProBattle: Driving Scene Classification",
  description:
    "Kaggle competition entry for multi-label classification of urban driving images. Predicts three attributes per image — Scene Type, Time of Day, and Weather Condition — evaluated via averaged F1 score. Uses provided 2048-dim feature embeddings alongside raw images.",
  tags: ["Python", "Jupyter Notebook", "Computer Vision", "Multi-label Classification", "Kaggle"],
  githubUrl: "https://github.com/muhamad-hammad/probattle",
  liveUrl: null,
  featured: false,
},

// ─── COURSE / LEARNING REPOS ─────────────────────────────────────────────────

{
  title: "DSA Labs",
  description:
    "C++ lab assignments covering core data structures and algorithms across 12 labs, including linked lists, trees, heaps, graphs (adjacency matrix & list), BFS/DFS, binary search trees, and more. Also includes mid-exam practice and a hackathon entry.",
  tags: ["C++", "Data Structures", "Algorithms", "Graphs", "BST"],
  githubUrl: "https://github.com/muhamad-hammad/DSA_LABS",
  liveUrl: null,
  featured: false,
},

{
  title: "COAL Lab (Assembly)",
  description:
    "Collection of x86 Assembly (MASM/NASM) lab assignments from the Computer Organization and Assembly Language course, covering 12 labs and a course project.",
  tags: ["Assembly", "x86", "COAL", "Low-level Programming"],
  githubUrl: "https://github.com/muhamad-hammad/COAL-LAB",
  liveUrl: null,
  featured: false,
},

{
  title: "Flutter Todo App",
  description:
    "First Flutter mobile application — a simple todo list app built while learning Flutter/Dart.",
  tags: ["Flutter", "Dart", "Mobile"],
  githubUrl: "https://github.com/muhamad-hammad/flutter_todo_app",
  liveUrl: null,
  featured: false,
},

{
  title: "Flutter E-Commerce App",
  description:
    "Flutter e-commerce mobile app built as a practice project while learning Flutter/Dart.",
  tags: ["Flutter", "Dart", "Mobile", "E-Commerce"],
  githubUrl: "https://github.com/muhamad-hammad/flutter_ecommerce_app",
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

export const portfolioData = {
  hero: {
    name: "Varad Bhalsing",
    title: "Python Developer & GenAI Developer",
    description: "Building scalable systems and intelligent solutions. Specialized in Python backend development and cutting-edge generative AI implementations.",
    email: "varadbhalsing71@gmail.com",
    github: "https://github.com/varad8995",
    linkedin: "https://www.linkedin.com/in/varad-bhalsing-168054204/"
  },

  about: {
    text: "I'm a Python Backend Engineer with 3+ years of experience designing and scaling production-grade APIs, microservices, and GenAI/RAG applications. I focus on retrieval-grounded generation, structured prompt engineering, and building resilient distributed systems with failure isolation and graceful degradation."
  },

  experience: [
    {
      id: 1,
      title: "Python Developer",
      company: "Culinda Inc.",
      period: "March 2023 - Present",
      description: "RAG System & LLM Integration\n\
• Built a production RAG pipeline (Weaviate vector DB + LLM) for intelligent document querying; tuned chunking strategy, embedding config, and retrieval-grounded context injection to improve relevance by ~40%, cut query response time from ~8s to under 4s, and reduce LLM hallucination rate by ~35%\n\
• Introduced Redis caching for API responses, session storage, and rate limiting, eliminating ~70% of repeated DB hits and reducing p95 latency on high-traffic endpoints by ~50%\n\
• Containerized 5+ FastAPI microservices with Docker; managed Kubernetes deployments with ConfigMaps, liveness/readiness probes, and rolling updates across production clusters\n\
\n\
Vendor Onboarding & Scan Engine\n\
• Redesigned scan execution engine from sequential to concurrent (30 tools/scan), reducing per-scan latency by ~60% and cutting CPU utilization to manageable levels under sustained load\n\
• Built multi-step vendor onboarding workflow with dynamic form flows, staged approval pipeline, and role-based access; led end-to-end feature from design to deployment\n\
• Added per-tool timeouts, retry logic, and failure isolation with structured error handling, eliminating cascading failures and reducing error-induced scan aborts by ~80%\n\
• Deployed onboarding service on Kubernetes with rolling update strategy, achieving zero-downtime upgrades across all production releases\n\
• Integrated async email dispatch (SMTP / SendGrid) and paginated in-app notification API, reducing delivery latency and enabling read/unread state tracking at scale\n\
\n\
Sentiment Analysis Platform\n\
• Co-built (4-person team) a sentiment analysis platform ingesting data from Twitter, Instagram, Facebook, and YouTube for client social media monitoring",
      technologies: ["Python", "FastAPI", "Pydantic", "RAG", "LangChain", "LangGraph", "Weaviate", "Redis", "Docker", "Kubernetes", "AWS"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Distributed Task Queue System",
      description: "Built a distributed background job system using Redis as the job broker with worker-based execution, retry logic, and real-time job status tracking; offloaded long-running tasks to keep core API response times fast under load.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      technologies: ["Python", "FastAPI", "Redis", "Docker"],
      link: "https://github.com/varad8995"
    },
    {
      id: 2,
      name: "Coverly - AI Image Generation Platform",
      description: "Backend platform converting natural language prompts to images via Generative AI APIs with async inference processing; used LangSmith for LLM workflow tracing and built prompt enrichment logic to improve output consistency.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      technologies: ["Python", "FastAPI", "Generative AI APIs", "LangSmith"],
      link: "https://github.com/varad8995"
    }
  ],

  skills: {
    backend: [
      "Python",
      "FastAPI",
      "Pydantic",
      "REST API Design",
      "OpenAPI/Swagger",
      "Async Programming"
    ],
    ai: [
      "RAG Architecture",
      "Vector Embeddings",
      "LLM Integration",
      "Prompt Engineering",
      "LangChain",
      "LangSmith",
      "Weaviate",
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis"
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "AWS",
      "ConfigMaps",
      "Rolling Deployments",
      "Git",
      "Postman"
    ]
  },

  contact: {
    email: "varadbhalsing71@gmail.com",
    github: "https://github.com/varad8995",
    linkedin: "https://www.linkedin.com/in/varad-bhalsing-168054204/",
    location: "Pune, IN"
  }
};

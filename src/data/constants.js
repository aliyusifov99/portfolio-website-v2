export const personalInfo = {
  name: "Ali Yusifov",
  title: "Data Engineer & AI Enthusiast",
  location: "Krakow, Poland",
  email: "ali.yusifov.work@gmail.com",
  phone: "(+48) 572 013 807",
  linkedin: "https://www.linkedin.com/in/ali-yusifov/",
  github: "https://github.com/aliyusifov99",
  resume:
    "https://1drv.ms/b/c/44fa59118ee191df/IQDfkeGOEVn6IIBE7zwAAAAAAd627twzVe2ZwnuGFmku0qA?e=XtNvNv",
  bio: "Data Engineer with expertise in building scalable data pipelines, machine learning systems, and cloud infrastructure. Passionate about transforming raw data into actionable insights through modern engineering practices.",
};

export const experiences = [
  {
    company: "GFT Technologies",
    location: "Poland",
    role: "Data Engineer",
    period: "Jan 2026 – Present",
    bullets: [
      "Migrated legacy SAS codebase to PySpark, modernizing data processing workflows and improving scalability for large-scale analytics.",
      "Designed and developed end-to-end data pipelines using Prophecy, enabling streamlined data transformation and orchestration across distributed environments.",
    ],
  },
  {
    company: "Union Bank of Switzerland",
    location: "Poland",
    role: "Data Engineer",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Designed and implemented robust data pipelines utilizing Python, Spark, Airflow, and SQL, significantly enhancing data processing capabilities.",
      "Played a key role within the Evidence Lab Team, building critical data infrastructure to support advanced analytical initiatives.",
    ],
  },
  {
    company: "LTIMindtree (Microsoft)",
    location: "Poland",
    role: "Azure Cloud Support Engineer",
    period: "Apr 2024 – Oct 2024",
    bullets: [
      "Designed and implemented machine learning pipelines in Azure ML Studio, enhancing workflow efficiency.",
      "Supported more than 100 customers in building and deploying chatbots, enhancing user experience.",
    ],
  },
  {
    company: "Axel Cyber LLC",
    location: "Remote",
    role: "AI Engineer",
    period: "Nov 2023 – Apr 2024",
    bullets: [
      "Built chatbots for clients that increased their workflow speed by 35% using LangChain.",
      "Designed and implemented a churn prediction model that accurately identified at-risk customers, leading to a 15% reduction in churn rates.",
    ],
  },
  {
    company: "Risehill Energy Solution",
    location: "Malaysia",
    role: "Junior Data Scientist",
    period: "May 2022 – Oct 2023",
    bullets: [
      "Developed a fluid production forecasting model through feature engineering and pre-processing of fiberoptic datasets using PCA.",
      "Streamlined data preparation with code that resulted in a 50% increase in processing speed leveraging PySpark.",
    ],
  },
];

export const skillCategories = [
  {
    name: "Programming & Software Development",
    icon: "Code2",
    skills: ["Python", "R", "SQL", "SAS", "OOP", "FastAPI"],
  },
  {
    name: "Data Engineering & Orchestration",
    icon: "Database",
    skills: ["Apache Spark", "Apache Airflow", "Apache Hadoop", "Prophecy", "Delta Lake", "dbt"],
  },
  {
    name: "Data Analysis & Statistical Methods",
    icon: "BarChart3",
    skills: ["NumPy", "Pandas", "SciPy", "statsmodels", "Scikit-learn", "A/B Testing", "sktime", "Selenium"],
  },
  {
    name: "Machine Learning & AI",
    icon: "Brain",
    skills: ["XGBoost", "LightGBM", "TensorFlow", "Regression", "Classification", "Clustering", "Hyperparameter Optimization", "NLTK", "spaCy"],
  },
  {
    name: "Data Visualization",
    icon: "LineChart",
    skills: ["Power BI", "Tableau", "Matplotlib", "Plotly", "Seaborn"],
  },
  {
    name: "MLOps & Version Control",
    icon: "GitBranch",
    skills: ["Git", "GitLab", "MLFlow", "DVC", "Hydra"],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["Microsoft Azure", "Docker"],
  },
];

export const projects = [
  {
    title: "Multi-Agent Air Quality Monitoring System",
    slug: "multi-agent-air-quality-monitoring-system",
    description:
      "A Multi-Agent System for monitoring real-time air quality across Polish cities. Multiple AI agents collaborate to collect, process, classify, and visualize air quality data through an intelligent distributed architecture.",
    github: "https://github.com/aliyusifov99/poland-air-quality-monitoring-mas",
    tags: ["Multi-Agent Systems", "Python", "Real-time Data"],
  },
  {
    title: "Poland Housing Price Prediction",
    slug: "poland-housing-price-prediction",
    description:
      "An end-to-end machine learning system for predicting apartment sale and rental prices across 15 major Polish cities. Features a complete MLOps pipeline from data processing to deployment-ready containerized applications.",
    github: "https://github.com/aliyusifov99/poland_house_and_rent_price_prediction",
    tags: ["MLOps", "Docker", "Scikit-learn"],
  },
  {
    title: "Plant Disease Classification",
    slug: "plant-disease-classification-cnn-transfer-learning",
    description:
      "A deep learning system for automated plant disease detection from leaf images. Leverages EfficientNet-B0 with transfer learning, built with PyTorch and deployed via a Streamlit web interface.",
    github: "https://github.com/aliyusifov99/plant-disease-classification",
    tags: ["Deep Learning", "PyTorch", "Transfer Learning"],
  },
  {
    title: "HeartGuard AI",
    slug: "heartguard-ai-heart-disease-prediction",
    description:
      "A full-stack machine learning application for assessing heart disease risk based on medical metrics. Covers the complete end-to-end workflow from data analysis and model training to a user interface and persistent database system.",
    github: "https://github.com/aliyusifov99/heartgurad-ai",
    tags: ["Full-Stack ML", "Healthcare", "Python"],
  },
  {
    title: "YouTube Trending Videos Analysis",
    slug: "analyzing-youtube-trending-videos-poland",
    description:
      "An end-to-end data engineering project that builds an automated pipeline to ingest, process, and visualize daily trending YouTube video data for the Polish region.",
    github: "https://github.com/aliyusifov99/youtube_trend_analysis",
    tags: ["Data Engineering", "ETL", "Visualization"],
  },
  {
    title: "Back Allocation Using ML",
    slug: "back-allocation-using-machine-learning",
    description:
      "A machine learning system for calculating back allocation in oil and gas wells. Analyzes production data from multiple wells to determine individual contributions to overall production output.",
    github: "https://github.com/aliyusifov99/back-allocation-using-machine-learning",
    tags: ["Oil & Gas", "Machine Learning", "Python"],
  },
  {
    title: "Fashion Product Reviews Analysis",
    slug: "fashion-product-reviews-analysis",
    description:
      "A deep learning project for analyzing fashion product reviews to predict ratings and recommendations. Explores the nuances of customer feedback to derive meaningful business insights.",
    github: "https://github.com/aliyusifov99/analyze-fashion-product-reviews",
    tags: ["NLP", "Deep Learning", "Sentiment Analysis"],
  },
  {
    title: "Loan Default Probability",
    slug: "loan-default-probability",
    description:
      "A machine learning system for predicting the likelihood of loan defaults. Applies classification techniques to financial data to assess borrower risk and support lending decisions.",
    github: "https://github.com/aliyusifov99/loan-default-probability",
    tags: ["Finance", "Classification", "Risk Analysis"],
  },
  {
    title: "Hollywood Theatrical Market Analysis",
    slug: "hollywood-theatrical-market-analysis",
    description:
      "A comprehensive analysis of the Hollywood theatrical market from 1995 to 2021. Explores annual ticket sales, top grossers, popular genres, leading distributors, ratings, and production trends.",
    github: "https://github.com/aliyusifov99/hollywood-theatrical-market-synopsis-1995-to-2021",
    tags: ["Data Analysis", "Visualization", "Python"],
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science – Data Scientist",
    school: "WSB University, Dabrowa Gornicza, Poland",
    year: "2026",
  },
  {
    degree: "Bachelor of Engineering with Honours",
    school: "Universiti Teknologi PETRONAS (UTP), Perak, Malaysia",
    year: "2024",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    date: "May 2025",
    badge: "DP-900",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    date: "May 2024",
    badge: "AI-900",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

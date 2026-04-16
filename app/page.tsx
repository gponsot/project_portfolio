"use client";

import { BentoCard } from "@/components/BentoCard";
import { EducationTimeline } from "@/components/EducationTimeline";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const education = [
  {
    degree: "BS in Economics (Data Analytics + Macroeconomics concentration)",
    school: "Purdue University",
    period: "August 2022 - May 2025",
    location: "West Lafayette, IN",
    logo: "/images/purdue.png",
  },
  {
    degree: "Study Abroad Semester",
    school: "University of Economics, Vienna, Austria",
    period: "February 2024 - June 2024",
    location: "Vienna, Austria",
    logo: "/images/wu.png",
  },
  {
    degree: "MS in Business Analytics & Information Management",
    school: "Purdue University",
    period: "August 2025 - August 2026",
    location: "West Lafayette, IN",
    logo: "/images/purdue.png",
  },
];

const completedProjects = [
  {
    title: "NCAA Crossroads Analytics Challenge",
    detail: "Predicting tournament seeds using tabular statistics.",
    repoLink: "https://github.com/gponsot/NCAA_Challenge",
    image: "/images/ncaa.png",
    highlights: [
      "Engineered a tabular feature set across team efficiency and matchup metrics.",
      "Built seed prediction workflows and evaluated classification + regression objectives.",
      "Focused on reducing seed-error while keeping model behavior interpretable.",
    ],
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Stock Prediction with Deep Learning",
    detail:
      "Built sequence models to forecast stock movement from historical OHLCV signals.",
    repoLink: "https://github.com/gponsot/deep_learning_project",
    deliverableLink: "/pdfs/mgmt-590-final-project.pdf",
    image: "/images/deep-learning.png",
    highlights: [
      "Engineered lag-based and rolling-window features from OHLCV data before converting datasets into model-ready tensors.",
      "Compared dense, LSTM, and GRU architectures with dropout and early stopping to control overfitting under non-stationary market conditions.",
      "Evaluated regression and directional metrics (RMSE, MAE, and hit-rate) to assess both price-level error and trading signal quality.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "LSTM/GRU",
      "Experiment Tracking",
      "Model Tuning",
    ],
  },
  {
    title: "Bankruptcy Prediction",
    detail:
      "Developed a classification pipeline to predict corporate bankruptcy risk from financial indicators.",
    repoLink: "https://github.com/gponsot/datamining_project",
    deliverableLink: "/pdfs/mgmt-571-final-project.pdf",
    image: "/images/bank.png",
    highlights: [
      "Built a full preprocessing pipeline with missing-value handling, outlier treatment, and scaling designed for imbalanced credit-risk style data.",
      "Benchmarked logistic regression, tree ensembles, and boosting methods with cross-validation and ROC-AUC/F1-based model selection.",
      "Used confusion-matrix analysis and threshold tuning to balance false negatives and false positives for risk-sensitive decisions.",
    ],
    skills: [
      "Python",
      "Data Mining",
      "Data Cleaning",
      "Classification",
      "XGBoost",
      "Visualization",
    ],
  },
  {
    title: "FinLit: A Financial Literacy ChatBot",
    detail:
      "RAG-enabled chatbot for budgeting, retirement planning, and foundational personal finance guidance.",
    repoLink: "https://github.com/vaishnavshubh/chatbot",
    demoLink: "https://finlitchatbot.streamlit.app/",
    image: "/images/finlit.png",
    highlights: [
      "Implemented retrieval-augmented generation with chunking + embedding search to ground responses in curated finance references.",
      "Designed prompt templates, guardrails, and response schemas to keep outputs explainable and user-appropriate.",
      "Built a Streamlit interface with stateful conversation memory and scenario-based budgeting workflows.",
    ],
    skills: [
      "Python",
      "LLM",
      "Prompt Engineering",
      "RAG",
      "Streamlit",
      "Agentic AI",
    ],
  },
  {
    title: "Political Bias Prediction App",
    detail:
      "Interactive NLP application that predicts political bias from article text and source metadata.",
    repoLink: "https://github.com/gponsot/shiny_app_r_project",
    deliverableLink: "/pdfs/mgmt-389-poster.pdf",
    image: "/images/news.png",
    highlights: [
      "Preprocessed text corpora with tokenization, stop-word removal, and TF-IDF vectorization for downstream modeling.",
      "Trained and compared multiple classifiers to estimate ideological leaning from textual and source-level features.",
      "Deployed an R Shiny app with interactive inputs, probability outputs, and model-explainer visuals for transparent predictions.",
    ],
    skills: ["R", "Shiny", "NLP", "TF-IDF", "Classification", "Model Explainability"],
  },
];

const inProgressProjects = [
  {
    title: "Industry Practicum (Microsoft)",
    detail:
      "Developing a Streamlit-based analytical dashboard for stakeholder metrics and insights.",
  },
  {
    title: "LLM Fine-Tuning",
    detail:
      "Research and implementation of efficient optimization for large language models.",
  },
  {
    title: "AI-Assisted Patient Triage",
    detail:
      "Using agentic AI to classify and analyze unstructured healthcare portal messages.",
  },
];

const skills = [
  "Python",
  "SQL",
  "R",
  "Scikit-learn",
  "XGBoost",
  "Deep Learning",
  "Streamlit",
  "Framer Motion",
  "Data Storytelling",
  "Feature Engineering",
];

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "In Progress", href: "#in-progress", id: "in-progress" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const section = document.getElementById(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          root: null,
          rootMargin: "-35% 0px -50% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds]);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-8 lg:px-10">
      <nav className="sticky top-3 z-20 mb-10 rounded-2xl border border-sky-100 bg-white/90 px-3 py-2 backdrop-blur dark:border-sky-900/40 dark:bg-zinc-900/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <ul className="flex flex-wrap gap-2 sm:justify-end">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`inline-flex rounded-xl px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  activeSection === item.id
                    ? "bg-sky-600 text-white dark:bg-sky-500 dark:text-zinc-950"
                    : "text-zinc-600 hover:bg-sky-50 hover:text-sky-700 dark:text-zinc-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-200"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </nav>

      <section id="about" className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Gabriel Ponsot
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Data science, machine learning, and analytics projects focused on
          practical decision-making systems.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-500"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 transition-colors hover:bg-sky-50 dark:border-sky-900/40 dark:bg-zinc-900 dark:text-sky-300 dark:hover:bg-zinc-800"
          >
            View Resume
          </a>
        </div>
      </section>

      <section className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5">
        <BentoCard
          title="About Me + Current Focus"
          className="bg-gradient-to-br from-sky-50/70 via-white to-zinc-50/90 dark:from-sky-950/25 dark:to-zinc-900/70"
          description="Master's student at Purdue University focused on analytics-driven decision making."
        >
          <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                I am a Master&apos;s student in Business Analytics and Information
                Management at Purdue University, where I translate complex data
                into actionable business strategy. With a foundational
                background in Economics and Data Analytics, I bridge the gap
                between theoretical economic frameworks and modern machine
                learning applications.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                My approach to data science is rooted in curiosity and
                precision. Whether I am optimizing predictive models or
                exploring the nuances of financial markets, I am driven by the
                challenge of uncovering patterns that drive impact. I thrive at
                the intersection of quantitative analysis and storytelling,
                ensuring that every insight is backed by robust data and aligned
                with organizational goals.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                {[
                  "Business Analytics",
                  "Economic Modeling",
                  "Financial Forecasting",
                  "Machine Learning",
                  "Data Storytelling",
                  "Decision Strategy",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-300 px-2.5 py-1 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/images/profile.png"
                alt="Gabriel Ponsot profile portrait"
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-contain object-top p-2"
              />
            </div>
          </div>
        </BentoCard>
      </section>

      <section id="education" className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Education Roadmap
        </p>
        <BentoCard
          title="My Education Journey"
          label="Timeline"
          className="bg-gradient-to-br from-white via-sky-50/70 to-zinc-50/90 dark:from-zinc-900 dark:via-sky-950/30 dark:to-zinc-900/70"
          description="My academic progression through economics, international study, and graduate analytics."
        >
          <EducationTimeline items={education} />
        </BentoCard>
      </section>

      <section id="projects" className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Completed Projects
        </p>
        <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project) => (
            <BentoCard
              key={project.title}
              title={project.title}
              className={`h-full bg-gradient-to-br from-white via-sky-50/40 to-zinc-50/90 dark:from-zinc-900 dark:to-zinc-900/70`}
              description={project.detail}
            >
              {project.image ? (
                <div
                  className="relative mb-4 h-32 overflow-hidden rounded-2xl border border-sky-100 dark:border-sky-900/40"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="mb-4 flex h-32 items-center justify-center rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 text-[11px] font-medium uppercase tracking-[0.12em] text-sky-700 dark:border-sky-900/40 dark:bg-sky-950/20 dark:text-sky-200"
                >
                  Project image placeholder
                </div>
              )}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                {project.repoLink ? (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Code
                  </a>
                ) : null}
                {project.deliverableLink ? (
                  <a
                    href={project.deliverableLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Deliverables
                  </a>
                ) : null}
                {"demoLink" in project && project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
              <details className="mt-3 rounded-xl border border-sky-100 bg-white/70 p-3 dark:border-sky-900/40 dark:bg-zinc-900/50">
                <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">
                  Project details
                </summary>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                      Key aspects
                    </p>
                    <ul className="mt-1 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                      {project.highlights.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                      Skills and tools
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-zinc-300 bg-zinc-100/90 px-2 py-1 text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </BentoCard>
          ))}
        </div>
      </section>

      <section id="in-progress" className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          In Progress
        </p>
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5">
          <BentoCard
            title="In-Progress Work"
            label="Research + Industry"
            className="bg-gradient-to-br from-white to-zinc-50/90 dark:from-zinc-900 dark:to-zinc-900/70"
            description="Research and industry projects currently in development."
          >
            <ul className="space-y-3">
              {inProgressProjects.map((project) => (
                <li
                  key={project.title}
                  className="rounded-xl bg-zinc-100/70 p-3 dark:bg-zinc-800/70"
                >
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.detail}
                  </p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </section>

      <section id="skills" className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Skills
        </p>
        <BentoCard
          title="Technical Toolkit"
          label="Capabilities"
          className="bg-gradient-to-br from-white to-zinc-50/90 dark:from-zinc-900 dark:to-zinc-900/70"
          description="A working stack for analytics, experimentation, and production-focused prototypes."
        >
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-300 bg-zinc-100/80 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </BentoCard>
      </section>

      <section id="contact" className="mt-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Contact
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <BentoCard
            title="Let&apos;s Connect"
            label="Reach Out"
            className="bg-gradient-to-br from-white to-zinc-50/90 dark:from-zinc-900 dark:to-zinc-900/70"
            description="Open to opportunities incorporating machine learning, AI, and data analytics to produce actionable business insights."
          >
            <div className="space-y-2 text-sm">
              <p className="text-zinc-700 dark:text-zinc-200">
                Email: gabrielponsot6@gmail.com
              </p>
              <p className="text-zinc-700 dark:text-zinc-200">
                Location: West Lafayette, IN
              </p>
            </div>
          </BentoCard>
          <BentoCard
            title="Social Links"
            label="Online"
            className="bg-gradient-to-br from-sky-50/60 to-white dark:from-sky-950/20 dark:to-zinc-900/70"
          >
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://www.linkedin.com/in/gabrielponsot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/gponsot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
              >
                GitHub
              </a>
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}

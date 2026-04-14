import { BentoCard } from "@/components/BentoCard";
import { EducationTimeline } from "@/components/EducationTimeline";

const education = [
  {
    degree: "MS in Business Analytics & Information Management",
    school: "Purdue University",
    period: "2025 - 2026",
  },
  {
    degree: "BS in Economics (Data Analytics concentration)",
    school: "Purdue University",
    period: "Completed in 2025",
  },
];

const completedProjects = [
  {
    title: "NCAA Crossroads Analytics Challenge",
    detail: "Predicting tournament seeds using tabular statistics.",
    link: "https://github.com/gponsot/NCAA_Challenge",
  },
  {
    title: "Deep Learning Research",
    detail: "Advanced neural network implementations.",
    link: "https://github.com/gponsot/deep_learning_project",
  },
  {
    title: "Data Mining Project",
    detail: "Applied data mining workflows and model evaluation.",
    link: "https://github.com/gponsot/datamining_project",
  },
  {
    title: "Financial Literacy Chatbot",
    detail: "AI budgeting and retirement assistant.",
    link: "https://github.com/vaishnavshubh/chatbot",
  },
  {
    title: "Shiny App R Project",
    detail: "Interactive data visualization dashboard.",
    link: "https://github.com/gponsot/shiny_app_r_project",
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

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Gabriel Ponsot
        </h1>
      </section>

      <section className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <BentoCard
          title="About Me"
          className="md:col-span-2 lg:col-span-2"
          description="A graduate student at Purdue University (exp. Aug 2026) specializing in Data Science and Machine Learning."
        >
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            Passionate about ensemble modeling, financial forecasting, and
            building data-driven applications that connect analytical rigor to
            product impact.
          </p>
        </BentoCard>

        <BentoCard
          title="Current Focus"
          className="md:col-span-1 lg:col-span-1"
          description="Business Analytics, ML systems, and practical AI applications for real-world decisions."
        />

        <BentoCard
          title="Education Journey"
          className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2"
          description="Academic roadmap"
        >
          <EducationTimeline items={education} />
        </BentoCard>

        {completedProjects.map((project, index) => (
          <BentoCard
            key={project.title}
            title={project.title}
            className={index % 3 === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            description={project.detail}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-700 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View repository
            </a>
          </BentoCard>
        ))}

        <BentoCard
          title="In-Progress Work"
          className="md:col-span-2 lg:col-span-2"
          description="Research and industry projects currently in development."
        >
          <ul className="space-y-3">
            {inProgressProjects.map((project) => (
              <li key={project.title} className="rounded-xl bg-zinc-100/70 p-3 dark:bg-zinc-800/70">
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
      </section>
    </main>
  );
}

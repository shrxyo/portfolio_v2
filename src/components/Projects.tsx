import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";

interface Project {
  title: string;
  desc: string[];
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Code-exploration QA agent",
    desc: [
      "Built a full-stack **RAG** system that clones any GitHub repo, chunks and embeds source files (all-MiniLM-L6-v2) into **ChromaDB**, and answers natural-language questions grounded in the top-8 retrieved chunks with inline file:line citations.",
      "Streamed LLM responses token-by-token over Server-Sent Events with multi-turn conversational context, and auto-generated a structured repo-summary card via constrained **LLM-to-JSON** output.",
      "Designed a provider-abstraction layer that hot-swaps local (Ollama) and cloud (Groq) LLM backends via a single env var, then deployed backend and React frontend on Vercel with **live /health checks.**",
    ],
    tags: ["Python", "FastAPI", "React", "ChromaDB", "Llama 3.1 (Groq)", "SSE"],
    github: "https://github.com/shrxyo/Codebase-QA-Agent",
  },

  {
    title: "Realtime Chat Platform (ongoing)",
    desc: [
      "Building a horizontally-scalable real-time chat platform with AI-assisted threads (RAG over message history), semantic search via **pgvector embeddings**, and presence/typing indicators over **Redis** Pub/Sub.",
      "Targeting **sub- 100ms P99** message latency at 10K concurrent **WebSocket** connections; shipping behind **Docker** + GitHub Actions **CI/CD** with structured logging and **Prometheus** metrics.",
      "Drove development through a context-engineered **AI workflow (cursor, Claude Code)**: a 300-task plan of scoped agent prompts with phase gated execution to keep output aligned to the architecture.",
    ],
    tags: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WebSocket",
      "pgvector",
      "Docker",
    ],
    github: "https://github.com/shrxyo/chat-engine",
  },
  {
    title: "EI Assistant: Hybrid RAG + CAG Architecture",
    desc: [
      "Built a multi-turn emotional intelligence assistant by **fine-tuning GPT-4o-mini and LLaMA 3.2–1B** with a hybrid **RAG+CAG** pipeline: RAG for session memory via **ChromaDB**, CAG for therapeutic guidelines.",
      "**Evaluated** fine-tuned models against a held-out test set: 67.5% **semantic similarity** (vs. 63% pre-fine-tune baseline); human evaluation by a Licensed Clinical Psychologist averaged 4.5/5 across empathy, clarity and supportiveness.",
    ],
    tags: ["Python", "HF Transformers", "ChromaDB", "RAG", "Evaluation"],
    github: "https://github.com/shrxyo/EI-Assistant",
  },
  {
    title: "Class Balancing using LLMs",
    desc: [
      "Augmented highly imbalanced medical transcription dataset by generating 800+ synthetic samples using **LLMs (ClinicalBERT, ALBERT, GPT-Neo, T5)**, increasing minority class representation by an average of 200.45%.",
      "Evaluated the augmented dataset using **CNN and CNN+BiLSTM** classifiers, achieving up to 94.3% accuracy with **ALBERT** and 91.9% with **ClinicalBERT**, outperforming **SMOTE** (53% accuracy) across accuracy, precision, recall, and F1-score.",
    ],
    tags: ["Python", "Prompt Engineering", "OpenAI API", "LLM Evaluation"],
    github:
      "https://drive.google.com/file/d/1IziQ74_yzfVqkXb4XnAp94QCOeKvhXHF/view",
  },
  {
    title: "SomniSage",
    desc: [
      "Researched sleep stage subtyping using **Siamese and CNN-BiLSTM** models on 197 whole-night PSG recordings with time series EEG, EOG, EMG, and event markers; **classified hypnograms** into stages W, R, 1, 2, 3, 4, M, and ?(not scored).",
      "Engineered **2688-dimensional input vectors** from segmented time-series signals and applied a Softmax layer for multi-class classification achieving 84.5% accuracy with CNN-BiLSTM by capturing spatial and temporal sleep patterns",
    ],
    tags: [
      "Python",
      "Tensorflow",
      "BiLSTM",
      "Twin CNN",
      "Time Series Classification",
    ],
  },
];

function parseBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-2">Projects</h2>
            <p className="section-sub">Things I've built and shipped.</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <div
                className="bg-sand border border-line rounded-2xl p-6 flex flex-col gap-4
                           shadow-[0_2px_4px_rgba(0,0,0,0.06),0_6px_18px_rgba(0,0,0,0.08)]
                           hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(210,100,58,0.22),0_6px_16px_rgba(0,0,0,0.09)]
                           transition-all duration-200"
              >
                {/* Title + tags */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-ink font-bold text-[18px] leading-snug m-0">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-muted text-[12px] tracking-wide border border-line bg-cream px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-cream rounded-xl border border-line/50 px-5 py-4">
                  <ul className="m-0 flex flex-col gap-2.5 list-none">
                    {project.desc.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-muted text-[14px] leading-relaxed"
                      >
                        <span className="text-accent shrink-0 mt-1.25 text-[9px]">
                          ◆
                        </span>
                        <span>{parseBold(point)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex gap-5 border-t border-line/60 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target={project.github === "#" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted text-[13px] font-medium tracking-wide hover:text-accent transition-colors duration-150"
                      >
                        <FiGithub size={14} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target={project.live === "#" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted text-[13px] font-medium tracking-wide hover:text-accent transition-colors duration-150"
                      >
                        <FiExternalLink size={14} />
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

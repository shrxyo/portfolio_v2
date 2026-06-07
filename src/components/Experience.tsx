import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCalendar, FiMapPin } from "react-icons/fi";
import Reveal from "./Reveal";
import oracleLogo from "../assets/oracle.png";
import ciirLogo from "../assets/umass.png";
import metropolisLogo from "../assets/metropolis.png";
import stockoneLogo from "../assets/stockone.png";
import nusLogo from "../assets/nus.png";

type RoleType = "Research" | "Industry";
type FilterType = "All" | RoleType;

interface Role {
  type: RoleType;
  title: string;
  company: string;
  logo?: string;
  logoText: string;
  location: string;
  period: string;
  techStack: string[];
  bullets: string[];
}

const roles: Role[] = [
  {
    type: "Research",
    title: "AI Research Extern",
    company: "Oracle",
    logo: oracleLogo,
    logoText: "ORC",
    location: "Amherst, MA",
    period: "Jan 2026 – Present",
    techStack: [
      "Python",
      "PyTorch",
      "Evolution Strategies",
      "Qwen2.5-3B",
      "LLM Training",
      "COCONUT",
    ],
    bullets: [
      "Developed a gradient-free LLM training framework combining **Evolution Strategies** with latent chain-of-thought reasoning, enabling **backpropagation-free** CoT training on **Qwen2.5-3B** with zero intermediate activation storage.",
      "Designed and benchmarked 3 gradient-free latent architectures (weighted softmax on top-k tokens, residual MLP head, cross-attention head) within the ES training loop.",
      "Achieved 34.96% test reward on **Weighted Softmax** method on top-10 tokens vs. 24.18% on ES baseline, a **44% relative gain**, outperforming **vanilla COCONUT** (20.00%), validating token-embedding-grounded representations over hidden-state injection.",
    ],
  },
  {
    type: "Research",
    title: "Graduate Researcher",
    company: "Center for Intelligent Information Retrieval, UMass",
    logo: ciirLogo,
    logoText: "CIIR",
    location: "Amherst, MA",
    period: "Jul 2025 – Jan 2026",
    techStack: [
      "Python",
      "LLaMA-3.2",
      "HuggingFace",
      "WildChat",
      "Fine-tuning",
      "Benchmarking",
    ],
    bullets: [
      "Curated a domain-specific **benchmark** of 500K+ WildChat dialogues filtered by repetition density to study **redundant token generation** in LLM outputs, enabling reproducible measurement of copy behavior across settings.",
      "Fine-tuned **Llama-3.2-1B-Instruct** to detect and mark redundant content during generation using a custom structured syntax tag, achieving 75.1% train and 71.3% eval accuracy on syntax-compliant generation with a **<4% generalization gap**.",
      "Validated the reuse-tagging pipeline across **DeepSeek V3, Qwen 3,** and **Kimi K2** under varying repetition conditions, confirming **longest-common-substring** based detection generalizes across model families.",
    ],
  },
  {
    type: "Industry",
    title: "Data Science Intern",
    company: "Metropolis Healthcare",
    logo: metropolisLogo,
    logoText: "MH",
    location: "Mumbai, India",
    period: "Jan 2024 – May 2024",
    techStack: [
      "Python",
      "T5",
      "GPT-3.5",
      "RAG",
      "AWS S3",
      "Tableau",
      "SQL",
      "ETL",
    ],
    bullets: [
      "Partnered with operations stakeholders to define KPI requirements, then designed and extended **ETL pipelines** processing 2M+ rows from **MySQL** sources with multi-stage transformation and data quality checks.",
      "Automated **Tableau dashboards** backed by **AWS S3** and monitored pipeline health via **AWS CloudWatch**, eliminating 12+ hours of manual weekly reporting.",
      "Deployed a production **summarization pipeline**: **T5** for extractive compression and **GPT-3.5** for language generation, with a **RAG layer** grounding outputs in patient-specific clinical records; served via **AI chatbot** with 20% improvement in end-user satisfaction.",
    ],
  },
  {
    type: "Research",
    title: "Data Science Intern",
    company: "National University of Singapore",
    logo: nusLogo,
    logoText: "NUS",
    location: "Singapore",
    period: "Jun 2023 – Jul 2023",
    techStack: ["Python", "YOLOv8", "Flask", "Computer Vision", "ONNX"],
    bullets: [
      "Built SAFESCAN, a **YOLOv8-based** PPE detection system achieving 82% accuracy at 30 FPS on live video.",
      "Optimized inference pipeline to maintain real-time throughput without sacrificing detection precision; deployed via **Flask** for multi-class monitoring.",
    ],
  },
  {
    type: "Industry",
    title: "Data Analyst Intern",
    company: "Stockone Technologies (acq. by Shipsy)",
    logo: stockoneLogo,
    logoText: "S1",
    location: "Bangalore, India",
    period: "May 2023 – Jun 2023",
    techStack: ["PostgreSQL", "Django", "Power BI", "Sentry", "Python"],
    bullets: [
      "Queried a 5M+ row PostgreSQL backend for warehouse KPI dashboards (Power BI) across 3 warehouses; extended Django auth with Sentry-powered real-time session alerting.",
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

const filters: FilterType[] = ["All", "Research", "Industry"];

function TagPill({ type }: { type: RoleType }) {
  if (type === "Research") {
    return (
      <span
        className="bg-accent text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full shrink-0"
        style={{ color: "#ffffff" }}
      >
        Research
      </span>
    );
  }
  return (
    <span className="border border-line text-muted text-[11px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full shrink-0">
      Industry
    </span>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const visible = roles.filter((r) => filter === "All" || r.type === filter);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-heading mb-2">Experience</h2>
              <p className="section-sub">
                Training models, building retrieval systems, and shipping AI
                applications.
              </p>
            </div>
            <div className="flex gap-6 pb-1">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setFilter(f);
                    setOpenIndex(0);
                  }}
                  className={[
                    "text-[14px] font-medium tracking-wide transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer",
                    filter === f
                      ? "text-accent underline underline-offset-4 decoration-accent"
                      : "text-muted hover:text-ink",
                  ].join(" ")}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((role, i) => (
              <motion.div
                key={role.title + role.company}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="bg-sand border border-line rounded-r-2xl overflow-hidden
                           shadow-[0_2px_4px_rgba(0,0,0,0.06),0_6px_18px_rgba(0,0,0,0.08)]
                           hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(210,100,58,0.22),0_6px_16px_rgba(0,0,0,0.09)]
                           transition-all duration-200"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  borderRadius: "0 1rem 1rem 0",
                }}
              >
                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group cursor-pointer bg-transparent border-none"
                >
                  <div className="flex-1 min-w-0">
                    {/* Title @ Company */}
                    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 mb-2">
                      <span className="text-ink font-bold text-[17px] leading-snug group-hover:text-accent transition-colors duration-150">
                        {role.title}
                      </span>
                      <span className="text-muted text-[15px] font-normal">
                        @
                      </span>
                      <span className="text-accent font-semibold text-[15px]">
                        {role.company}
                      </span>
                    </div>

                    {/* Date · Location · Tag row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3">
                      <span className="flex items-center gap-1.5 text-muted text-[13px]">
                        <FiCalendar size={12} className="shrink-0" />
                        {role.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted text-[13px]">
                        <FiMapPin size={12} className="shrink-0" />
                        {role.location}
                      </span>
                      <TagPill type={role.type} />
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {role.techStack.map((tag) => (
                        <span
                          key={tag}
                          className="text-muted text-[12px] tracking-wide border border-line bg-cream px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 w-14 h-14 rounded border border-line bg-white overflow-hidden flex items-center justify-center">
                    {role.logo ? (
                      <img
                        src={role.logo}
                        alt={role.company}
                        className="w-full h-full object-contain p-1.5"
                      />
                    ) : (
                      <span className="text-accent font-bold text-[11px] tracking-widest">
                        {role.logoText}
                      </span>
                    )}
                  </div>

                  <FiChevronDown
                    size={18}
                    className={`text-muted transition-transform duration-200 shrink-0 mt-1 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expandable bullets */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 mb-4 bg-cream rounded-xl border border-line/50">
                        <ul className="m-0 px-5 py-4 flex flex-col gap-2.5 list-none">
                          {role.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="flex gap-3 text-muted text-[14px] leading-relaxed"
                            >
                              <span className="text-accent shrink-0 mt-1.25 text-[9px]">
                                ◆
                              </span>
                              <span>{parseBold(b)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

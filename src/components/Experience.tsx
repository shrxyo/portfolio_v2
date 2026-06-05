import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Reveal from './Reveal'

type RoleType   = 'Research' | 'Industry'
type FilterType = 'All' | RoleType

interface Role {
  type:      RoleType
  title:     string
  company:   string
  location:  string
  period:    string
  techStack: string[]
  bullets:   string[]
  logoLetter: string
  logoColor:  string
}

const roles: Role[] = [
  {
    type:       'Research',
    title:      'Research Extern',
    company:    'Oracle',
    location:   'Amherst, MA',
    period:     'Jan 2026 – Present',
    logoLetter: 'O',
    logoColor:  'bg-amber-100 text-amber-700',
    techStack:  ['Python', 'PyTorch', 'Evolution Strategies', 'Qwen2.5-3B', 'LLM Training', 'COCONUT'],
    bullets: [
      'Built a gradient-free LLM training framework combining Evolution Strategies with latent chain-of-thought, enabling backprop-free CoT training on Qwen2.5-3B with zero intermediate activation storage.',
      'Designed and benchmarked three gradient-free latent architectures (weighted softmax over top-k tokens, residual MLP head, cross-attention head) inside the ES loop.',
      'Reached 34.96% test reward (weighted softmax, top-10) vs. a 24.18% ES baseline — a 44% relative gain — outperforming vanilla COCONUT (20.00%).',
    ],
  },
  {
    type:       'Research',
    title:      'Graduate Researcher',
    company:    'Center for Intelligent Information Retrieval, UMass',
    location:   'Amherst, MA',
    period:     'Jul 2025 – Jan 2026',
    logoLetter: 'U',
    logoColor:  'bg-red-100 text-red-700',
    techStack:  ['Python', 'LLaMA-3.2', 'HuggingFace', 'WildChat', 'Fine-tuning', 'Benchmarking'],
    bullets: [
      'Curated a 500K+ dialogue benchmark from WildChat filtered by repetition density to study redundant token generation in LLMs.',
      'Fine-tuned Llama-3.2-1B-Instruct to detect and mark redundant content during generation via a custom structured syntax tag — 75.1% train / 71.3% eval accuracy with a <4% generalization gap.',
      'Validated the reuse-tagging pipeline across DeepSeek V3, Qwen 3, and Kimi K2.',
    ],
  },
  {
    type:       'Industry',
    title:      'Data Science Intern',
    company:    'Metropolis Healthcare',
    location:   'Mumbai, India',
    period:     'Jan 2024 – May 2024',
    logoLetter: 'M',
    logoColor:  'bg-blue-100 text-blue-700',
    techStack:  ['Python', 'T5', 'GPT-3.5', 'RAG', 'AWS S3', 'Tableau', 'SQL', 'ETL'],
    bullets: [
      'Shipped a production summarization pipeline (T5 extractive + GPT-3.5 generation) with a RAG layer grounding outputs in patient records; served via chatbot, +20% end-user satisfaction.',
      'Cut 12+ hours of weekly manual reporting by building ETL over 2M+ rows and automating Tableau/SQL dashboards on AWS S3.',
    ],
  },
  {
    type:       'Research',
    title:      'Research Intern',
    company:    'National University of Singapore',
    location:   'Singapore',
    period:     'Jun 2023 – Jul 2023',
    logoLetter: 'N',
    logoColor:  'bg-teal-100 text-teal-700',
    techStack:  ['Python', 'YOLOv8', 'Flask', 'Computer Vision', 'ONNX'],
    bullets: [
      'Built SAFESCAN, a YOLOv8 PPE-detection system — 82% accuracy at 30 FPS on live video.',
      'Optimized the inference pipeline for real-time throughput; deployed via Flask for multiclass monitoring.',
    ],
  },
  {
    type:       'Industry',
    title:      'Data Analyst Intern',
    company:    'Stockone Technologies (acq. by Shipsy)',
    location:   'Bangalore, India',
    period:     'Apr 2023 – Jun 2023',
    logoLetter: 'S',
    logoColor:  'bg-purple-100 text-purple-700',
    techStack:  ['PostgreSQL', 'Django', 'Power BI', 'Sentry', 'Python'],
    bullets: [
      'Queried a 5M+ row PostgreSQL backend for warehouse KPI dashboards (Power BI) across 3 warehouses; extended Django auth with Sentry-powered real-time session alerting.',
    ],
  },
]

const filters: FilterType[] = ['All', 'Research', 'Industry']

function TagPill({ type }: { type: RoleType }) {
  if (type === 'Research') {
    return (
      <span className="bg-accent text-cream text-[11px] tracking-wide px-2.5 py-0.5 rounded-full shrink-0">
        Research
      </span>
    )
  }
  return (
    <span className="border border-line text-ink text-[11px] tracking-wide px-2.5 py-0.5 rounded-full shrink-0">
      Industry
    </span>
  )
}

export default function Experience() {
  const [filter,    setFilter]    = useState<FilterType>('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const visible = roles.filter(r => filter === 'All' || r.type === filter)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section id="experience" className="bg-sand py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Header row */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="section-heading mb-2">Experience</h2>
              <p className="section-sub">Research and industry roles.</p>
            </div>
            <div className="flex gap-6 pb-1">
              {filters.map(f => (
                <button
                  key={f}
                  type="button"
                  onClick={() => { setFilter(f); setOpenIndex(null) }}
                  className={[
                    'text-[13px] tracking-wide transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer',
                    filter === f
                      ? 'text-accent underline underline-offset-4 decoration-accent'
                      : 'text-muted hover:text-ink',
                  ].join(' ')}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Role list */}
        <div className="flex flex-col divide-y divide-line">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((role, i) => (
              <motion.div
                key={role.title + role.company}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-4 py-7 text-left group cursor-pointer bg-transparent border-none p-0"
                >
                  {/* Company logo avatar */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[15px] shrink-0 mt-0.5 ${role.logoColor}`}>
                    {role.logoLetter}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-ink font-semibold text-[17px] leading-snug group-hover:text-accent transition-colors duration-150">
                          {role.title}
                        </span>
                        <TagPill type={role.type} />
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-muted text-[13px]">{role.period}</span>
                        <FiChevronDown
                          size={15}
                          className={`text-muted transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </div>

                    {/* Company · location */}
                    <p className="text-muted text-[14px] mb-3 leading-snug m-0">
                      {role.company} · {role.location}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {role.techStack.map(tag => (
                        <span
                          key={tag}
                          className="text-muted text-[11px] tracking-wide border border-line bg-cream px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                {/* Accordion content */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="m-0 pb-7 pl-14 flex flex-col gap-2.5 list-none">
                        {role.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3 text-muted text-[15px] leading-relaxed">
                            <span className="text-accent shrink-0 mt-[4px] text-[10px]">◆</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

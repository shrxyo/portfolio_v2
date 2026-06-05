import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

type RoleType   = 'Research' | 'Industry'
type FilterType = 'All' | RoleType

interface Role {
  type:     RoleType
  title:    string
  company:  string
  location: string
  period:   string
  bullets:  string[]
}

const roles: Role[] = [
  {
    type:     'Research',
    title:    'Research Extern',
    company:  'Oracle',
    location: 'Amherst, MA',
    period:   'Jan 2026 – Present',
    bullets: [
      'Built a gradient-free LLM training framework combining Evolution Strategies with latent chain-of-thought, enabling backprop-free CoT training on Qwen2.5-3B with zero intermediate activation storage.',
      'Designed and benchmarked three gradient-free latent architectures (weighted softmax over top-k tokens, residual MLP head, cross-attention head) inside the ES loop.',
      'Reached 34.96% test reward (weighted softmax, top-10) vs. a 24.18% ES baseline — a 44% relative gain — outperforming vanilla COCONUT (20.00%).',
    ],
  },
  {
    type:     'Research',
    title:    'Graduate Researcher',
    company:  'Center for Intelligent Information Retrieval, UMass',
    location: 'Amherst, MA',
    period:   'Jul 2025 – Jan 2026',
    bullets: [
      'Curated a 500K+ dialogue benchmark from WildChat filtered by repetition density to study redundant token generation in LLMs.',
      'Fine-tuned Llama-3.2-1B-Instruct to detect and mark redundant content during generation via a custom structured syntax tag — 75.1% train / 71.3% eval accuracy with a <4% generalization gap.',
      'Validated the reuse-tagging pipeline across DeepSeek V3, Qwen 3, and Kimi K2.',
    ],
  },
  {
    type:     'Industry',
    title:    'Data Science Intern',
    company:  'Metropolis Healthcare',
    location: 'Mumbai, India',
    period:   'Jan 2024 – May 2024',
    bullets: [
      'Shipped a production summarization pipeline (T5 extractive + GPT-3.5 generation) with a RAG layer grounding outputs in patient records; served via chatbot, +20% end-user satisfaction.',
      'Cut 12+ hours of weekly manual reporting by building ETL over 2M+ rows and automating Tableau/SQL dashboards on AWS S3.',
    ],
  },
  {
    type:     'Research',
    title:    'Research Intern',
    company:  'National University of Singapore',
    location: 'Singapore',
    period:   'Jun 2023 – Jul 2023',
    bullets: [
      'Built SAFESCAN, a YOLOv8 PPE-detection system — 82% accuracy at 30 FPS on live video.',
      'Optimized the inference pipeline for real-time throughput; deployed via Flask for multiclass monitoring.',
    ],
  },
  {
    type:     'Industry',
    title:    'Data Analyst Intern',
    company:  'Stockone Technologies (acq. by Shipsy)',
    location: 'Bangalore, India',
    period:   'Apr 2023 – Jun 2023',
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
  const [filter, setFilter] = useState<FilterType>('All')

  const visible = roles.filter(r => filter === 'All' || r.type === filter)

  return (
    <section id="experience" className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Header row */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="accent text-accent text-[15px] tracking-wide m-0">experience</h2>

            <div className="flex gap-6">
              {filters.map(f => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={[
                    'text-[13px] tracking-wide transition-colors duration-[150ms] bg-transparent border-none p-0 cursor-pointer',
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
        <div className="flex flex-col">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(role => (
              <motion.div
                key={role.title + role.company}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="border-l-2 border-line pl-6 py-7 first:pt-0 last:pb-0"
              >
                {/* Title + tag + date */}
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-ink font-semibold text-[17px] leading-snug">{role.title}</span>
                    <TagPill type={role.type} />
                  </div>
                  <span className="text-muted text-[13px] shrink-0 pt-0.5">{role.period}</span>
                </div>

                {/* Company · location */}
                <p className="text-muted text-[14px] mb-3 leading-snug">
                  {role.company} · {role.location}
                </p>

                {/* Bullets */}
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-muted text-[15px] leading-relaxed">
                      <span className="text-muted shrink-0 mt-[3px]">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

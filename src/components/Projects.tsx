import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'
import Reveal from './Reveal'

interface Project {
  title:    string
  desc:     string
  tags:     string[]
  github?:  string
  live?:    string
  logoLetter: string
  logoColor:  string
}

const projects: Project[] = [
  {
    title:       'EI Assistant — Hybrid RAG + CAG Architecture',
    desc:        'A multi-turn emotional-intelligence assistant. Fine-tuned GPT-4o-mini and LLaMA-3.2-1B with a hybrid pipeline — RAG over ChromaDB for session memory, CAG for therapeutic guidelines. 67.5% semantic similarity vs. a 63% baseline; a licensed clinical psychologist rated it 4.5/5 on empathy, clarity, and supportiveness.',
    tags:        ['Python', 'HF Transformers', 'ChromaDB', 'RAG', 'Evaluation'],
    github:      '#',
    logoLetter:  'E',
    logoColor:   'bg-violet-100 text-violet-700',
  },
  {
    title:       'Realtime Chat Platform (ongoing)',
    desc:        'A horizontally scalable real-time chat platform with AI-assisted threads (RAG over message history), semantic search via pgvector, and presence/typing over Redis Pub/Sub. Targeting sub-100ms P99 latency at 10K concurrent WebSocket connections, behind Docker + GitHub Actions CI/CD with Prometheus metrics.',
    tags:        ['FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket', 'pgvector', 'Docker'],
    github:      '#',
    logoLetter:  'R',
    logoColor:   'bg-cyan-100 text-cyan-700',
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section id="projects" className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-3">Projects</h2>
            <p className="section-sub">Things I've built and shipped.</p>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-line">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              {/* Accordion trigger */}
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-4 py-7 text-left group cursor-pointer bg-transparent border-none p-0"
              >
                {/* Logo avatar */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[15px] shrink-0 mt-0.5 ${project.logoColor}`}>
                  {project.logoLetter}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-3">
                    <span className="text-ink font-semibold text-[17px] leading-snug group-hover:text-accent transition-colors duration-150">
                      {project.title}
                    </span>
                    <FiChevronDown
                      size={15}
                      className={`text-muted shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-muted text-[11px] tracking-wide border border-line bg-sand px-2.5 py-0.5 rounded-full"
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
                    <div className="pl-14 pb-7">
                      <p className="text-muted text-[15px] leading-relaxed mb-4 m-0">
                        {project.desc}
                      </p>
                      <div className="flex gap-5">
                        {project.github && (
                          <a
                            href={project.github}
                            target={project.github === '#' ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide hover:text-accent transition-colors duration-150"
                          >
                            <FiGithub size={14} />
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target={project.live === '#' ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide hover:text-accent transition-colors duration-150"
                          >
                            <FiExternalLink size={14} />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

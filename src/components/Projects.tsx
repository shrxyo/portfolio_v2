import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal'

interface Project {
  title:  string
  desc:   string
  tags:   string[]
  github?: string
  live?:   string
}

// To add a new project, append an object to this array:
// { title: '...', desc: '...', tags: ['...'], github: 'https://...', live: 'https://...' }
const projects: Project[] = [
  {
    title:  'EI Assistant — Hybrid RAG + CAG Architecture',
    desc:   'A multi-turn emotional-intelligence assistant. Fine-tuned GPT-4o-mini and LLaMA-3.2-1B with a hybrid pipeline — RAG over ChromaDB for session memory, CAG for therapeutic guidelines. 67.5% semantic similarity vs. a 63% baseline; a licensed clinical psychologist rated it 4.5/5 on empathy, clarity, and supportiveness.',
    tags:   ['Python', 'HF Transformers', 'ChromaDB', 'RAG', 'Evaluation'],
    github: '#',
  },
  {
    title:  'Realtime Chat Platform (ongoing)',
    desc:   'A horizontally scalable real-time chat platform with AI-assisted threads (RAG over message history), semantic search via pgvector, and presence/typing over Redis Pub/Sub. Targeting sub-100ms P99 latency at 10K concurrent WebSocket connections, behind Docker + GitHub Actions CI/CD with Prometheus metrics.',
    tags:   ['FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket', 'pgvector', 'Docker'],
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-sand py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <h2 className="accent text-accent text-[15px] tracking-wide mb-12">projects</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { title, desc, tags, github, live } = project

  return (
    <div className="
      group flex flex-col gap-4
      bg-cream border border-line rounded-2xl p-7
      transition-all duration-[150ms] ease-out
      hover:-translate-y-1 hover:border-muted hover:shadow-[0_4px_20px_0_rgba(33,30,26,0.08)]
    ">

      {/* Title */}
      <h3 className="text-ink font-semibold text-[17px] leading-snug m-0">{title}</h3>

      {/* Description */}
      <p className="text-muted text-[15px] leading-relaxed m-0 grow">{desc}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="border border-line text-ink text-[11px] tracking-wide px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1">
        {github && (
          <a
            href={github}
            target={github === '#' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide hover:text-accent transition-colors duration-[150ms]"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target={live === '#' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide hover:text-accent transition-colors duration-[150ms]"
          >
            <FiExternalLink size={14} />
            Live
          </a>
        )}
      </div>

    </div>
  )
}

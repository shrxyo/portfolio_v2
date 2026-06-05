import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal'

interface Project {
  title:   string
  desc:    string
  tags:    string[]
  github?: string
  live?:   string
}

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
    <section id="projects" className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-3">Projects</h2>
            <p className="section-sub">Things I've built and shipped.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <div className="bg-sand border border-line rounded-2xl p-7 flex flex-col gap-5 h-full
                              hover:-translate-y-1.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]
                              transition-all duration-200 cursor-default">

                <div className="flex-1">
                  <h3 className="text-ink font-semibold text-[18px] leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-muted text-[13px] tracking-wide border border-line bg-cream px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex gap-5 pt-1 border-t border-line">
                    {project.github && (
                      <a
                        href={project.github}
                        target={project.github === '#' ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted text-[14px] font-medium tracking-wide hover:text-accent transition-colors duration-150"
                      >
                        <FiGithub size={15} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target={project.live === '#' ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted text-[14px] font-medium tracking-wide hover:text-accent transition-colors duration-150"
                      >
                        <FiExternalLink size={15} />
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
  )
}

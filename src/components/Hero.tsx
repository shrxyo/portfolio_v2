import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shrxyo',                  icon: FiGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-balakrishna/', icon: FiLinkedin },
  { label: 'Email',    href: 'mailto:shreyabalakrishna02@gmail.com',         icon: FiMail     },
]

const infoTags = [
  'MS in Computer Science · UMass Amherst',
  'Research Extern at Oracle',
  'ML / AI Researcher & Engineer',
  'Amherst, MA',
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-cream min-h-[92dvh] flex items-center overflow-hidden">
      {/* Subtle animated background blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      <div className="max-w-content mx-auto w-full px-6 md:px-10 py-16 md:py-24 relative z-10">
        <Reveal>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border border-line bg-sand/70 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-ink text-[13px] tracking-wide">Open to full time roles starting June 2026</span>
          </div>

          {/* Big name display */}
          <h1 className="text-ink font-sans font-bold leading-[0.93] tracking-[-0.035em] mb-6"
            style={{ fontSize: 'clamp(3.2rem, 10vw, 7.5rem)' }}>
            Shreya<br />Balakrishna
          </h1>

          {/* Tagline */}
          <p className="text-muted leading-relaxed max-w-140 mb-8"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            I build and study language models —{' '}
            reasoning, retrieval, and the systems that make them useful.
          </p>

          {/* Info tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {infoTags.map(tag => (
              <span
                key={tag}
                className="text-muted text-[12px] tracking-wide border border-line bg-sand/60 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-cream text-[13px] tracking-wide px-5 py-2.5 rounded-sm hover:bg-[#bc5630] transition-colors duration-150"
            >
              Download Résumé
            </a>

            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide border border-line px-4 py-2.5 rounded-sm hover:text-accent hover:border-accent transition-colors duration-150"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

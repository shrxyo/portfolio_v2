import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Accent from './Accent'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shrxyo',                  icon: FiGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-balakrishna/', icon: FiLinkedin },
  { label: 'Email',    href: 'mailto:shreyabalakrishna02@gmail.com',         icon: FiMail     },
]

export default function Hero() {
  return (
    <section id="home" className="bg-cream min-h-[92dvh] flex items-center">
      <div className="max-w-content mx-auto w-full px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          {/* Eyebrow */}
          <p className="text-muted text-[13px] tracking-[0.06em] uppercase mb-6">
            ML/AI Researcher &amp; Engineer · Amherst, MA
          </p>

          {/* Headline */}
          <h1 className="text-ink font-sans font-medium text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.12] tracking-[-0.02em] max-w-[820px] mb-6">
            I build and study language models —{' '}
            reasoning, retrieval, and the systems{' '}
            that make them <Accent>useful.</Accent>
          </h1>

          {/* Sub-line */}
          <p className="text-muted text-[16px] md:text-[17px] leading-relaxed max-w-[520px] mb-10">
            MS in Computer Science at UMass Amherst, graduating May 2026.
            Currently a Research Extern at Oracle.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-cream text-[13px] tracking-wide px-5 py-2.5 hover:bg-[#bc5630] transition-colors duration-[150ms]"
            >
              Download Résumé
            </a>

            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide border border-line px-4 py-2.5 hover:text-accent hover:border-accent transition-colors duration-[150ms]"
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

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shrxyo',                  icon: FiGithub,   bg: '#24292e' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-balakrishna/', icon: FiLinkedin, bg: '#0A66C2' },
  { label: 'Email',    href: 'mailto:shreyabalakrishna02@gmail.com',         icon: FiMail,     bg: '#D2643A' },
]

const infoItems = [
  { heading: 'Role',      value: 'ML / AI Researcher & Engineer' },
  { heading: 'Education', value: 'MS in Computer Science · UMass Amherst' },
  { heading: 'Currently', value: 'Research Extern at Oracle' },
  { heading: 'Based in',  value: 'Amherst, MA' },
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-cream min-h-[92dvh] flex items-center overflow-hidden">
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      <div className="max-w-content mx-auto w-full px-6 md:px-10 py-16 md:py-24 relative z-10">
        <Reveal>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border border-line bg-sand/70 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-ink text-[14px] tracking-wide">Open to full time roles starting June 2026</span>
          </div>

          {/* Name — largest element on the page */}
          <h1
            className="text-ink font-sans font-bold leading-[0.93] tracking-[-0.035em] mb-5"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
          >
            Shreya<br />Balakrishna
          </h1>

          {/* Tagline — second biggest */}
          <p
            className="text-muted leading-relaxed max-w-140 mb-8 font-medium"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
          >
            I build and study language models —{' '}
            reasoning, retrieval, and the systems that make them useful.
          </p>

          {/* Labeled info items */}
          <div className="flex flex-col gap-2.5 mb-10">
            {infoItems.map(item => (
              <div key={item.heading} className="flex items-center gap-3">
                <span className="text-accent text-[11px] font-bold uppercase tracking-widest w-24 shrink-0">
                  {item.heading}
                </span>
                <span className="text-ink text-[14px] font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-[14px] font-semibold tracking-wide px-6 py-3 rounded-sm hover:bg-[#bc5630] transition-colors duration-150"
              style={{ color: '#ffffff' }}
            >
              Download Résumé
            </a>

            {/* Social icon circles */}
            {socialLinks.map(({ label, href, icon: Icon, bg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-150"
                style={{ backgroundColor: bg }}
              >
                <Icon size={18} color="#ffffff" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

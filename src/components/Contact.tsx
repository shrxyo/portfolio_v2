import { Fragment } from 'react'
import { FiGithub, FiLinkedin, FiFileText, FiMail, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shrxyo',                  icon: FiGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-balakrishna/', icon: FiLinkedin },
  { label: 'Résumé',   href: BASE + 'resume.pdf',                           icon: FiFileText },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="bg-sand border border-line rounded-3xl px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <FiMail size={24} className="text-accent" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-heading mb-3">Get in Touch</h2>
              <p className="section-sub max-w-sm mx-auto">
                Open to research and engineering roles, collaborations, or a good conversation.
                The fastest way to reach me is email.
              </p>
            </div>

            {/* Email button */}
            <a
              href="mailto:shreyabalakrishna02@gmail.com"
              className="group inline-flex items-center gap-3 bg-accent text-cream text-[15px] tracking-wide px-7 py-4 rounded-xl hover:bg-[#bc5630] transition-all duration-150 shadow-[0_4px_16px_0_rgba(210,100,58,0.25)] hover:shadow-[0_6px_20px_0_rgba(210,100,58,0.35)] hover:-translate-y-0.5"
            >
              <FiMail size={17} />
              shreyabalakrishna02@gmail.com
              <FiArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-1" />
            </a>

            {/* Social links */}
            <div className="flex items-center gap-1 pt-2">
              {socialLinks.map(({ label, href, icon: Icon }, i) => (
                <Fragment key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide px-3 py-1.5 rounded-lg hover:text-accent hover:bg-accent/5 transition-colors duration-150"
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                  {i < socialLinks.length - 1 && (
                    <span className="text-line text-[18px] select-none">·</span>
                  )}
                </Fragment>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

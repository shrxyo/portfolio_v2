import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shrxyo',                    icon: FiGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-balakrishna/',   icon: FiLinkedin },
  { label: 'Résumé',   href: BASE + 'resume.pdf',                             icon: FiFileText },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-sand py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-6 max-w-[540px] mx-auto">

            <h2 className="accent text-accent text-[15px] tracking-wide m-0">get in touch</h2>

            <p className="text-muted text-[17px] leading-relaxed m-0">
              Open to research and engineering roles, collaborations, or a good conversation.
              The fastest way to reach me is email.
            </p>

            <a
              href="mailto:shreyabalakrishna02@gmail.com"
              className="inline-flex items-center bg-accent text-cream text-[14px] tracking-wide px-6 py-3 hover:bg-[#bc5630] transition-colors duration-[150ms]"
            >
              shreyabalakrishna02@gmail.com
            </a>

            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted text-[13px] tracking-wide hover:text-accent transition-colors duration-[150ms]"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

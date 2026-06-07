import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
]

export default function Nav() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [activeSection,  setActiveSection]   = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Highlight nav link for the section currently in the middle of the viewport
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const linkClass = (href: string) =>
    [
      'text-[13px] tracking-wide transition-all duration-[150ms] rounded-full px-3 py-1',
      activeSection === href.slice(1)
        ? 'bg-accent text-white font-medium'
        : 'text-muted hover:text-ink',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-cream/90 backdrop-blur-md transition-all duration-300',
        scrolled ? 'border-b border-line' : 'border-b border-transparent',
      ].join(' ')}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-16">

        {/* Wordmark */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-ink text-[13px] tracking-[0.08em] uppercase font-medium hover:text-accent transition-colors duration-[150ms]"
        >
          Shreya Balakrishna
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass(href)}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-[13px] tracking-wide underline-offset-4 hover:underline transition-colors duration-[150ms]"
            >
              Résumé
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 text-ink"
        >
          <span className={['block h-px bg-ink transition-all duration-200 origin-center', menuOpen ? 'rotate-45 translate-y-[6px]' : 'w-5'].join(' ')} />
          <span className={['block h-px bg-ink transition-all duration-200',               menuOpen ? 'opacity-0 w-5'               : 'w-5'].join(' ')} />
          <span className={['block h-px bg-ink transition-all duration-200 origin-center', menuOpen ? '-rotate-45 -translate-y-[6px]' : 'w-5'].join(' ')} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-200 ease-out',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-col bg-cream border-t border-line px-6 py-4 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className={[
                  'block text-[14px] py-3 border-b border-line transition-colors duration-[150ms]',
                  activeSection === href.slice(1) ? 'text-accent' : 'text-muted hover:text-accent',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block text-accent text-[14px] py-3 underline-offset-4 hover:underline transition-colors duration-[150ms]"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

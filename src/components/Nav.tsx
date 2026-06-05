import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Hobbies',    href: '#hobbies'     },
  { label: 'Contact',    href: '#contact'     },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

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
              <a
                href={href}
                className="text-muted text-[13px] tracking-wide hover:text-accent underline-offset-4 hover:underline transition-colors duration-[150ms]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
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
          <span
            className={[
              'block h-px bg-ink transition-all duration-200 origin-center',
              menuOpen ? 'rotate-45 translate-y-[6px]' : 'w-5',
            ].join(' ')}
          />
          <span
            className={[
              'block h-px bg-ink transition-all duration-200',
              menuOpen ? 'opacity-0 w-5' : 'w-5',
            ].join(' ')}
          />
          <span
            className={[
              'block h-px bg-ink transition-all duration-200 origin-center',
              menuOpen ? '-rotate-45 -translate-y-[6px]' : 'w-5',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-200 ease-out',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-col bg-cream border-t border-line px-6 py-4 gap-0 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block text-muted text-[14px] py-3 border-b border-line hover:text-accent underline-offset-4 hover:underline transition-colors duration-[150ms]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
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

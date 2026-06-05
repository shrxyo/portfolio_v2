const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Hobbies',    href: '#hobbies'     },
  { label: 'Contact',    href: '#contact'     },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-line">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-14">
        <a
          href="#home"
          className="text-ink font-semibold tracking-tight text-sm hover:text-accent transition-colors duration-[150ms]"
        >
          Portfolio
        </a>
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted text-sm hover:text-accent transition-colors duration-[150ms]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

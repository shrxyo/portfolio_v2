export default function Footer() {
  return (
    <footer className="bg-cream border-t border-line py-6">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="text-muted text-[12px]">
          &copy; {new Date().getFullYear()} Shreya Balakrishna
        </span>
        <a
          href="#home"
          className="text-muted text-[12px] hover:text-accent transition-colors duration-[150ms]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

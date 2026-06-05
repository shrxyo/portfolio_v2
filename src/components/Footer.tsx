export default function Footer() {
  return (
    <footer className="bg-cream border-t border-line py-8">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <p className="text-muted text-sm text-center">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-cream py-16 md:py-24"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          {/* Content coming soon */}
          <p className="text-muted text-sm">Hero — coming soon</p>
        </Reveal>
      </div>
    </section>
  )
}

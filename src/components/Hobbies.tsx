import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

const photos = [
  BASE + 'hobbies/hobby-1.jpg',
  BASE + 'hobbies/hobby-2.jpg',
  BASE + 'hobbies/hobby-3.jpg',
  BASE + 'hobbies/hobby-4.jpg',
  BASE + 'hobbies/hobby-5.jpg',
  BASE + 'hobbies/hobby-6.jpg',
  BASE + 'hobbies/hobby-7.jpg',
  BASE + 'hobbies/hobby-8.jpg',
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-cream border-t border-line py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <div className="mb-10">
            <h2 className="section-heading mb-3">Life Outside the Terminal</h2>
            <p className="section-sub">A few snapshots from when I'm not staring at a screen.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden rounded-2xl border border-line">
          {photos.map((src, i) => (
            <div key={src} className="overflow-hidden aspect-square">
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

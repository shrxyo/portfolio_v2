import Reveal from './Reveal'
import Accent from './Accent'

const BASE = import.meta.env.BASE_URL

// To update: edit caption, swap the src filename, or add/remove items.
const photos = [
  { src: BASE + 'hobbies/hobby-1.jpg', caption: 'Hiking'      },
  { src: BASE + 'hobbies/hobby-2.jpg', caption: 'Photography' },
  { src: BASE + 'hobbies/hobby-3.jpg', caption: 'Cooking'     },
  { src: BASE + 'hobbies/hobby-4.jpg', caption: 'Reading'     },
  { src: BASE + 'hobbies/hobby-5.jpg', caption: 'Travel'      },
  { src: BASE + 'hobbies/hobby-6.jpg', caption: 'Music'       },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <h2 className="text-ink font-medium text-[clamp(1.25rem,3vw,2rem)] leading-snug tracking-[-0.01em] mb-12">
            what I do when I'm{' '}
            <Accent className="text-ink">not working</Accent>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.05}>
              <figure className="m-0 flex flex-col gap-2">
                <div className="overflow-hidden rounded-xl border border-line">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-200 ease-out hover:scale-[1.02]"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="text-muted text-[12px] tracking-wide px-1">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

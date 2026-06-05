import aboutImg from '../assets/about.jpg'
import Reveal from './Reveal'

const focusAreas = ['LLM Training', 'Reasoning', 'Retrieval / RAG', 'Applied ML']

export default function About() {
  return (
    <section id="about" className="bg-sand py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* Photo */}
            <div className="w-full md:w-[40%] shrink-0">
              <img
                src={aboutImg}
                alt="Shreya Balakrishna"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[340px] mx-auto md:mx-0 aspect-[3/4] object-cover object-top rounded-2xl border border-line shadow-[4px_6px_24px_0_rgba(33,30,26,0.10)]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6 md:w-[60%]">
              <h2 className="accent text-accent text-[15px] tracking-wide m-0">
                about me
              </h2>

              <p className="text-ink text-[17px] leading-relaxed m-0">
                I'm a computer science master's student at UMass Amherst, working at the intersection of large language models, reasoning, and information retrieval. My research has spanned gradient-free LLM training and latent chain-of-thought, redundancy in model generation, and retrieval-augmented systems.
              </p>

              <p className="text-muted text-[17px] leading-relaxed m-0">
                Before UMass I earned my B.Tech in CS from VIT in India, and worked across healthcare data science, computer vision, and analytics. I like problems where careful research meets things that actually ship.
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map(area => (
                  <span
                    key={area}
                    className="text-ink text-[12px] tracking-wide border border-line px-3 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

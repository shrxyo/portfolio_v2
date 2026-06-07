import aboutImg from "../assets/about.png";
import Reveal from "./Reveal";

const focusAreas = [
  "LLM Systems",
  "Agentic AI",
  "Retrieval / RAG",
  "AI/ML Engineering",
  "Backend Systems",
  "LLM Training and Evaluation",
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-8 md:mb-10">
            <h2 className="section-heading">About Me</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-7 md:items-stretch">
            {/* Photo */}
            <div className="w-full md:w-[42%] shrink-0">
              <img
                src={aboutImg}
                alt="Shreya Balakrishna"
                loading="lazy"
                decoding="async"
                className="w-full aspect-3/4 md:aspect-auto md:h-full object-cover object-top rounded-lg border border-line shadow-[4px_6px_24px_0_rgba(33,30,26,0.10)]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 flex-1">
              <p className="text-ink text-[15px] leading-relaxed m-0 text-justify">
                I'm Shreya, an AI/ML engineer and computer science graduate
                student at UMass Amherst. I spend most of my time building
                systems around language models—training them, evaluating them,
                and figuring out how to make them actually useful.
              </p>

              <p className="text-muted text-[15px] leading-relaxed m-0 text-justify">
                Lately, that has meant experimenting with gradient-free LLM
                training in collaboration with Oracle, studying how models
                reason and generate repetitive content at UMass's Center for
                Intelligent Information Retrieval, and building
                retrieval-augmented applications that can interact with
                real-world data. I'm fascinated by the gap between what models
                can do in research and what they can reliably do in production.
              </p>
              <p className="text-muted text-[15px] leading-relaxed m-0 text-justify">
                Before grad school, I worked across healthcare data science,
                analytics, and computer vision while earning my B.Tech in
                Computer Science from VIT. I enjoy problems that sit at the
                boundary of research and engineering where understanding the
                underlying ideas matters just as much as shipping something
                people can use.
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map((area) => (
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
  );
}

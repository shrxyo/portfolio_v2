import { FiCalendar, FiMapPin } from "react-icons/fi";
import Reveal from "./Reveal";
import umassLogo from "../assets/master.png";
import vitLogo from "../assets/bachelor.png";

interface Degree {
  school: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
  logo: string;
  logoText: string;
  logoColor: string;
}

const degrees: Degree[] = [
  {
    degree: "MS in Computer Science",
    school: "University of Massachusetts Amherst",
    location: "Amherst, MA",
    period: "Aug 2024 – May 2026",
    logo: umassLogo,
    logoText: "UM",
    logoColor: "#881c1c",
    highlights: [
      "Coursework spanning Large Language Models, Information Retrieval, and Reasoning systems.",
      "Graduate Researcher at CIIR — redundancy detection and mitigation in LLM generation.",
      "AI Research at Oracle — gradient-free LLM training with latent chain-of-thought (COCONUT) and Evolution Strategies (ES).",
    ],
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "VIT Vellore",
    location: "Vellore, India",
    period: "Jul 2020 – May 2024",
    logo: vitLogo,
    logoText: "VIT",
    logoColor: "#003479",
    highlights: [
      "Coursework spanning ML, algorithms, databases, and distributed systems.",
      "Capstone: Researched sleep stage subtyping using Siamese and CNN-BiLSTM models",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-2">Education</h2>
            <p className="section-sub"></p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {degrees.map((deg, i) => (
            <Reveal key={deg.degree} delay={i * 0.06}>
              <div
                className="bg-sand border border-line rounded-2xl p-6 flex flex-col gap-4
                           shadow-[0_2px_4px_rgba(0,0,0,0.06),0_6px_18px_rgba(0,0,0,0.08)]
                           hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(210,100,58,0.22),0_6px_16px_rgba(0,0,0,0.09)]
                           transition-all duration-200"
              >
                {/* Header: degree info + logo */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 mb-2">
                      <h3 className="text-ink font-bold text-[17px] leading-snug m-0">
                        {deg.degree}
                      </h3>
                      <span className="text-muted text-[15px]">@</span>
                      <span className="text-accent font-semibold text-[15px]">
                        {deg.school}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="flex items-center gap-1.5 text-muted text-[13px]">
                        <FiCalendar size={12} className="shrink-0" />
                        {deg.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted text-[13px]">
                        <FiMapPin size={12} className="shrink-0" />
                        {deg.location}
                      </span>
                    </div>
                  </div>

                  {/* University logo */}
                  <div className="shrink-0 w-14 h-14 rounded overflow-hidden border border-line bg-white flex items-center justify-center">
                    <img
                      src={deg.logo}
                      alt={deg.school}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-cream rounded-xl border border-line/50 px-5 py-4">
                  <ul className="m-0 p-0 list-none flex flex-col gap-2">
                    {deg.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex gap-3 text-muted text-[14px] leading-relaxed"
                      >
                        <span className="text-accent shrink-0 mt-1.25 text-[9px]">
                          ◆
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

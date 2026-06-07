import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

const BASE = import.meta.env.BASE_URL;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/shrxyo",
    icon: FiGithub,
    bg: "#24292e",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreya-balakrishna/",
    icon: FiLinkedin,
    bg: "#0A66C2",
  },
  {
    label: "Email",
    href: "mailto:shreyabalakrishna02@gmail.com",
    icon: FiMail,
    bg: "#D2643A",
  },
];

const infoItems = [
  {
    heading: "Education",
    value: "MS in Computer Science · UMass Amherst . Graduated 2026",
  },
  { heading: "Currently", value: "AI Research Extern at Oracle" },
  { heading: "Based in", value: "Amherst, MA" },
];

const tickerItems = [
  "Data Science",
  "AI / ML Engineering",
  "AI Research",
  "LLM Systems",
  "Data Science",
  "AI / ML Engineering",
  "AI Research",
  "LLM Systems",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg-section relative min-h-[92dvh] flex items-center overflow-hidden"
    >
      <div className="max-w-content mx-auto w-full px-6 md:px-10 py-16 md:py-24 relative z-10">
        <Reveal>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border-2 border-emerald-600/60 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-emerald-700 font-semibold text-[14px] tracking-wide">
              Open to full time roles starting June 2026
            </span>
          </div>

          {/* Hey there label */}
          <p className="text-muted font-normal tracking-[0.2em] uppercase text-[13px] mb-3">
            Hey there! I am
          </p>

          {/* Name — largest element on the page */}
          <h1
            className="text-ink font-sans font-bold leading-[0.93] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(3.4rem, 9vw, 6.5rem)" }}
          >
            Shreya
            <br />
            Balakrishna
          </h1>
        </Reveal>

        {/* Interest ticker — outside Reveal so it scrolls continuously without being gated */}
        <div
          className="overflow-hidden mb-7"
          style={{
            maxWidth: "60%",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="ticker-track flex items-center whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center shrink-0">
                {tickerItems.map((item, i) => (
                  <span key={i} className="flex items-center">
                    <span
                      className="text-ink font-medium px-7"
                      style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)" }}
                    >
                      {item}
                    </span>
                    <span
                      className="text-accent select-none"
                      style={{ fontSize: "0.75rem" }}
                    >
                      ◆
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          {/* Tagline — second biggest */}
          <p
            className="text-muted leading-relaxed max-w-140 mb-8 font-medium"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
          >
            I build AI systems that bridge research, reasoning, and real-world
            applications.
          </p>

          {/* Labeled info items */}
          <div className="flex flex-col gap-2.5 mb-10">
            {infoItems.map((item) => (
              <div key={item.heading} className="flex items-center gap-3">
                <span className="text-accent text-[11px] font-bold uppercase tracking-widest w-24 shrink-0">
                  {item.heading}
                </span>
                <span className="text-ink text-[14px] font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={BASE + "resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-[14px] font-semibold tracking-wide px-6 py-3 rounded-sm hover:bg-[#bc5630] transition-colors duration-150"
              style={{ color: "#ffffff" }}
            >
              Download Résumé
            </a>

            {/* Social icon circles */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-150"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={18} color="#ffffff" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

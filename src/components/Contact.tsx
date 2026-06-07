import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import Reveal from "./Reveal";

const BASE = import.meta.env.BASE_URL;

const iconLinks = [
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
    label: "Résumé",
    href: BASE + "resume.pdf",
    icon: FiFileText,
    bg: "#4A4540",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section-bg pt-14 md:pt-20 pb-6">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="bg-sand border border-line rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <FiMail size={24} className="text-accent" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="section-heading mb-3">Contact me!</h2>
              <p className="section-sub max-w-sm mx-auto">
                If you're hiring for a full-time role or interested in
                collaborating, I'd love to hear from you. The fastest way to
                reach me is email.
              </p>
            </div>

            {/* CTA — email on its own row, icons below */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <a
                href="mailto:shreyabalakrishna02@gmail.com"
                className="inline-flex items-center gap-2 bg-accent text-[14px] font-semibold tracking-wide px-6 py-3 rounded-sm hover:bg-[#bc5630] transition-colors duration-150"
                style={{ color: "#ffffff" }}
              >
                <FiMail size={16} />
                shreyabalakrishna02@gmail.com
              </a>

              <div className="flex items-center gap-3">
                {iconLinks.map(({ label, href, icon: Icon, bg }) => (
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
          </div>
        </Reveal>
      </div>

      {/* Footer — merged in so there's no section boundary */}
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-10 pb-2">
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
    </section>
  );
}

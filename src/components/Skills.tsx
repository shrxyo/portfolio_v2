import Reveal from './Reveal'

interface SkillCategory {
  label: string
  icon:  string
  tags:  string[]
}

const categories: SkillCategory[] = [
  {
    label: 'Languages',
    icon:  '⌨',
    tags:  ['Python', 'Go', 'Java', 'C++', 'SQL', 'Bash / Shell'],
  },
  {
    label: 'Frameworks',
    icon:  '🧩',
    tags:  ['FastAPI', 'Django', 'Spring', 'gRPC', 'Pydantic', 'Gin'],
  },
  {
    label: 'Cloud & Infra',
    icon:  '☁',
    tags:  ['Microsoft Azure', 'Docker', 'Kubernetes', 'Kafka', 'Terraform', 'Helm', 'ArgoCD', 'OpenShift', 'Prometheus', 'Grafana', 'Loki', 'CI/CD'],
  },
  {
    label: 'APIs & Auth',
    icon:  '🔐',
    tags:  ['RESTful APIs', 'GraphQL', 'gRPC', 'OAuth 2.0', 'Keycloak', 'Azure APIM'],
  },
  {
    label: 'Databases',
    icon:  '🗄',
    tags:  ['PostgreSQL', 'MongoDB Atlas', 'MySQL', 'Redis', 'pgvector'],
  },
  {
    label: 'Paradigms',
    icon:  '📐',
    tags:  ['Microservices', 'CRDTs / OT', 'Event-driven', 'Distributed Systems', 'HPA scaling', 'WebSockets'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-3">Technical Skills</h2>
            <p className="section-sub">Languages, frameworks, and platforms I work with.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.06}>
              <div className="bg-sand border border-line rounded-2xl p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cream border border-line flex items-center justify-center text-[18px] shrink-0">
                    {cat.icon}
                  </div>
                  <span className="text-ink font-semibold text-[15px] tracking-wide">{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-muted text-[12px] tracking-wide border border-line bg-cream px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

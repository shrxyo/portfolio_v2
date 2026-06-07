import Reveal from './Reveal'

interface SkillCategory {
  label: string
  tags:  string[]
}

const categories: SkillCategory[] = [
  {
    label: 'ML & AI',
    tags:  [
      'PyTorch', 'TensorFlow', 'vLLM', 'LoRA', 'HF Accelerate', 'HF Transformers',
      'Supervised Fine-Tuning', 'Weaviate', 'ChromaDB', 'Vector Databases',
      'LangChain', 'LangGraph', 'OpenAI API', 'RAG', 'RLHF', 'Reward Modeling',
      'Weights & Biases',
    ],
  },
  {
    label: 'Data & Analytics',
    tags:  ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'SQL', 'BigQuery', 'ETL', 'PySpark'],
  },
  {
    label: 'Frameworks & Tools',
    tags:  [
      'FastAPI', 'Flask', 'Django', 'React', 'Node.js', 'Docker',
      'Git', 'MongoDB', 'WebSocket', 'REST', 'AWS', 'CI/CD', 'HPC', 'Slurm',
    ],
  },
  {
    label: 'Languages',
    tags:  ['Python', 'C++', 'JavaScript', 'TypeScript', 'Bash/Shell', 'R'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">

        <Reveal>
          <div className="mb-12">
            <h2 className="section-heading mb-3">Technical Skills</h2>
            <p className="section-sub">Languages, frameworks, and platforms I work with.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.06}>
              <div className="bg-sand border border-line rounded-2xl p-6 flex flex-col gap-4 h-full
                              shadow-[0_2px_4px_rgba(0,0,0,0.06),0_6px_18px_rgba(0,0,0,0.08)]
                              hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(210,100,58,0.22),0_6px_16px_rgba(0,0,0,0.09)]
                              transition-all duration-200">
                <span className="text-ink font-bold text-[16px] tracking-wide">{cat.label}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-muted text-[13px] tracking-wide border border-line bg-cream px-3 py-1 rounded-full"
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

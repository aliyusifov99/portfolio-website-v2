import { Briefcase } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { experiences } from "../data/constants";

function ExperienceCard({ exp, index }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal relative pl-8 pb-12 last:pb-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-dark-200 dark:bg-dark-700 last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 border-2 border-primary-500 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary-500" />
      </div>

      <div className="bg-white dark:bg-dark-800/50 rounded-xl p-6 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm hover:shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-dark-900 dark:text-white text-lg">
              {exp.role}
            </h3>
            <p className="text-primary-500 dark:text-primary-400 font-medium">
              {exp.company}
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              {exp.period}
            </span>
            <p className="text-xs text-dark-400 mt-1">{exp.location}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useReveal();

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-dark-50 dark:bg-dark-900"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="reveal mb-12">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 flex items-center gap-3">
            <Briefcase className="text-primary-500" size={28} />
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full" />
        </div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

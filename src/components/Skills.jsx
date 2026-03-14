import {
  Code2,
  Database,
  BarChart3,
  Brain,
  LineChart,
  GitBranch,
  Cloud,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { skillCategories } from "../data/constants";

const iconMap = {
  Code2,
  Database,
  BarChart3,
  Brain,
  LineChart,
  GitBranch,
  Cloud,
};

function SkillCategory({ category, index }) {
  const ref = useReveal();
  const Icon = iconMap[category.icon] || Code2;

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white dark:bg-dark-800/50 rounded-xl p-6 border border-dark-100 dark:border-dark-700 h-full hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/30">
            <Icon size={20} className="text-primary-500" />
          </div>
          <h3 className="font-semibold text-dark-900 dark:text-white text-sm">
            {category.name}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm bg-dark-50 dark:bg-dark-700 text-dark-700 dark:text-dark-200 rounded-lg border border-dark-100 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-12">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 flex items-center gap-3">
            <Code2 className="text-primary-500" size={28} />
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

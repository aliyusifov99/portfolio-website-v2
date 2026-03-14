import { useState } from "react";
import { Github, FolderOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/constants";

const projectImages = import.meta.glob("../../assets/*.png", { eager: true });

function getProjectImage(slug) {
  const key = Object.keys(projectImages).find((k) => k.includes(slug));
  return key ? projectImages[key].default : null;
}

function ProjectCard({ project, index }) {
  const ref = useReveal();
  const image = getProjectImage(project.slug);

  return (
    <div
      ref={ref}
      className="reveal group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white dark:bg-dark-800/50 rounded-2xl border border-dark-100 dark:border-dark-700 overflow-hidden hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video bg-dark-100 dark:bg-dark-800">
          {image ? (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-dark-300 dark:text-dark-600">
              <FolderOpen size={48} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-bold text-dark-900 dark:text-white text-lg mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="pt-4 border-t border-dark-100 dark:border-dark-700">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-12">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 flex items-center gap-3">
            <FolderOpen className="text-primary-500" size={28} />
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full" />
          <p className="text-dark-500 dark:text-dark-400 mt-4 max-w-2xl">
            A selection of projects spanning data engineering, machine learning, and data analysis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {projects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 font-medium rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all"
            >
              {showAll ? "Show Less" : "Show More Projects"}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

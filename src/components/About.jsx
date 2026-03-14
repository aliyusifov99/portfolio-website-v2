import { MapPin, GraduationCap } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { personalInfo, education } from "../data/constants";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-dark-950"
    >
      <div ref={ref} className="max-w-6xl mx-auto reveal">
        <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary-500 rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
              I'm a Data Engineer based in{" "}
              <span className="font-medium text-dark-800 dark:text-dark-100">
                {personalInfo.location}
              </span>
              , focused on building scalable data pipelines and cloud infrastructure. I have a strong interest in AI and deploying machine learning systems into production.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
              I've worked across fintech, energy, and tech — designing end-to-end data solutions from ingestion to serving. I enjoy turning messy, real-world data into reliable systems that drive decisions.
            </p>

            <div className="flex items-center gap-3 text-dark-500 dark:text-dark-400">
              <MapPin size={18} className="text-primary-500" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
              <GraduationCap size={20} className="text-primary-500" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="pl-4 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <p className="font-medium text-dark-800 dark:text-dark-100">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {edu.school} &middot; {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

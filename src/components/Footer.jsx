import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-dark-900 dark:bg-dark-950 border-t border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#"
              className="text-xl font-bold text-white tracking-tight"
            >
              AY<span className="text-primary-400">.</span>
            </a>
            <p className="text-dark-400 text-sm mt-1">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800 text-center">
          <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
            &copy; {year} {personalInfo.name}. Built with{" "}
            <Heart size={14} className="text-red-400" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
}

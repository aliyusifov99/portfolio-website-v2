import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data/constants";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-700/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-left order-2 md:order-1">
          <p className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in">
            {personalInfo.title}
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-white leading-tight mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-lg text-dark-500 dark:text-dark-400 max-w-lg mb-8 animate-fade-in-up animation-delay-200">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              <FileText size={18} />
              View Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 font-medium rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 font-medium rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center order-1 md:order-2 animate-fade-in animation-delay-200">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-400 dark:text-dark-500 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}

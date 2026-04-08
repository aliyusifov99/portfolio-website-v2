import { Award } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { certifications } from "../data/constants";

function AzureLogo() {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12"
    >
      <defs>
        <linearGradient
          id="azure-a"
          x1="58.972"
          x2="37.191"
          y1="9.822"
          y2="93.291"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient
          id="azure-b"
          x1="59.719"
          x2="52.691"
          y1="52.572"
          y2="55.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".07" stopOpacity=".2" />
          <stop offset=".32" stopOpacity=".1" />
          <stop offset=".62" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="azure-c"
          x1="37.279"
          x2="62.473"
          y1="5.605"
          y2="93.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path
        fill="url(#azure-a)"
        d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"
      />
      <path
        fill="#0078d4"
        d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.586z"
      />
      <path
        fill="url(#azure-b)"
        d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972h23.573l-10.318-30.259-28.024-.004L59.47 6.544z"
      />
      <path
        fill="url(#azure-c)"
        d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"
      />
    </svg>
  );
}

function DatabricksLogo() {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12"
    >
      <polygon points="48,6 88,28 88,68 48,90 8,68 8,28" fill="#FF3621" />
      <polygon points="48,18 76,33 76,63 48,78 20,63 20,33" fill="#FFFFFF" opacity="0.15" />
      <polygon points="48,22 72,36 72,60 48,74 24,60 24,36" fill="#FF3621" />
      <polygon points="48,30 65,40 65,56 48,66 31,56 31,40" fill="#FFFFFF" />
      <polygon points="48,36 60,43 60,53 48,60 36,53 36,43" fill="#FF3621" />
    </svg>
  );
}

function CertLogo({ provider }) {
  if (provider === "databricks") return <DatabricksLogo />;
  return <AzureLogo />;
}

function CertCard({ cert, index }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white dark:bg-dark-800/50 rounded-2xl border border-dark-100 dark:border-dark-700 overflow-hidden hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all h-full flex flex-col items-center text-center p-8">
        <div className="mb-4">
          <CertLogo provider={cert.provider} />
        </div>
        <span className="px-3 py-1 text-xs font-bold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
          {cert.badge}
        </span>
        <h3 className="font-bold text-dark-900 dark:text-white text-lg mb-2">
          {cert.name}
        </h3>
        <p className="text-sm text-dark-500 dark:text-dark-400">
          Issued {cert.date}
        </p>
      </a>
    </div>
  );
}

export default function Certifications() {
  const headerRef = useReveal();

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-white dark:bg-dark-950"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-12">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 flex items-center gap-3">
            <Award className="text-primary-500" size={28} />
            Certifications
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <CertCard key={cert.badge} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

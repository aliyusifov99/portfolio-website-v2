import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { personalInfo } from "../data/constants";

export default function Contact() {
  const headerRef = useReveal();
  const formRef = useReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-12">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2 flex items-center gap-3">
            <Mail className="text-primary-500" size={28} />
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full" />
          <p className="text-dark-500 dark:text-dark-400 mt-4 max-w-2xl">
            Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Mail size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-dark-400 dark:text-dark-500">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-dark-800 dark:text-dark-200 font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Phone size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-dark-400 dark:text-dark-500">Phone</p>
                <p className="text-dark-800 dark:text-dark-200 font-medium">
                  {personalInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <MapPin size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="text-sm text-dark-400 dark:text-dark-500">Location</p>
                <p className="text-dark-800 dark:text-dark-200 font-medium">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

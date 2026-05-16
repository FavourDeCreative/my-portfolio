import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">Contact</p>

        <h2 className="text-5xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <a
            href="mailto:yourmail@example.com"
            className="flex items-center gap-2 border border-white/10 px-6 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            <FaEnvelope size={18} />
            Email
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-white/10 px-6 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-white/10 px-6 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

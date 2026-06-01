import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="txt uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Something Amazing
          </h2>

          <p className="text-white/70 max-w-xl mx-auto">
            Have a project in mind? Send a message and let’s work together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-lg">
          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 focus:border-cyan-400 outline-none transition resize-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl  font-semibold btn1 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Section */}
          <div className="mt-10 text-center">
            <p className="mb-4 text-white/70 uppercase tracking-[0.25em] text-sm">
              Connect with us on socials
            </p>

            <div className="flex justify-center gap-5 flex-wrap">
              <a
                href="#"
                className="p-3 rounded-full border soc transition"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full border soc transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full border soc transition"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="p-3 rounded-full border soc transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="mailto:yourmail@example.com"
                className="p-3 rounded-full border soc transition"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

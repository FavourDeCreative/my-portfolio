import {
  FileCode,
  Palette,
  Monitor,
  Layers,
  Rocket,
  Database,
} from "lucide-react";

const skills = [
  { icon: FileCode, title: "HTML & CSS", color: "#E34F26" },
  { icon: Palette, title: "Tailwind CSS", color: "#38BDF8" },
  { icon: Monitor, title: "React & Next.js", color: "#61DAFB" },
  { icon: Layers, title: "Vue & Nuxt", color: "#42B883" },
  { icon: Rocket, title: "GSAP Animations", color: "#88CE02" },
  { icon: Database, title: "Bootstrap", color: "#7952B3" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            My Stack
          </p>
          <h2 className="text-5xl font-bold">Technologies I Use</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition"
              >
                <Icon
                  size={40}
                  style={{ color: skill.color }}
                  className="mb-6"
                />

                <h3 className="text-2xl font-semibold">{skill.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

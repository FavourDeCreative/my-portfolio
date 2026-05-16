import {
  FileCode,
  Palette,
  Monitor,
  Layers,
  Rocket,
  Database,
} from "lucide-react";

const skills = [
  {
    icon: FileCode,
    title: "HTML & CSS",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
  },
  {
    icon: Monitor,
    title: "React & Next.js",
  },
  {
    icon: Layers,
    title: "Vue & Nuxt",
  },
  {
    icon: Rocket,
    title: "GSAP Animations",
  },
  {
    icon: Database,
    title: "Bootstrap",
  },
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
                className="border border-white/10 rounded-3xl p-10 hover:border-cyan-400 transition bg-white/5 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400 mb-6" size={40} />

                <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "CDORF Autos",
    description: "Luxury autos marketplace website.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
  {
    title: "CDORF Properties",
    description: "Modern real estate platform.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "Crypto Dashboard",
    description: "Modern fintech dashboard UI.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="overflow-hidden h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-zinc-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

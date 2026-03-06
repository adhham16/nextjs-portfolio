import { projects } from "@/libs/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-8">
            <h2 className="text-4xl font-bold text-center mb-20">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, i) => (
                    <div key={i} className="p-8 border rounded-3xl hover:scale-105 transition">
                        <h3 className="text-2xl font-semibold mb-4">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 mb-6">
                            {project.description}
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 text-sm rounded-xl border"
                                                            >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
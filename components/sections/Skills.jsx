export const skills = [
    {
        category: "Backend",
        items: ["PHP", "Laravel", "REST API", "MySQL", "Database Design"]
    },
    {
        category: "Frontend",
        items: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"]
    },
    {
        category: "DevOps & Cloud",
        items: ["AWS", "Linux", "CyberPanel", "OpenLiteSpeed", "Server Management"]
    },
    {
        category: "Tools",
        items: ["Git", "Docker", "Postman", "CI/CD"]
    }
];
export default function Skills() {
    const skills = [
        "Laravel",
        "Next.js",
        "React",
        "Tailwind CSS",
        "AWS",
        "MySQL",
        "DevOps",
        "REST APIs",
        "Security"
    ];

    return (
        <section className="py-32 px-8 max-w-6xl mx-auto" id="skills">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-6 py-3 rounded-xl border hover:scale-105 transition"
                    >
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
}
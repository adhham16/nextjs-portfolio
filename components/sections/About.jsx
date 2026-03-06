export const about = {
    title: "About Me",
    description: `
I am a Full Stack Software Engineer with more than five years of professional experience developing modern web applications. 

Currently working at Ali Bin Abdulaziz Investments Co in the UAE, where I develop and maintain scalable backend systems, RESTful APIs, and modern frontend interfaces.

My expertise includes PHP, Laravel, React, Next.js, and MySQL, along with cloud infrastructure using AWS. I enjoy building performant systems, optimizing databases, and designing clean user interfaces.

I am passionate about solving complex problems and building reliable software that improves user experience and business operations.
`,
};
export default function About() {
    return (
        <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>

            <p className="text-gray-400 text-lg leading-8">
                Software Engineer with 5+ years experience building enterprise
                web applications using modern JavaScript, Laravel, AWS DevOps,
                and scalable REST APIs.
            </p>
        </section>
    );
}
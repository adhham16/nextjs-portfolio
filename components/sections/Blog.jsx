import { getPosts } from "@/libs/medium";

export default async function Blog() {
    const posts = await getPosts();

    return (
        <section className="py-32 px-8">
            <h2 className="text-4xl font-bold text-center mb-20">
                Blog
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post, i) => (
                    <a
                        key={post.guid || i}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 border rounded-2xl hover:scale-105 transition"
                    >
                        <h3 className="font-semibold mb-3">{post.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
}
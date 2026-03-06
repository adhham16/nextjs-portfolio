"use client";

import { motion } from "framer-motion";

export const hero = {
    name: "Ahamad Adhham",
    role: "Full Stack Software Engineer",
    location: "Abu Dhabi / Dubai, UAE",
    description:
        "Full Stack Software Engineer with 5+ years of experience building scalable web applications, APIs, and cloud infrastructure. Specialized in Laravel, React, Next.js, and AWS with strong expertise in backend architecture and DevOps.",
    resume: "/cv/Ahamad-Adhham-CV.pdf",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your@email.com"
};
export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-7xl font-bold mb-6">
                    Full Stack Engineer
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    Building scalable web systems | Security | DevOps | Cloud
                </p>

                <div className="flex justify-center gap-6">
                    <a className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                        View Work
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
"use client";

import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-xl z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between p-6">
        <h1 className="text-2xl font-bold">Ahamad.dev</h1>

        <div className="flex gap-8 items-center">
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="/blog" className="hover:opacity-70">Blog</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    async function sendMessage() {
        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email })
        });

        alert("Sent!");
    }

    return (
        <section id="contact" className="py-32 text-center">
            <input
                className="p-4 rounded-xl border"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button
                onClick={sendMessage}
                className="ml-4 px-6 py-4 rounded-xl bg-blue-600"
            >
                Send
            </button>
        </section>
    );
}
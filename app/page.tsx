import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
];

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C#",
    "APS.NET CORE",
    "React",
    "Node.js",
    "MongoDB",
    "SQL",
    "Git",
    "Business Analysis",
    "Agile Methodologies",
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                Hi, I'm Thabiso Kgare
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500">
                    An Aspiring full-stack developer / Business Analyst Based in South Africa
                </h2>
                <a
                    href="/extra/ThabisoKgare.pdf"
                    download="ThabisoKgare.pdf"
                    className="mt-4 inline-block px-6 py-2 text-sm font-semibold text-zinc-800 bg-zinc-300 rounded-lg hover:bg-zinc-400 transition duration-300"
                >
                    Download my  CV
                </a>
            </div>
            <div className="mt-16 text-center animate-fade-in">
                <h2 className="text-xl font-semibold text-zinc-500">Skills</h2>
                <ul className="flex flex-wrap justify-center gap-4 mt-4">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="px-4 py-2 text-sm font-medium text-zinc-800 bg-zinc-300 rounded-lg"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

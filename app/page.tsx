import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import ContactForm from "@/app/components/ContactForm";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDatabase,
} from "react-icons/fa";
import { SiSharp, SiDotnet, SiMongodb } from "react-icons/si";
import Footer from "@/app/components/Footer";
import SkillsSection from "@/app/components/SkillsSection";
import Projects from "@/app/components/Projects";

const navigation = [
    { name: "Projects", href: "/projects" }, // Ensure this matches the file name in the pages directory
    { name: "Contact", href: "/contact" }, // Ensure this matches the file name in the pages directory
];

const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C-Sharp", icon: <SiSharp /> },
    { name: "ASP.NET Core", icon: <SiDotnet /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "TypeScript", icon: <FaJs /> },
    { name: "REST APIs", icon: <FaDatabase /> },
    { name: "UI/UX Design", icon: <FaCss3Alt /> },
    { name: "Docker", icon: <FaDatabase /> },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            {/* Navigation */}
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => {
                        console.log("Navigation Item:", item); // Debugging line
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                passHref // Ensure href is passed down
                                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </ul>
            </nav>

            {/* Glow Effect Lines */}
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                Hi, I'm Thabiso Kgare
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

            {/* Subheading and CV Download */}
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500">
                    An Aspiring full-stack developer / Business Analyst Based in South Africa
                </h2>
                <a
                    href="/extra/ThabisoKgare.pdf"
                    download="ThabisoKgare.pdf"
                    className="mt-4 inline-block px-6 py-2 text-sm font-semibold text-zinc-800 bg-zinc-300 rounded-lg hover:bg-zinc-400 transition duration-300"
                >
                    Download my CV
                </a>
            </div>

            {/* About Me Section */}
            <section id="about" className="mt-16 text-center animate-fade-in group">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-zinc-500">About Me</h2>
                    <p className="text-sm text-center text-zinc-500 max-w-2xl px-4">
                        Hi, I’m Thabiso Kgare, a Full-Stack Developer / Business Analyst from South Africa. I
                        love building web applications with technologies like React, Node.js, and ASP.NET Core, and I enjoy
                        using my analytical skills to solve business challenges. When I’m not coding, I’m exploring new tech
                        trends or mentoring others. Let’s connect and create something great together!
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <SkillsSection />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <section id="contact" className="mt-16 text-center animate-fade-in group">
                <h2 className="text-xl font-semibold text-zinc-500">Contact</h2>
                <p className="text-sm text-center text-zinc-500 max-w-2xl px-4">
                    Feel free to reach out to me using the form below.
                </p>
                <ContactForm />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
"use client"; // Mark this component as a Client Component if using interactivity

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import {SiSharp, SiDotnet, SiMongodb } from "react-icons/si";
import Particles from "@/app/components/particles";
import React from "react";

const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C#", icon: <SiSharp /> },
    { name: "ASP.NET Core", icon: <SiDotnet /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "TypeScript", icon: <FaJs /> },
    { name: "REST APIs", icon: <FaDatabase /> },
    { name: "UI/UX Design", icon: <FaCss3Alt /> },
    { name: "Docker", icon: <FaDatabase /> },
    { name: "AWS", icon: <FaDatabase /> },
];

const SkillsSection = () => {
    return (
        <div className="mt-16 text-center animate-fade-in group">
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h2 className="text-xl font-semibold text-zinc-500">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto px-4">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="relative flex flex-col items-center justify-center p-6 text-sm text-zinc-300 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition duration-300 animate-float"
                        style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation delay
                    >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
"use client";

import Image from "next/image";
import React from "react";
import { projects } from "@/data/projects"; // Import projects data
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-cards";
import Link from "next/link";
import {Navigation} from "@/app/components/nav";
import Particles from "@/app/components/particles";

export default function ProjectsPage() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen overflow-auto">
            <Navigation />
            <section className="flex flex-wrap justify-center w-full gap-8 mx-auto mt-32 lg:gap-16 px-4">
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />
                {projects.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            {/* Project Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            {/* Project Description */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {project.description}
                            </CardItem>

                            {/* Project Image */}
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.image}
                                    height="200"
                                    width="300"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>

                            {/* Buttons */}
                            <div className="flex justify-between items-center mt-6">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://github.com/thabisokgare"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Learn more →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {project.status}
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </section>
        </div>
    );
}

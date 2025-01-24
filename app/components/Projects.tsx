import React from 'react';
import Particles from "@/app/components/particles";
import { projects } from "@/data/projects";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-cards";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="mt-32 text-center animate-fade-in group">
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h2 className="text-xl font-semibold text-zinc-500">Projects</h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 max-w-7xl">
                {projects.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
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
                                    href={project.link || "#"}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                                >
                                    view  →
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
            </div>
        </section>
    );
};

export default Projects;
"use client";

import { BackgroundLines } from "@/app/components/background-lines";
import { Navigation } from "@/app/components/nav";
import React from "react";
import { projects } from "@/data/projects";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import Link from "next/link";

export default function Example() {
    return (
        <BackgroundLines className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <div className="flex flex-wrap w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">

                        {projects.map((project) => (
                            <CardContainer className="inter-var" key={project.id}>
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {project.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img src={project.image} alt={project.title} className="rounded-lg" />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href="#"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            Learn more →
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as="span"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            {project.status}
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}

                    </div>
                </BackgroundLines>
            </div>
        </BackgroundLines>
    );
}

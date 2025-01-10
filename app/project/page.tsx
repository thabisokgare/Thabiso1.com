﻿"use client";

import { Navigation } from "@/app/components/nav";
import { projects } from "@/data/projects";
import { BackgroundBeamsWithCollision } from "@/app/components/background-beams-with-collision";
import { CardBody, CardContainer, CardItem } from "../components/3d-cards";
import Link from "next/link";
import React from "react";

export default function Example() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen overflow-y-auto">
            <Navigation />
            <BackgroundBeamsWithCollision>
                <div className="flex items-center justify-center min-h-screen px-4 mx-auto pt-24">
                    <div className="flex flex-wrap justify-center w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
                        {projects.map((project) => (
                            <CardContainer key={project.id} className="inter-var">
                                <CardBody
                                    className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href="https://github.com/thabisokgare"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >

                                            Learn more →
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}

"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section className='mt-20' id="projects">
            <h2 className='text-3xl'>Projects</h2>
            {projects.map((project) => (
                <Card className="mt-8" key={project.id}>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 md:col-span-4">
                                <Image
                                    className="project-img"
                                    src={project.image_path}
                                    alt={project.project_title}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-8">
                                <h3 className="text-2xl"><b>{project.project_title}</b></h3>
                                <p className="text-justify text-sm/7">
                                    {project.project_description}
                                </p>
                                <Button>
                                    <Link href="/">Visit</Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
"use client"
import { MdOutlinePhp } from "react-icons/md";
import { Card, CardContent } from "./ui/card";
import { DiRedis, DiSymfony } from "react-icons/di";
import { FaDocker, FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

export default function Skills() {
    return (
        <section className='mt-20' id="skills">
            <h2 className='text-3xl'>Skills</h2>
            <div className="grid grid-cols-12 gap-8 mt-10">
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <MdOutlinePhp className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <DiSymfony className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <FaGithub className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <FaDocker className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <RiNextjsLine className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <Card>
                        <CardContent>
                            <DiRedis className="h-25 w-auto" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
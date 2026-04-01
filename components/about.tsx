"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { EnvelopeIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function About() {
    return (
        <section className='mt-20' id="project">
            <div className='grid grid-cols-12 gap-8'>
                <div className="col-span-12 md:col-span-4">
                    <Image
                        className="profile-image"
                        src='/image/pranan_subba.jpg'
                        alt="Pranan Subba"
                        width={500}
                        height={500}
                    />
                </div>
                <div className='col-span-12 md:col-span-8'>
                    <h2 className='text-3xl'>About me</h2>
                    <div className='text-justify'>
                        <p className="text-sm/8">I'm <b>Pranan Subba</b> from Darjeeling, West Bengal, India.</p>
                        <p className="text-sm/8">I have been involved in the field of Web Development for 5 + years, during which I've gained experience working on a diverse range of projects, from complex undertakings to various other assignments. My skill set includes proficiency in technologies such as PHP, the Symfony Framework, GIT, HTML & CSS, and JavaScript.
                        </p>
                        <p className="text-sm/8">If you believe that I would be a good fit for your company or project, please feel free to connect with me to discuss any project-related matters. I'm here to collaborate and contribute to our shared goals.</p>
                    </div>
                    <div className="mt-8">
                        <Button>
                            <EnvelopeIcon />
                            <Link href="mailto:pranansubba@gmail.com">
                                Contact</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

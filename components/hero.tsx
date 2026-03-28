"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react";

export default function Hero() {
    return (
        <section>
            <h2 className='text-6xl'>Hi!,</h2>
            <h1 className='text-8xl mt-7'>I'm <b>Pranan Subba</b>,</h1>
            <p className='text-xl mt-7'>Web Developer, Cat Lover and Metal Head \m/</p>
            <div className="mt-7">
                <Button>
                    <LinkedinLogoIcon />
                    <Link href='/'>
                        LinkedIn
                    </Link>
                </Button>
                <Button className="ms-2">
                    <GithubLogoIcon />
                    <Link href='/'>
                        GitHub
                    </Link>
                </Button>
                <Button className="ms-2">
                    <ReadCvLogoIcon />
                    <Link href='/'>
                        Resume
                    </Link>
                </Button>
            </div>
        </section>
    )
}

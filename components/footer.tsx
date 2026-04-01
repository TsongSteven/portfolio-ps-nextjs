"use client"
import { Button } from './ui/button'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from '@phosphor-icons/react'

export default function Footer() {
    return (
        <footer>
            <Separator />
            <div className='bg-white mt-10 mb-10'>
                <div className='text-center'>
                    <div className='mb-5 gap-4'>
                        <Button>
                            <LinkedinLogoIcon />
                            <Link href='https://www.linkedin.com/in/pranan-subba-348848129/' target="_blank">
                                LinkedIn
                            </Link>
                        </Button>
                        <Button className="ms-2">
                            <GithubLogoIcon />
                            <Link href='https://github.com/TsongSteven' target="_blank">
                                GitHub
                            </Link>
                        </Button>
                        <Button className="ms-2">
                            <ReadCvLogoIcon />
                            <Link href='/cv/PrananSubba.pdf' target="_blank">
                                Resume
                            </Link>
                        </Button>
                    </div>
                    Made with &#x2764;&#xfe0f; - Pranan Subba
                </div>
            </div>
        </footer>
    )
}

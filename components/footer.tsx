"use client"
import { Button } from './ui/button'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer>
            <Separator />
            <div className='bg-white mt-10 mb-10'>
                <div className='text-center'>
                    <div className='mb-5 gap-4'>
                        <Button variant="outline">
                            <FaLinkedinIn />
                        </Button>
                        <Button variant="outline">
                            <FaEnvelope />
                        </Button>
                        <Button variant="outline">
                            <FaGithub />
                        </Button>
                    </div>
                    Made with &#x2764;&#xfe0f; - Pranan Subba
                </div>
            </div>
        </footer>
    )
}

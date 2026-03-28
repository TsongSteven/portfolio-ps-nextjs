"use client"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";

export default function OngoingProject() {
    return (
        <section className='mt-20' id="ongoing-project">
            <h2 className='text-3xl'>Ongoing Project</h2>
            <div className='mt-10'>
                <Card>
                    <CardHeader>
                        <CardAction>
                            September 2025 – Present
                        </CardAction>
                        <CardTitle><b>NAATI CCL Test Preparation Application</b></CardTitle>
                        <i>Independent Full-Stack Web Project – Symfony PHP Framework</i>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm/6 text-justify">Solo developing a full-stack EdTech SaaS platform simulating the official NAATI CCL exam experience, targeting Nepali migration applicants.</p>
                        <p className="text-sm/6 text-justify"><b>Built end-to-end features:</b> User registration with email OTP, Google login, Dodo Payments integration, real-time audio recording/upload, server-side MP3 conversion using FFmpeg + Symfony Messenger queues, admin CRUD for mock tests/dialogues/audios/PDFs/vocab lists, profile management with image cropping, examiner-style review tools, and purchased-user assignment.</p>
                        <p className="text-sm/6 text-justify"><b>Tech stack:</b> Symfony (PHP backend), Symfony UX Turbo, Symfony LiveComponents, asynchronous processing for reliability, secure file handling.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

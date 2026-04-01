"use client"

import { useState } from "react"
import ThemeToggle from "./theme-toggle"
import Link from "next/link"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 bg-white dark:bg-black z-50">
            <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">

                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 font-bold">
                        Pranan Subba
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-x-5 items-center">
                    <Link href="/#about" className="text-sm font-semibold">About</Link>
                    <Link href="/#skills" className="text-sm font-semibold">Skills</Link>
                    <Link href="/#projects" className="text-sm font-semibold">Projects</Link>
                    <Link href="/#ongoing-project" className="text-sm font-semibold">Ongoing</Link>
                    {/* <Link href='/contact' className='text-sm/6 font-semibold'>Contact</Link>*/}
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle Button */}
                <div className="lg:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button onClick={() => setOpen(!open)}>
                        {open ? "✖" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden px-6 pb-4 space-y-3 bg-white dark:bg-black">
                    <Link href="/#about" onClick={() => setOpen(false)} className="block">About</Link>
                    <Link href="/#skills" onClick={() => setOpen(false)} className="block">Skills</Link>
                    <Link href="/#projects" onClick={() => setOpen(false)} className="block">Projects</Link>
                    <Link href="/#ongoing-project" onClick={() => setOpen(false)} className="block">Ongoing</Link>
                    {/* <Link href='/contact' className='text-sm/6 font-semibold'>Contact</Link>*/}
                </div>
            )}
        </header>
    )
}
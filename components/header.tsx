"use client"
import ThemeToggle from './theme-toggle'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='bg-white sticky top-0'>
            <nav aria-label='Global' className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className='flex lg:flex-1'>
                    <a href="/" className="-m-1.5 p-1.5">
                        <span><b>Pranan Subba</b></span>
                    </a>
                </div>
                <div className='flex gap-x-5'>
                    <Link href='/#about' className='text-sm/6 font-semibold'>About</Link>
                    <Link href='/#skills' className='text-sm/6 font-semibold'>Skills</Link>
                    <Link href='/#projects' className='text-sm/6 font-semibold'>Projects</Link>
                    <Link href='/#ongoing-project' className='text-sm/6 font-semibold'>Ongoing-project</Link>
                    {/* <Link href='/contact' className='text-sm/6 font-semibold'>Contact</Link>
                    <ThemeToggle /> */}
                </div>
            </nav>
        </header>
    )
}

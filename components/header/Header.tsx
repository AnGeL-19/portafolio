'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/projects',
        text: 'Projects'
    },
    {
        href: '/about',
        text: 'About'
    },
    {
        href: '/contact',
        text: 'Contact'
    },
]


export const Header = () => {

    const router = usePathname()
    const path = `/${router.split('/')[1]}`
    console.log(path);
    
    
  return (
    <header className='flex items-center w-full h-20 lg:px-20 md:px-6 px-2 '>
        <nav className='flex flex-row justify-between min-w-full'>
            <span >
                <Link href='/'
                        className='text-3xl font-bold text-slate-600'>
                    Angel MR
                </Link>
            </span>
            <ul className='flex flex-row gap-6'>
                {
                  links.map((link,i) => (
                    <li key={i}>
                        <Link href={link.href}
                                className={`text-xl font-semibold hover:text-cyan-500
                                ${path === link.href ? 'text-cyan-500' : 'text-slate-600'}
                                `}>
                            {link.text}
                        </Link>
                    </li>
                  ))  
                }
            </ul>
        </nav>
    </header>
  )
}

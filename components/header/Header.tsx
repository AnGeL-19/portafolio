'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


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
    
  return (
    <header className='flex justify-center items-center w-full h-20'>
        <nav className='flex flex-row justify-between w-[865px]'>
            <span>
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
                                className={`text-xl font-semibold text-slate-600 hover:text-cyan-500
                                ${path === link.href && 'text-cyan-500'}
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

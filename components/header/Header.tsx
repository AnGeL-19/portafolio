'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    {
        href: '/',
        text: 'Home',
        icon: 'home'
    },
    {
        href: '/projects',
        text: 'Projects',
        icon: 'bookmarks'
    },
    {
        href: '/about',
        text: 'About',
        icon: 'note'
    },
    {
        href: '/contact',
        text: 'Contact',
        icon: 'import_contacts'
    },
]


export const Header = () => {

    const router = usePathname()
    const path = `/${router.split('/')[1]}`
  
  return (
    <header className='flex items-center w-full h-20 lg:px-20 md:px-6 px-2 '>
        
        <nav className='flex flex-row flex-wrap justify-between min-w-full '>
  
            <span >
                <Link href='/'
                        >
                    
                    <span className=' font-bold text-slate-600 text-3xl  '>
                        Angel MR
                    </span>
                   
                </Link>
            </span>
            
            
            <ul className='flex flex-row gap-6 lg:flex-row'>
                {
                  links.map((link,i) => (
                    <li key={i}>
                        <Link href={link.href}>
                            <span className={`font-semibold hover:text-cyan-500 text-xl
                                ${path === link.href ? 'text-cyan-500' : 'text-slate-600'}
                                `}>
                            {link.text}
                            </span>
                        </Link>
                    </li>
                  ))  
                }
            </ul>

        </nav>
    </header>
  )
}

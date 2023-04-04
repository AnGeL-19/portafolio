'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../Button'


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

    const [showMenu, setShowMenu] = useState(false)
    const router = usePathname()
    const path = `/${router.split('/')[1]}`

  
  return (
    <header className='flex items-center w-full h-auto px-24 py-5 md:px-6 sm:px-2 '>
        
        <nav className='w-full min-h-20 md:h-auto'>
  
            <div className='flex flex-row justify-between w-full'>
                <Link href='/'>
                    
                    <span className=' font-bold text-slate-600 text-3xl  '>
                        Angel MR
                    </span>
                    
                </Link>


                <Button className='hidden md:flex' size='small' icon={`${showMenu ? 'close':'menu'}`} functionBtn={ () => setShowMenu(!showMenu) }/>

                    
                    <ul className={`flex flex-row gap-6 md:hidden `}>
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
            </div>    

               
                

            <div className={`py-3 ${!showMenu && 'hidden'} `}>    
                <ul className={`flex gap-4 md:flex-col`}>
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
            </div>
            


            

        </nav>
    </header>
  )
}

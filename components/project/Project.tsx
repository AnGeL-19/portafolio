import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type sizes = 'small' | 'normal' | 'medium' 

type infoProject = {
    name: string,
    description: string,
    img: string,
    appVisit: string | null,
    appSource: string | null,
    tools: string []
}

interface Props{
    size?: sizes;
    project: {
        id: number;
        api?: infoProject
        web?: infoProject
    }
}

export const Project = ({size,project}: Props) => {
  return (
    <article className={` rounded-xl flex flex-col justify-between overflow-hidden
        ${size=='small' && 'w-[264px] h-[237px]'}
        ${size=='normal' && 'w-[290px] h-[250px]'}
        ${size=='medium' && 'w-[360px] h-[280px]'}
        shadow-md
        hover:-translate-y-2
        duration-75
    `}>
        <div className='w-full h-full bg-slate-400'>
            <Link href={`/projects/detail/${project.id}`}>
                <Image 
                    alt={`${project.web?.name || ''}`} 
                    src={project.web?.img || ''} 
                    width={500}
                    height={500}
                    className='w-full h-full object-cover'
                    />
            </Link>
        </div>
        <div className='flex justify-between bg-white w-full h-7 pl-3 pr-3'>
        <span className='text-base text-[#676767] font-semibold'>{project.web?.name || ''} </span>

        <Link href={`/projects/detail/${project.id}`}>
            <span className='material-icons text-base text-[#676767] hover:text-[#414141]'>open_in_new</span>
        </Link>
        
        </div>
    </article>

  )
}

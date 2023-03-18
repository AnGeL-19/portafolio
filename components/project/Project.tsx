import Link from 'next/link'
import React from 'react'

type sizes = 'small' | 'normal' | 'medium' 

interface Props{
    size?: sizes
}

export const Project = ({size}: Props) => {
  return (
    <article className={`bg-slate-400 rounded-xl flex flex-col justify-between overflow-hidden
        ${size=='small' && 'min-w-[264px] min-h-[237px]'}
        ${size=='normal' && 'min-w-[280px] min-h-[250px]'}
        ${size=='medium' && 'min-w-[264px] min-h-[237px]'}
    `}>
        <div>
        {/* <Image 
            alt={'cosas'} 
            width={100}
            height={100}
            src='' /> */}
        </div>
        <div className='flex justify-between bg-white w-full h-6 pl-3 pr-3'>
        <span className='text-base text-[#676767] font-semibold'>Tweeter</span>

        <Link href='/projects/detail/1'>
            <span className='material-icons text-base text-[#676767] hover:text-[#414141]'>open_in_new</span>
        </Link>
        
        </div>
    </article>

  )
}

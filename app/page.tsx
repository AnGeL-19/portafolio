
import { ComponentLink } from '@/components/ComponentLink'
import { Project } from '@/components/project/Project'
import { ShowProjects } from '@/components/project/ShowProjects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
  }

export default function Home ()  {
  return (
    <div className="w-full h-full flex flex-col items-center">

      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start">
          <div className='mb-5'>
            <p className="text-xl font-normal text-[#414141]">
              Hi!, i am <span className="text-4xl font-bold">Angel Muñoz,</span><br/>
              <span className='text-2xl font-bold'>and Full Stack Software Engineer.</span>
            </p>
          </div>

          <div className="mb-5">
            <ComponentLink 
            className='hover:bg-[#95ECFF] hover:text-[#424242]'
              href='/about' 
              text='About Me' 
              size='medium' 
              icon='arrow_forward' 
              color='text-[#676767]' 
              backGroundColor='bg-[#BBF3FF]'
              rounded='rounded-xl' />
          </div>
        </div>
        

        {/* h-[324px] */}
        <section>
          <div className='max-w-[598px] bg-[#9378FF]/[.1] rounded-xl p-5'>
            <div className='flex justify-between mb-4'>
              <h3 className='text-2xl font-bold text-[#414141]'>Recent Project</h3>
              <ComponentLink 
                  className='hover:bg-[#95ECFF] hover:text-[#424242]'
                  href='/projects' 
                  size='small'
                  target={false} 
                  icon='arrow_forward' 
                  color='text-[#676767]' 
                  backGroundColor='bg-[#BBF3FF]'
                  rounded='rounded-xl' />
            </div>

            <div className='w-full h-full flex flex-row flex-wrap items-center justify-center gap-4'>

              <ShowProjects length={2} sizeComponents="small" />

            </div>

          </div>
        </section>

      </div>

    </div>
  )
}


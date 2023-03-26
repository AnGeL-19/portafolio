import Image from 'next/image'
import React from 'react'
import { ComponentLink } from '../ComponentLink'
import { Skill } from '../Skill'

interface Props{
    title: string,
    img: string | any,
    description: string,
    tools: string [],
    visitApp?: string,
    visitSource?: string
}

export const DetailProject = ({title,img,description,tools,visitApp,visitSource}:Props) => {
  return (
    <div className='mb-12'>

        <h3 className="text-[#414141] font-bold text-3xl mb-5">{title}</h3>


        <div className="flex flex-row flex-wrap justify-between">

            <div className=" rounded-3xl overflow-hidden shadow-xl lg:w-[410px] lg:h-[300px] lg:mr-10 s:w-full s:h-auto s:mr-0">

                <Image 
                    alt={`${title}`} 
                    src={img}
                    width={500}
                    height={500} 
                    className='w-full h-full object-cover'
                    />

            </div>

            <div className="flex flex-col justify-between max-w-[450px]">

                <div className="w-full mb-1">
                    <h4 className="font-bold text-2xl">Description:</h4>

                    <p className="font-normal text-base">{description}</p>
                </div>
                
                <div className="w-full mb-1">
                    <h4 className="font-bold text-2xl">Tools:</h4>

                    <div className="flex flex-row flex-wrap gap-2 mt-2">

                        {
                            tools.map(tool => (
                                <Skill key={tool} text={tool} />
                            ))
                        }

                    </div>
                </div>

                <div className='flex flex-row justify-between'>

                    {
                        visitApp
                        &&
                        <ComponentLink 
                            href={visitApp || '/'} 
                            target
                            className='hover:bg-[#95ECFF] hover:text-[#424242]'
                            text="Visit App" 
                            size='medium' 
                            backGroundColor='bg-[#95ECFF]' 
                            color='text-[#676767]'
                            icon='open_in_new'
                            rounded='rounded-lg'
                        />
                    }
                  

                {
                    visitSource
                    && 
                    <ComponentLink 
                        href={visitSource || '/'}
                        target
                        className='hover:bg-[#95ECFF] hover:text-[#424242]'
                        text="Source" 
                        size='medium' 
                        backGroundColor='bg-[#95ECFF]' 
                        color='text-[#676767]'
                        icon='code'
                        rounded='rounded-lg'
                    />
                }
                  

                </div>

            </div>


        </div>

      </div>
  )
}

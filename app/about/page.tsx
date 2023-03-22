'use client'
import { Skill } from "@/components/Skill";
import Image from "next/image";
import {tools} from '../../utils/skills'


export default function About(): JSX.Element {

    

    return (
        <div className='flex flex-col'>
            <h2 className="text-[#414141] font-bold text-5xl mb-5">ABOUT ME</h2>

            <div className='flex flex-row '>

                <div className='flex flex-col mr-10 '>

                    <div className="flex flex-col mb-5">
                        <p className="font-normal text-base mb-5">
                        My name is Angel de Jesús Muñoz Ramírez, I am 23 years old and I am a software engineer, I have 2 
                        years developing web applications with new technologies. I really like to develop software where I 
                        can challenge myself and create new solutions that contribute to the application. To create a 
                        software from its requirement bases to its implementation and production. I consider myself a 
                        responsible person who complies with what is asked and helps those who need it.
                        </p>

                        <p className="font-normal text-base">
                        I like the process of designing the software and how it will be done, what technologies it will 
                        take, the architecture, I really like to integrate the front end with the back end, that 
                        communication that makes it work.
                        </p>
                    </div>

                    <div className="mb-5">
                        
                        <h3 className="font-bold text-2xl text-[#414141]">EDUCATION</h3>
                        <p className="font-normal text-base">Software Engineering at the Instituto Tecnológico de Sonora University (ITSON)</p>

                    </div>

                    <div className="mb-5">
                        
                        <h3 className="font-bold text-2xl text-[#414141]">LANGUAGE</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="font-normal text-base">Spanish native</li>
                            <li className="font-normal text-base">English b1</li>
                        </ul>

                    </div>

                    <div className="mb-5">
                        
                        <h3 className="font-bold text-2xl text-[#414141]">HOBBIES</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="font-normal text-base">Play videogames</li>
                            <li className="font-normal text-base">Bicycle ride</li>
                            <li className="font-normal text-base">Play footboll</li>
                        </ul>

                    </div>

                </div>

                <div className='flex flex-col'>

                    <h3 className="font-bold text-2xl text-[#414141] mb-5">MY SKILLS</h3>

                    <div className='flex flex-row flex-wrap gap-2'>

                    {
                            tools.map(tool => (
                                <Skill key={tool} text={tool} />
                            ))
                        }

                    </div>

                </div>

            </div>


        </div>
    )
}

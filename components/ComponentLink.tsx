import Link from 'next/link';
import React from 'react'

type sizes = 'small' | 'normal' | 'medium' 
type rounded = 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl'

interface Props{
    href: string;
    text?: string;
    icon?: string,
    color?: string,
    backGroundColor?: string,
    size: sizes,
    rounded?: rounded,
    className?: string,
    target?: boolean
}

export const ComponentLink = ({href, target, text,color,backGroundColor,size,icon,rounded,className}:Props) => {
  return (
    <div className={`    
        ${size=='small' && 'w-8 h-8 p-2'}
        ${size=='normal' && 'w-28 h-8 p-3'}
        ${size=='medium' && 'w-32 h-10 p-3'}
        ${color}
        ${backGroundColor}
        ${rounded}
        ${className}
    `}>
    <Link className='w-full h-full flex justify-between items-center'
            href={href}
            target={`${target ? '_blank' : '' }`}>
            {
                text
                    &&
                <span className={`
                    text-base font-bold
                ${color}
                `}>
                    {text}
                </span>
            }
            {
                icon
                    &&
                <span className="material-icons font-semibold text-base">
                    {icon}
                </span>
            }
        </Link>
    </div>
    
  )
}

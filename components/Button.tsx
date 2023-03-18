'use client'

import React from 'react'

type sizes = 'small' | 'normal' | 'medium' 
type rounded = 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl'

interface Props{
    text?: string,
    icon?: string,
    color: string | '#000000',
    size: sizes,
    rounded?: rounded
    functionBtn: () => void;
}


export const Button = ({text,icon,size,color,rounded,functionBtn}: Props) => {
  return (
    <button onClick={functionBtn} 
        className={`    
        ${size=='small' && 'w-8 h-8 p-3'}
        ${size=='normal' && 'w-28 h-8 p-3'}
        ${size=='medium' && 'w-32 h-10 p-3'}
        ${icon}
        ${color}
        ${rounded}
    `}>
        {
            text
                &&
            <span className={`
            text-sm font-bold
            `}>
                {text}
            </span>
        }
        {
            icon
                &&
            <span className="material-icons font-bold text-4xl">
                {icon}
            </span>
        }
    </button>
  )
}

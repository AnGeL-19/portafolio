'use client'

import React from 'react'

type sizes = 'small' | 'normal' | 'medium' 
type rounded = 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl'

interface Props{
    text?: string,
    icon?: string,
    type?: 'button' | 'submit' | 'reset',
    color?: string | '#000000',
    bgColor?: string,
    size: sizes,
    rounded?: rounded
    functionBtn?: () => void;
}


export const Button = ({type,text,icon,size,color,rounded,bgColor,functionBtn}: Props) => {
  return (
    <button 
        type={type || 'button'}
        onClick={functionBtn} 
        className={`    
        ${size=='small' && 'w-8 h-8 p-3'}
        ${size=='normal' && 'w-28 h-8 p-3'}
        ${size=='medium' && 'w-32 h-10 p-3'}
        ${icon}
        ${color}
        ${rounded}
        ${bgColor}
        flex items-center justify-center
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

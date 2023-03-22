import React from 'react'

interface Props{
    text: string
}

export const Skill = ({text}:Props) => {
  return (
    <div className="px-4 py-1 bg-[#ECE8FE] rounded-2xl ">
        <span className="font-normal text-sm">{text}</span>
    </div>
  )
}

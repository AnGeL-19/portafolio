'use client'

import React from 'react'
import { Project } from './Project';
import { projects } from '../../utils/projects'

type sizes = 'small' | 'normal' | 'medium' 

interface Props{
    length?: number;
    all?: boolean;
    sizeComponents?: sizes;
}

export const ShowProjects = ({sizeComponents,length,all}:Props) => {
    
    return (
        <>
        {
            projects.slice(0,all ? projects.length : length || 0).map(project => (
                <Project key={project.id} project={project} size={sizeComponents} />
            ))
        }
        
        </>
    )
    
    

}

'use client'
import React from 'react'
import { PageProps } from '@/.next/types/app/page'
import { DetailProject } from '@/components/project/DetailProject'
import tww from '../../../../static/clone_tweeter.png'
import { projects } from '../../../../utils/projects'


const ProjectId = (props:PageProps) => {

  console.log(props.params.id)
  const project = projects.find(p => p.id === Number(props.params.id))
  console.log(project);
  

  return (
    <div className="flex flex-col items-center">

      {
        project?.web
        && 
        <DetailProject
            key={project?.web.name}
            description={project?.web.description || ''}
            title={project?.web.name || ''}
            img={project?.web.img || ''}
            tools={project?.web.tools || []}
            visitApp={project?.web.appVisit || ''}
            visitSource={project?.web.appSource || ''}
            />
      }
      
      {
        project?.api
        &&
        <DetailProject
          key={project?.api.name}
          description={project?.api.description || ''}
          title={project?.api.name || ''}
          img={project?.api.img || ''}
          tools={project?.api.tools || []}
          visitApp={project?.api.appVisit || ''}
          visitSource={project?.api.appSource || ''}
          />
      }

    </div>
  )
}
export default ProjectId
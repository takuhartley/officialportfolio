import React from 'react'
import projects from './projects'
import { Route } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import styled from 'styled-components'

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectGallery = () => {
  return (
    <Gallery>
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Gallery>
  )
}

export default ProjectGallery

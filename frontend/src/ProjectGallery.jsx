import React from 'react'
import projects from './projects'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

const ProjectGallery = () => {
  return (
    <Gallery>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Gallery>
  )
}

export default ProjectGallery

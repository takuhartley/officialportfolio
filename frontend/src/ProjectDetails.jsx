import React from 'react'
import { useParams } from 'react-router-dom'
import projects from './projects'
import styled, { keyframes } from 'styled-components'

const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Details = styled.div`
  height: 100vh;
  animation: ${fadeInFromTop} 0.5s ease-in-out;
  background-color: #fafafa;
  color: #333333;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const ImageBackground = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  position: relative;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  color: #ffd700;
  font-size: 2em;
  font-weight: bold;
`

const Divider = styled.div`
  border-bottom: 2px solid #e5e5e5;
  margin: 20px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e5e5e5;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Section = styled.div`
  flex: 1;
  padding: 20px;
  &:not(:last-child) {
    border-right: 1px solid #e5e5e5;
  }
`

const TechTag = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`

const LinkStyled = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    color: #005fa3;
  }
`

const ProjectDetails = () => {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === parseInt(projectId, 10))

  if (!project) return <div>Project not found!</div>
  return (
    <Details>
      <ImageBackground src={project.projectImage}>
        <ImageOverlay>{project.title}</ImageOverlay>
      </ImageBackground>
      <Content>
        <Section>
          <p>{project.description}</p>
          <Divider />
          <h4>Tech Stack</h4>
          <div>
            {project.techStack.map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
          <Divider />
          <h4>Features</h4>
          <ul>
            {project.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Section>
        <Divider />
        <Section>
          <h4>Duration</h4>
          <p>{project.duration}</p>
          <Divider />
          <h4>Role</h4>
          <p>{project.role}</p>
          <Divider />
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href={project.projectLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Project
              </a>
            </li>
            <li>
              <a
                href={project.repositoryLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Repository
              </a>
            </li>
          </ul>
        </Section>
      </Content>
    </Details>
  )
}

export default ProjectDetails

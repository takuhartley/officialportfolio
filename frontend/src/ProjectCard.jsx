import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LikeButton from './LikeButton'

const colors = {
  primary: '#001F3F',
  secondary: '#FFD700',
  accent: '#007BFF',
  background: '#FAFAFA',
  text: '#333333',
  highlight: '#FF6B6B',
  neutral: '#E5E5E5'
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.background};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 20px;
  overflow: hidden;
  padding: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 180px;
  overflow: hidden;
`

const ProjectImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
`

const LikePositioner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const ProjectTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  color: ${colors.primary};
  font-weight: 700;
  transition: color 0.2s;

  span {
    display: inline-block;
    animation: ${fadeIn} 0.6s forwards;
    opacity: 0;
  }

  &:hover span {
    color: ${colors.accent};
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 0.1s;
  }
  span:nth-child(11) {
    animation-delay: 0.11s;
  }
  span:nth-child(12) {
    animation-delay: 0.12s;
  }
  span:nth-child(13) {
    animation-delay: 0.13s;
  }
  span:nth-child(14) {
    animation-delay: 0.14s;
  }
  span:nth-child(15) {
    animation-delay: 0.15s;
  }
`

const ProjectDescription = styled.p`
  color: ${colors.text};
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ProjectCard = ({ project }) => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <Card>
      <ProjectImageWrapper>
        <ProjectImage src={project.projectImage} alt={project.title} />
        <LikePositioner>
          <LikeButton likes={likes} onLike={handleLike} />
        </LikePositioner>
      </ProjectImageWrapper>
      <Link to={`/projects/${project.id}`}>
        <ProjectTitle>
          {project.title.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </ProjectTitle>
      </Link>
      <ProjectDescription>{project.description}</ProjectDescription>
    </Card>
  )
}

export default ProjectCard

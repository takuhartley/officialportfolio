import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column; // Change to column for better mobile responsiveness
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  margin: 20px;
  overflow: hidden; // To ensure child elements don't spill over rounded corners
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const ContentWrapper = styled.div`
  padding: 15px;
`

const ProjectTitle = styled.h3`
  margin: 0;
  color: #333;
  font-weight: bold;
`

const ProjectDescription = styled.p`
  margin-top: 10px;
  color: #666;
`

const LikeButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5500;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ProjectCard = ({ project }) => {
  const [likes, setLikes] = useState(0)

  return (
    <Card>
      <StyledLink to={`/projects/${project.title}`}>
        <ProjectImage src={project.projectImage} alt={project.title} />
        <ContentWrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ContentWrapper>
      </StyledLink>
      <LikeButton onClick={() => setLikes(likes + 1)}>
        Like ({likes})
      </LikeButton>
    </Card>
  )
}

export default ProjectCard

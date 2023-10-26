import React from 'react'
import styled from 'styled-components'
import projects from '../projects.js' // Please adjust the path as necessary

const Container = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  overflow-x: auto;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const StyledThead = styled.thead`
  background-color: #333;
  color: #fff;
`

const StyledTh = styled.th`
  padding: 10px 20px;
`

const StyledTd = styled.td`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
`

const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`

const TechStack = styled.ul`
  display: flex;
  gap: 10px;
`

const TechItem = styled.li`
  background-color: #999;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 0.8rem;
`

const ProjectManagement = () => {
  return (
    <Container>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Title</StyledTh>
            <StyledTh>Description</StyledTh>
            <StyledTh>Tech Stack</StyledTh>
            <StyledTh>Project Link</StyledTh>
            <StyledTh>Repository Link</StyledTh>
            <StyledTh>Image</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Duration</StyledTh>
            <StyledTh>Features</StyledTh>
            <StyledTh>Role</StyledTh>
            <StyledTh>Likes</StyledTh>
            <StyledTh>Published</StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          {projects.map(project => {
            const {
              id,
              title,
              description,
              techStack,
              projectLink,
              repositoryLink,
              projectImage,
              projectType,
              duration,
              features,
              role,
              likes,
              published
            } = project

            return (
              <tr key={id}>
                <StyledTd>{title}</StyledTd>
                <StyledTd>{description}</StyledTd>
                <StyledTd>
                  <TechStack>
                    {techStack.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechStack>
                </StyledTd>
                <StyledTd>
                  <a
                    href={projectLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View
                  </a>
                </StyledTd>
                <StyledTd>
                  <a
                    href={repositoryLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View
                  </a>
                </StyledTd>
                <StyledTd>
                  <ProjectImage src={projectImage} alt={title} />
                </StyledTd>
                <StyledTd>{projectType}</StyledTd>
                <StyledTd>{duration}</StyledTd>
                <StyledTd>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </StyledTd>
                <StyledTd>{role}</StyledTd>
                <StyledTd>{likes}</StyledTd>
                <StyledTd>{published}</StyledTd>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </Container>
  )
}

export default ProjectManagement

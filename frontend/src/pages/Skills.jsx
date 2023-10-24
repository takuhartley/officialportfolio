import React from 'react'
import styled, { keyframes } from 'styled-components'

const JavaScriptIcon = '/assets/JavaScriptIcon.png'
// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  padding: 20px;
`

const Section = styled.section`
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 12px;
`

const skillToIconMap = {
  'Semantic HTML': '/assets/SemanticHTMLIcon.jpg',
  'CSS Preprocessors': '/assets/CSSPreprocessorsIcon.png',
  SASS: '/assets/SASSIcon.png'
  // ... and so on for each skill you want to display an icon for
}
const SkillList = ({ title, skills }) => (
  <>
    <h3>{title}</h3>
    <SkillWrapper>
      {skills.map(skill => (
        <SkillIcon key={skill}>
          <a>
            <img
              src={skillToIconMap[skill] || '/assets/defaultIcon.jpg'}
              alt={`${skill} icon`}
              width='24'
              height='24'
            />
            <span>{skill}</span>
          </a>
        </SkillIcon>
      ))}
    </SkillWrapper>
  </>
)

const Skills = () => {
  const frontendSkills = {
    'HTML/CSS': ['Semantic HTML', 'CSS Preprocessors', 'SASS', 'LESS'],
    'JavaScript (Core)': [
      'ES6+ features',
      'Arrow functions',
      'Promises',
      'Async/Await',
      'DOM Manipulation'
    ],
    'JavaScript Libraries & Frameworks': ['React.js', 'Vue.js', 'Angular'],
    'Frontend Tools': [
      'Bundlers',
      'Linters & Formatters',
      'Webpack',
      'ESLint',
      'Prettier',
      'Babel'
    ]
  }

  const backendSkills = {
    'Node.js': ['Express.js'],
    Databases: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite', 'NoSQL', 'MongoDB'],
    'ORM & ODM': ['Mongoose'],
    'Authentication & Authorization': ['JWT', 'OAuth', 'OAuth2', 'Passport.js'],
    'Testing & Quality Assurance': ['Jest'],
    APIs: ['RESTful services', 'GraphQL', 'WebSockets', 'Socket.io']
  }

  const devopsSkills = {
    'Version Control': ['Git', 'GitHub', 'Merge Requests', 'Pull Requests'],
    'Cloud Services': ['AWS', 'S3', 'Heroku', 'Netlify', 'Docker']
  }

  return (
    <Container>
      <h1>Skills</h1>
      <nav>
        <Section>
          <h2>Frontend Development</h2>
          {Object.keys(frontendSkills).map(key => (
            <SkillList key={key} title={key} skills={frontendSkills[key]} />
          ))}
        </Section>
        <Section>
          <h2>Backend Development</h2>
          {Object.keys(backendSkills).map(key => (
            <SkillList key={key} title={key} skills={backendSkills[key]} />
          ))}
        </Section>
        <Section>
          <h2>DevOps & Deployment</h2>
          {Object.keys(devopsSkills).map(key => (
            <SkillList key={key} title={key} skills={devopsSkills[key]} />
          ))}
        </Section>
      </nav>
    </Container>
  )
}

export default Skills

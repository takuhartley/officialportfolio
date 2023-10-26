import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faVuejs,
  faAngular,
  faNodeJs,
  faGit,
  faGithub,
  faAws,
  faDocker
} from '@fortawesome/free-brands-svg-icons'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  padding: 50px 20px;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  margin-top: 40px;
  animation: ${fadeIn} 1s ease-in-out;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: #333333;
`

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px; /* Added gap for consistent spacing */
`

const SkillButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`

const skillToIconMap = {
  'Semantic HTML': faHtml5,
  'CSS Preprocessors': faCss3Alt,
  SASS: faSass,
  'React.js': faReact,
  'Vue.js': faVuejs,
  Angular: faAngular,
  'Node.js': faNodeJs,
  Git: faGit,
  GitHub: faGithub,
  AWS: faAws,
  Docker: faDocker
}

const colors = {
  frontend: '#E5E5E5',
  backend: '#FF6B6B',
  devops: '#007BFF'
}

const SkillList = ({ title, skills, section }) => (
  <Section bgColor={colors[section]}>
    <h3>{title}</h3>
    <SkillWrapper>
      {skills.map(skill => (
        <SkillButton key={skill}>
          {skillToIconMap[skill] ? (
            <FontAwesomeIcon
              icon={skillToIconMap[skill]}
              size='2x'
              color='#007BFF'
            />
          ) : (
            <img
              src='/assets/defaultIcon.jpg'
              alt={`${skill} icon`}
              width='24'
              height='24'
            />
          )}
          <span>{skill}</span>
        </SkillButton>
      ))}
    </SkillWrapper>
  </Section>
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
        <h2>Frontend Development</h2>
        {Object.keys(frontendSkills).map(key => (
          <SkillList
            key={key}
            title={key}
            skills={frontendSkills[key]}
            section='frontend'
          />
        ))}

        <h2>Backend Development</h2>
        {Object.keys(backendSkills).map(key => (
          <SkillList
            key={key}
            title={key}
            skills={backendSkills[key]}
            section='backend'
          />
        ))}

        <h2>DevOps & Deployment</h2>
        {Object.keys(devopsSkills).map(key => (
          <SkillList
            key={key}
            title={key}
            skills={devopsSkills[key]}
            section='devops'
          />
        ))}
      </nav>
    </Container>
  )
}

export default Skills

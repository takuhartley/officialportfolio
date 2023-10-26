import React from 'react'
import styled from 'styled-components'
import RobertProfilePicture from '/Robert_Profile_Picture.jpg'
import Skills from './Skills'
// Color palette
const colors = {
  primary: '#001F3F',
  secondary: '#FFD700',
  accent: '#007BFF',
  background: '#FAFAFA',
  text: '#333333',
  highlight: '#FF6B6B',
  neutral: '#E5E5E5'
}

const AboutContainer = styled.div`
  background-color: ${colors.background};
  min-height: 100vh; // ensure it covers the whole viewport height
  padding: 2rem 0;
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1rem 0;

    h1 {
      font-size: 2rem;
    }
  }
`

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px ${colors.neutral};
  }

  div {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px ${colors.neutral};

    p {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      color: ${colors.text};
    }

    a {
      display: inline-block;
      background-color: ${colors.accent};
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${colors.highlight};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    img {
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
  }
`

const About = () => {
  return (
    <>
      <AboutContainer>
        <h1>About Me</h1>
        <AboutSection>
          <img src={RobertProfilePicture} alt="Robert's Photo" />
          <div>
            <p>
              With a rich background in both front-end and back-end development,
              I pride myself on creating web solutions that are not only
              functionally robust but also aesthetically pleasing. My journey in
              the world of web development started when I embarked on a path to
              become a Business Solution Architect after contributing to top
              companies like Rakuten, Netcracker, and CI&T as a Business
              Analyst. My passion for coding grew alongside my professional
              career, leading me to full-stack development.
            </p>
            <p>
              Outside of the tech world, I'm deeply intrigued by photography,
              economics, and the magic of aquaponics. Crafting eco-systems
              within aquariums has been a delightful pursuit, mirroring my
              approach to software - building systems that sustain, scale, and
              inspire.
            </p>
            <a href='FrontendResumev1.0.pdf' download="Robert's Resume">
              Download My Resume (PDF)
            </a>
          </div>
        </AboutSection>
      </AboutContainer>
      <Skills />
    </>
  )
}

export default About

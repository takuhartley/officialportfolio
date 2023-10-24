import React from 'react'
import styled from 'styled-components'

// Styled Components
const AboutContainer = styled.div`
  background-color: #f6f7f9;
  padding: 2rem 0;
  color: #333;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  div {
    background-color: white;
    border-radius: 8px;
    padding: 1rem 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    background-color: royalblue;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darkblue;
    }
  }
`

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <AboutSection>
        <img src='path-to-profile-picture.jpg' alt="Robert's Photo" />
        <div>
          <p>
            With a rich background in both front-end and back-end development, I
            pride myself on creating web solutions that are not only
            functionally robust but also aesthetically pleasing. My journey in
            the world of web development started when I embarked on a path to
            become a Business Solution Architect after contributing to top
            companies like Rakuten, Netcracker, and CI&T as a Business Analyst.
            My passion for coding grew alongside my professional career, leading
            me to full-stack development.
          </p>
          <p>
            Outside of the tech world, I'm deeply intrigued by photography,
            economics, and the magic of aquaponics. Crafting eco-systems within
            aquariums has been a delightful pursuit, mirroring my approach to
            software - building systems that sustain, scale, and inspire.
          </p>
          <a href='FrontendResumev1.0.pdf' download="Robert's Resume">
            Download My Resume (PDF)
          </a>
        </div>
      </AboutSection>
    </AboutContainer>
  )
}

export default About

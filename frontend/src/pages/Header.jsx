import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa'
import EmojiParticles from '../EmojiParticles'

// Colors based on your preference
const colors = {
  primary: '#001F3F',
  secondary: '#FFD700',
  accent: '#007BFF',
  background: '#FAFAFA',
  text: '#333333',
  highlight: '#FF6B6B',
  neutral: '#E5E5E5'
}
// Styled Components
const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
  z-index: 1;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  z-index: 1;
  a {
    color: ${colors.background};
    font-size: 1.5rem;

    &:hover {
      color: ${colors.secondary}; // Highlight color
    }
  }
`
const IconLink = styled.a`
  color: ${colors.background};
  font-size: 1.5rem;

  &:hover {
    color: ${colors.secondary};
  }
`
const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 0 1rem;
  z-index: 1;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
  }
`

const AnimatedAbout = animated(AboutSection)

const Header = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500
  })

  return (
    <HeaderContainer>
      <EmojiParticles />
      <h1>Robert's Portfolio</h1>
      <h2>Full-Stack Web Developer</h2>
      <SocialLinks>
        <IconLink
          href='https://github.com/robert-username'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Robert's GitHub"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href='https://linkedin.com/in/robert-username'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Robert's LinkedIn"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href='https://medium.com/@robert-username'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Robert's Medium"
        >
          <FaMediumM />
        </IconLink>
      </SocialLinks>
      <AnimatedAbout style={fadeIn}>
        <div>
          <p>
            Passionate developer with experience in modern web technologies.
            Always learning and striving for excellence.
          </p>
        </div>
      </AnimatedAbout>
    </HeaderContainer>
  )
}

export default Header

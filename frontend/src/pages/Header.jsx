import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { useSpring, animated } from 'react-spring'

// Canvas Scene
const Scene = () => (
  <Box args={[1, 1, 1]} rotation={[Math.PI / 5, Math.PI / 5, 0]}>
    <meshStandardMaterial attach='material' color='royalblue' />
  </Box>
)

// Styled Components
const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  background-color: #282c34;
  color: white;
  padding: 2rem 0;

  h1,
  h2 {
    text-align: center;
  }
`

const ThreeCanvas = styled(Canvas)`
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 0 1rem;

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

// For page-load animation
const AnimatedAbout = animated(AboutSection)

// Component
const Header = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500
  })

  return (
    <HeaderContainer>
      <ThreeCanvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </ThreeCanvas>
      <h1>Robert's Portfolio</h1>
      <h2>Full-Stack Web Developer</h2>
      <AnimatedAbout style={fadeIn}>
        <img src='https://via.placeholder.com/200' alt="Robert's Photo" />
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

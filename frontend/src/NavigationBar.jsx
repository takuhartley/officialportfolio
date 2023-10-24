import React, { useState } from 'react'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding: 1rem;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  width: 10rem;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 3rem;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const Hamburger = styled(FiMenu)`
  display: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileNav = styled.div`
  display: none;
  position: fixed;
  top: 3rem;
  left: 0;
  background-color: #282c34;
  width: 200px;
  border-radius: 0 8px 8px 0;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
`

const NavigationBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <Container>
      <Hamburger onClick={() => setMobileNavOpen(!mobileNavOpen)} />
      <MobileNav open={mobileNavOpen}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/skills'>Skills</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
        <NavItem to='/blog'>Blog</NavItem>
      </MobileNav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/projects'>Projects</NavItem>
      <NavItem to='/skills'>Skills</NavItem>
      <NavItem to='/contact'>Contact</NavItem>
      <NavItem to='/blog'>Blog</NavItem>
    </Container>
  )
}

export default NavigationBar

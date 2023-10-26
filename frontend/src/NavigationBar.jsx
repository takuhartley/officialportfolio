import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding: 1rem;
  background-color: #001f3f;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  width: 10rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    top: ${({ isVisible }) => (isVisible ? '0' : '-100px')};
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: #fafafa;
    padding: 0 1rem;
  }
`

const NavItem = styled(Link)`
  color: #ffd700;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Hamburger = styled(FiMenu)`
  display: none;
  color: #007bff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileNav = styled.div`
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #001f3f;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`

const MobileNavItem = styled(NavItem)`
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    color: #333333;

    &:hover {
      background-color: #ff6b6b;
    }
  }
`

const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  background-color: #001f3f;
  color: #ecf0f1;
  border-top: 2px solid #ecf0f1;

  @media (max-width: 768px) {
    display: none;
  }
`

const FooterInfo = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

const NavigationBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const navData = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        setIsVisible(true)
        setLastScroll(currentScroll)
        return
      }

      if (currentScroll > lastScroll) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <Container isVisible={isVisible}>
      <Hamburger onClick={() => setMobileNavOpen(!mobileNavOpen)} />
      <MobileNav open={mobileNavOpen}>
        {navData.map(item => (
          <MobileNavItem
            key={item.path}
            to={item.path}
            onClick={() => setMobileNavOpen(false)}
          >
            {item.label}
          </MobileNavItem>
        ))}
      </MobileNav>
      {navData.map(item => (
        <NavItem key={item.path} to={item.path}>
          {item.label}
        </NavItem>
      ))}
      <FooterContainer>
        <FooterInfo>
          &copy; {new Date().getFullYear()} RobbyLobby. All Rights Reserved.
        </FooterInfo>
      </FooterContainer>
    </Container>
  )
}

export default NavigationBar

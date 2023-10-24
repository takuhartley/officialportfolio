import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

const StyledLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`

const FooterInfo = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <StyledLink to='/about'>About Us</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
        <StyledLink to='/terms'>Terms & Conditions</StyledLink>
        <StyledLink to='/privacy'>Privacy Policy</StyledLink>
      </FooterLinks>
      <FooterInfo>
        &copy; {new Date().getFullYear()} Your Company Name. All Rights
        Reserved.
      </FooterInfo>
    </FooterContainer>
  )
}

export default Footer

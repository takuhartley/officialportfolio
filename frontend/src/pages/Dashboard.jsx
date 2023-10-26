import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'
import Charts from '../Charts'
import LoadingPlaceholder from '../LoadingPlaceholder'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const NavBar = styled.div`
  padding: 15px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1,
  nav a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavLinks = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 10px;
    gap: 10px;

    a {
      font-size: 0.9em;
      padding: 5px 10px;
      border-radius: 5px;
      background: #444;
      transition: background 0.3s ease;

      &:hover {
        background: #555;
      }
    }
  }
`

const MainContent = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <DashboardContainer>
      <NavBar>
        <h1>Dashboard</h1>
        <NavLinks>
          <Link to='user-management'>User Management</Link>
          <Link to='blog-management'>Blog Management</Link>
          <Link to='project-management'>Project Management</Link>
        </NavLinks>
      </NavBar>
      <MainContent>
        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          <>
            <Charts />
            <Outlet />
          </>
        )}
      </MainContent>
    </DashboardContainer>
  )
}

export default Dashboard

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'
import Charts from '../Charts' // Import the separated charts.
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

  h1,
  nav a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const MainContent = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
`

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating an asynchronous loading process.
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time for demonstration purposes.

    return () => clearTimeout(timeoutId) // Clean up timeout.
  }, [])

  return (
    <DashboardContainer>
      <NavBar>{/* ... (navbar content) */}</NavBar>
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

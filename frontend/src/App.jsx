import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'
import NavigationBar from './NavigationBar'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'

const MainContent = styled.div`
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 70px;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavigationBar />
      <MainContent>
        <AppRoutes />
      </MainContent>
    </BrowserRouter>
  )
}

export default App

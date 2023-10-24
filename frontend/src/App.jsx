import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'
import NavigationBar from './NavigationBar'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import Cursor from './Cursor'
const MainContent = styled.div`
  border: 1px dotted red;
  margin-left: 10rem; // Depending on the width of your navigation bar
  @media (max-width: 768px) {
    margin-left: 5rem;
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

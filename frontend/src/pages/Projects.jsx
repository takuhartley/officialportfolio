import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { proxy } from 'valtio'
import { Items } from '../Items'

// Size Configurations
export const CARD_WIDTH_SCALE = 2
export const CARD_HEIGHT_SCALE = 2
export const CARD_WIDTH = 2.4
export const CARD_GAP = 0.6

export const IMAGES_URL = '/The-Office.webp'
export const state = proxy({
  clicked: null,
  urls: Array(20).fill(IMAGES_URL)
})

const StyledCanvas = styled(Canvas)`
  background: #151515;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px dotted red;
`

const Projects = () => (
  <>
    <StyledCanvas gl={{ antialias: true }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <Items />
      </Suspense>
    </StyledCanvas>
  </>
)

export default Projects

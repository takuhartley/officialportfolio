import React from 'react'
import { ScrollControls, Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { Minimap } from './Minimap'
import { Item } from './Item'
import { state, CARD_WIDTH, CARD_GAP } from './pages/Projects'

export function Items ({ w = CARD_WIDTH, gap = CARD_GAP }) {
  // Adjusted width and gap
  const { urls } = useSnapshot(state)
  const { width } = useThree(state => state.viewport)
  const xW = w + gap
  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {
          urls.map((url, i) => (
            <Item
              key={i}
              index={i}
              position={[i * xW, 0, 0]}
              scale={[w, 10, 1]}
              url={url}
            />
          )) // Increased the height scale of the cards
        }
      </Scroll>
    </ScrollControls>
  )
}

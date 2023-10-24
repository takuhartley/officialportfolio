import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { easing } from 'maath'
import { state } from './pages/Projects' // Assuming you'll export the state from the Projects file.

const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0)
])

export function Minimap () {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height, width } = useThree(state => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / urls.length - 2 / urls.length,
        5 / urls.length
      )
      easing.damp(child.scale, 'y', 0.2 + y / 5, 0.15, delta)
    })
  })
  return (
    <group ref={ref} position={[width / 2 - (urls.length * 0.08) / 2, 0, 0]}>
      {urls.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.08 - urls.length * 0.04, -height / 2 + 0.8, 0]}
        />
      ))}
    </group>
  )
}

import React, { useRef, useState } from 'react'
import { Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { easing } from 'maath'
import { state, CARD_WIDTH_SCALE, CARD_HEIGHT_SCALE } from './pages/Projects'
import * as THREE from 'three' // <-- Import the THREE library

export function Item ({
  index,
  position,
  scale,
  c = new THREE.Color(),
  ...props
}) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    )
    easing.damp3(
      ref.current.scale,
      [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
      0.15,
      delta
    )
    ref.current.material.scale[0] = ref.current.scale.x
    ref.current.material.scale[1] = ref.current.scale.y
    if (clicked !== null && index < clicked)
      easing.damp(ref.current.position, 'x', position[0] - 2, 0.15, delta)
    if (clicked !== null && index > clicked)
      easing.damp(ref.current.position, 'x', position[0] + 2, 0.15, delta)
    if (clicked === null || clicked === index)
      easing.damp(ref.current.position, 'x', position[0], 0.15, delta)
    easing.damp(
      ref.current.material,
      'grayscale',
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      0.15,
      delta
    )
    easing.dampC(
      ref.current.material.color,
      hovered || clicked === index ? 'white' : '#aaa',
      hovered ? 0.3 : 0.15,
      delta
    )
  })
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={[scale[0] * CARD_WIDTH_SCALE, scale[1] * CARD_HEIGHT_SCALE, 1]}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}

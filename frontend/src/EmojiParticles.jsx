import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSprings } from 'react-spring'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`

const EmojiParticleStyled = styled(animated.span)`
  border: 1px solid red;
  position: absolute;
  font-size: ${props => props.size}px;
  user-select: none;
  will-change: transform;
`

const EmojiParticles = () => {
  console.log('Rendering EmojiParticles component...')

  const numberOfParticles = 100
  const particles = ['👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿']
  const emojiSize = 20

  const getRandomSpeed = () => 1 + Math.random() * 3
  const getRandomEmoji = () =>
    particles[Math.floor(Math.random() * particles.length)]

  const containerSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight
  })
  console.log('containerSizeRef:', containerSizeRef)

  const [springs, setSprings] = useSprings(numberOfParticles, i => ({
    transform: `translate(
      ${Math.random() * (containerSizeRef.current.width - emojiSize)}px,
      ${Math.random() * (containerSizeRef.current.height - emojiSize)}px)`
  }))
  const detectCollision = (item1, item2) => {
    const dx = item1.x - item2.x
    const dy = item1.y - item2.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    return distance < emojiSize
  }
  const resolveCollision = (item1, item2) => {
    const dx = item1.x - item2.x
    const dy = item1.y - item2.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const overlap = emojiSize - distance

    const angle = Math.atan2(dy, dx)
    const correctionX = (overlap * Math.cos(angle)) / 2
    const correctionY = (overlap * Math.sin(angle)) / 2

    item1.x += correctionX
    item1.y += correctionY
    item2.x -= correctionX
    item2.y -= correctionY

    item1.vx = -item1.vx
    item1.vy = -item1.vy
    item2.vx = -item2.vx
    item2.vy = -item2.vy
  }
  const positionsRef = useRef(
    Array(numberOfParticles)
      .fill(0)
      .map(() => ({
        x:
          Math.random() * (containerSizeRef.current.width - emojiSize) +
          emojiSize / 2,
        y:
          Math.random() * (containerSizeRef.current.height - emojiSize * 2) +
          emojiSize,
        vx: getRandomSpeed() * (Math.random() > 0.5 ? 1 : -1),
        vy: getRandomSpeed() * (Math.random() > 0.5 ? 1 : -1),
        emoji: getRandomEmoji()
      }))
  )
  console.log('positionsRef:', positionsRef)

  const containerRef = useRef(null)
  console.log('containerRef:', containerRef)

  useEffect(() => {
    console.log('Running useEffect for container dimensions...')
    if (containerRef.current) {
      containerSizeRef.current.width = containerRef.current.offsetWidth
      containerSizeRef.current.height = containerRef.current.offsetHeight
    }
  }, [])
  useEffect(() => {
    console.log('Running useEffect for animateParticles...')
    const animateParticles = () => {
      setSprings(i => {
        let item = positionsRef.current[i]
        item.x += item.vx
        item.y += item.vy
        // Boundary collision
        if (
          item.x < emojiSize / 2 || // adjusted for half the emoji size
          item.x > containerSizeRef.current.width - emojiSize / 2 // adjusted for half the emoji size
        ) {
          item.vx = -item.vx
          item.x = Math.min(
            Math.max(item.x, emojiSize / 2), // adjusted for half the emoji size
            containerSizeRef.current.width - emojiSize / 2 // adjusted for half the emoji size
          )
        }
        if (
          item.y < emojiSize / 2 || // adjusted for half the emoji size
          item.y > containerSizeRef.current.height - emojiSize / 2 // adjusted for half the emoji size
        ) {
          item.vy = -item.vy
          item.y = Math.min(
            Math.max(item.y, emojiSize / 2), // adjusted for half the emoji size
            containerSizeRef.current.height - emojiSize / 2 // adjusted for half the emoji size
          )
        }

        // Emoji collision
        positionsRef.current.forEach((otherItem, j) => {
          if (i !== j && detectCollision(item, otherItem)) {
            resolveCollision(item, otherItem)
          }
        })
        return {
          transform: `translate(${item.x}px, ${item.y}px)`
        }
      })
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [setSprings])

  useEffect(() => {
    console.log('Running useEffect for window resize...')
    const handleResize = () => {
      if (containerRef.current) {
        containerSizeRef.current.width = containerRef.current.offsetWidth
        containerSizeRef.current.height = containerRef.current.offsetHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container ref={containerRef}>
      {springs.map((style, index) => (
        <EmojiParticleStyled key={index} style={style} size={emojiSize}>
          {positionsRef.current[index].emoji}
        </EmojiParticleStyled>
      ))}
    </Container>
  )
}

export default EmojiParticles

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const sparkleAnimation = keyframes`
  0% { opacity: 1; transform: scale(1) translateY(0); }
  100% { opacity: 0; transform: scale(1.5) translateY(-10px); }
`

const StyledLikeButton = styled.button`
  position: relative;
  align-self: center;
  background-color: #ff7675; // Updated color
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 15px; // Updated for consistency
  font-weight: 600;
  overflow: hidden;
  transition: background-color 0.2s, transform 0.2s; // Added transform transition

  &:hover {
    background-color: #ff6b6b; // Slightly lighter for a subtle hover effect
    transform: scale(1.05); // Make the button grow slightly on hover
  }

  span.sparkle {
    position: absolute;
    animation: ${sparkleAnimation} 0.6s forwards;
    font-size: 1.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`

const LikeButton = ({ likes, onLike }) => {
  const [sparkle, setSparkle] = useState(false)

  const handleLike = () => {
    if (onLike) onLike()
    setSparkle(true)
    setTimeout(() => {
      setSparkle(false)
    }, 600)
  }

  return (
    <StyledLikeButton onClick={handleLike}>
      {sparkle && <span className='sparkle'>✨</span>}
      ❤️ {likes}
    </StyledLikeButton>
  )
}

export default LikeButton

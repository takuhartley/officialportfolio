import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: ${({ size }) =>
    size === 'S' ? '8px 20px' : size === 'M' ? '12px 30px' : '15px 40px'};
  font-size: ${({ size }) =>
    size === 'S' ? '0.8rem' : size === 'M' ? '1.2rem' : '1.5rem'};
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  background: #3fa7d6; // Solid modern color, but you can adjust this as needed

  color: white;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #338ab2; // Slightly darker shade on hover
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  &:active {
    background: #2c7ba0; // Even darker shade on active state
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(0px) scale(0.98);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
`

const ButtonComponent1 = () => {
  const [pressed, setPressed] = useState(false)

  const handleMouseDown = () => {
    setPressed(true)
  }

  const handleMouseUp = () => {
    setPressed(false)
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <ButtonWrapper>
      <StyledButton
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ transform: pressed ? 'scale(0.95)' : 'scale(1)' }}
        size='M' // Medium size as an example, but you can adjust this as per your preference
      >
        Submit
      </StyledButton>
    </ButtonWrapper>
  )
}

export default ButtonComponent1

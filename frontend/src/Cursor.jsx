import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`;

const Shine = styled.span`
  position: absolute;
  font-size: 12px;
  animation: ${shineAnimation} 0.5s forwards;
  z-index: 10000;
`;

const CursorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  width: 15px;
  height: 15px;
  border: 2px solid #a0a0a0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);

  &.hovered {
    width: 25px;
    height: 25px;
  }
`;

const Cursor = ({ position, isHovered }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onMouseDown = () => setClicked(true);
    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => setClicked(false), 500); // 500ms is the animation duration
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      <CursorContainer className={isHovered ? 'hovered' : ''} />
      {clicked && <Shine>✨</Shine>}
    </div>
  );
}

export default Cursor;
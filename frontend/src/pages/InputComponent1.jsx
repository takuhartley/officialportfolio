import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
`

const LabelAnimation = css`
  top: ${props => (props.$active ? '-15px' : '10px')};
  font-size: ${props => (props.$active ? '12px' : '16px')};
  color: ${props => (props.$active ? '#1976d2' : '#555')};
`

const InputLabel = styled.label`
  position: absolute;
  left: 10px;
  
  transition: top 0.2s, font-size 0.2s, color 0.2s;
  ${LabelAnimation}
`

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #1976d2;
  transition: width 0.3s;
`

const ErrorMsg = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`

const InputField = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  background: transparent;
  outline: none;
  color: #333;

  // Add styling for disabled state
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus + ${Underline} {
    width: 100%;
  }

  &::placeholder {
    color: transparent;
  }

  &:focus::placeholder {
    color: #aaa;
  }
`

const InputComponent1 = ({
  label,
  placeholder,
  error,
  value,
  onChange,
  ...props
}) => {
  const [isActive, setIsActive] = useState(Boolean(value))

  return (
    <InputWrapper>
      <InputLabel $active={isActive || value}>{label}</InputLabel>
      <InputField
        value={value}
        onChange={onChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => {
          // set isActive to false only if there's no value in the input
          if (!value) setIsActive(false)
        }}
        placeholder={placeholder}
        {...props}
      />
      <Underline />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </InputWrapper>
  )
}

export default InputComponent1

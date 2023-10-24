import React, { useState } from 'react'
import styled from 'styled-components'
import InputComponent1 from './InputComponent1'
import ButtonComponent1 from './ButtonComponent1'
import LoadingSpinner from './LoadingSpinner'

const FormContainer = styled.div`
  position: relative; // Added for overlay and spinner positioning
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  max-width: 350px;
  margin: 40px auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8); // Gray overlay with opacity
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormHeader = styled.h1`
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const LineDivider = styled.hr`
  width: 100%;
  border: 0.5px solid #ccc;
  margin-bottom: 20px;
`

const SubmittedData = styled.div`
  margin-top: 30px;
  color: #2c3e50;
  border-top: 1px solid #ddd; // Added for nicer presentation
  padding-top: 20px; // Added for spacing
`

const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const ToggleButton = styled.button`
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`
const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [submittedData, setSubmittedData] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

  const validate = () => {
    let newErrors = {}
    if (!username.trim()) newErrors.username = 'Username is required'
    if (!password.trim()) newErrors.password = 'Password is required'
    return newErrors
  }

  const handleSubmit = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true)
      setIsDisabled(true) // Disable the inputs after submission
      setTimeout(() => {
        setIsLoading(false)
        setIsDisabled(false)
        setSubmittedData({ username, password })
        setUsername('') // Clear fields after submission
        setPassword('') // Clear fields after submission
      }, 3000)
    } else {
      setErrors(validationErrors)
    }
  }

  const handleInputChange = (type, value) => {
    if (type === 'username') setUsername(value)
    else setPassword(value)
  }

  return (
    <FormContainer>
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
      <FormHeader>Sign In</FormHeader>
      <LineDivider />
      <FormBody>
        <InputComponent1
          label='Username'
          placeholder='Enter your username'
          error={errors.username}
          value={username}
          onChange={e => handleInputChange('username', e.target.value)}
          disabled={isDisabled}
        />
        <InputComponent1
          label='Password'
          placeholder='Enter your password'
          type='password'
          error={errors.password}
          value={password}
          onChange={e => handleInputChange('password', e.target.value)}
          disabled={isDisabled}
        />
        <ToggleButton onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? 'Enable Inputs' : 'Disable Inputs'}
        </ToggleButton>
        <ButtonComponent1 onClick={handleSubmit} />
      </FormBody>
      {submittedData && (
        <SubmittedData>
          <div>
            <strong>Username:</strong> {submittedData.username}
          </div>
          <div>
            <strong>Password:</strong> {submittedData.password}
          </div>
        </SubmittedData>
      )}
    </FormContainer>
  )
}

export default FormComponent

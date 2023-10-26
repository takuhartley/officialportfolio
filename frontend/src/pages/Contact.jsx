import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const mobileBreakpoint = '768px'
const ContactWrapper = styled.div`
  font-family: 'Georgia', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #001f3f;
  background-size: cover;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 20px;
  }
`

const ContentBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  border: 1px solid #e5e5e5;
  @media (max-width: ${mobileBreakpoint}) {
    padding: 20px;
  }
`

const Heading = styled.h1`
  margin-bottom: 20px;
  color: #001f3f;
  border-bottom: 2px solid #ffd700;
  padding-bottom: 10px;
`

const Message = styled.p`
  margin-bottom: 20px;
  color: #333333;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: ${mobileBreakpoint}) {
    gap: 15px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #007bff;
  }
  @media (max-width: ${mobileBreakpoint}) {
    padding: 8px 12px;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  resize: vertical;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #007bff;
  }
  @media (max-width: ${mobileBreakpoint}) {
    padding: 8px 12px;
  }
`

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff6b6b;
  }
  @media (max-width: ${mobileBreakpoint}) {
    padding: 12px 18px;
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/api/contact', formData)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <ContactWrapper>
      <ContentBox>
        <Heading>Contact Me</Heading>
        <Message>
          Have a question or want to work together? I would love to hear from
          you.
        </Message>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name='message'
            rows='5'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleInputChange}
            required
          ></TextArea>
          <Button type='submit'>Send Message</Button>
        </Form>
      </ContentBox>
    </ContactWrapper>
  )
}

export default Contact

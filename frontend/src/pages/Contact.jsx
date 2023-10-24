import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('path_to_your_image.jpg') no-repeat center center fixed;
  background-size: cover;
`

const ContentBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
`

const Heading = styled.h1`
  margin-bottom: 20px;
  color: #333;
`

const Message = styled.p`
  margin-bottom: 20px;
  color: #666;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #0077cc;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #0077cc;
  }
`

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005fa3;
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

    // Sending the form data to your backend API
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
      <GlobalStyle />
      <ContentBox>
        <Heading>Contact Us</Heading>
        <Message>
          Have a question or want to work together? We would love to hear from
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

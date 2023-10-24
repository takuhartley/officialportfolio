import React from 'react'
import styled from 'styled-components'

const TagsContainer = styled.div`
  max-width: 20rem;
  min-width: 10rem;
  width: 20rem;
  position: fixed;
  top: 20%;
  right: 2%;
 
  border: 0.1px solid white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.1em;
    margin-bottom: 10px;
  }

  span {
    background-color: #f5f5f5;
    padding: 5px 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    color: #555;
    display: inline-block;
    font-size: 0.75rem;
  }
`

const TagComponent = ({ tags }) => (
  <TagsContainer>
    <h3>Tags</h3>
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
  </TagsContainer>
)

export default TagComponent

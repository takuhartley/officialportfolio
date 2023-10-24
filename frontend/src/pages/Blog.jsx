import React from 'react'
import styled from 'styled-components'
import blogs from '../blogs.js'
import BlogCard from './BlogCard'

const BlogContainer = styled.div`
  padding: 60px 40px; /* more vertical padding for breathing space */

  h1 {
    font-size: 2.8em; /* slightly bigger */
    margin-bottom: 20px;
    text-align: center;
    color: #ffffff; /* Bright white for title */
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
    color: #a0a0a0; /* Matching the color from your GlobalStyles */
    font-weight: normal; /* lighter weight for subtitle */
  }

  p.description {
    font-size: 1em;
    margin-bottom: 40px; /* More space between description and blogs list */
    text-align: center;
    max-width: 800px; /* Don't let the description get too wide */
    margin-left: auto; /* centering the description */
    margin-right: auto;
    color: #757575; /* lighter than other texts */
  }

  .blogs-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px 30px;
    justify-content: center;
  }
`

const Blog = () => {
  return (
    <BlogContainer>
      <h1>Welcome to My Digital Diary</h1>
      <h2>Dive deep into my thoughts, adventures, and insights.</h2>
      <p className='description'>
        Here you'll discover a collection of articles I've written over the
        years. From tech deep-dives to personal reflections, I aim to share both
        my knowledge and my journey. Enjoy reading!
      </p>
      <div className='blogs-list'>
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </BlogContainer>
  )
}

export default Blog

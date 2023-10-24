import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BlogCardWrapper = styled(Link)`
  background-color: #202020;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  width: 100%; /* now takes up the full width of the grid cell */

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-5px); /* A little lift effect on hover */
  }

  img {
    width: 100%;
    object-fit: cover; /* Ensure images cover the space without distorting */
    height: 200px;
  }

  .content {
    padding: 15px;

    h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
      color: #ffffff; /* Bright white for title */
      overflow: hidden; /* handle long titles */
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      margin-bottom: 10px;
      color: #a0a0a0; /* Using your global color for text */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Limiting the excerpt to 2 lines */
      -webkit-box-orient: vertical;
    }

    .blog-details {
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      color: #757575; /* A little lighter than other text for details */
    }
  }
`

const BlogCard = ({ blog }) => {
  return (
    <BlogCardWrapper to={`/blog/${blog.id}`}>
      <img src={blog.blogImage} alt={blog.title} />
      <div className='content'>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
        <div className='blog-details'>
          <span>{blog.publishDate}</span>
          <span>Reading Time: {blog.readingTime}</span>
        </div>
      </div>
    </BlogCardWrapper>
  )
}

export default BlogCard

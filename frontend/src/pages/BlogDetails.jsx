import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import blogs from '../blogs.js'
import TagComponent from '../pages/TagComponent'
import {
  FaCalendarAlt,
  FaClock,
  FaComment,
  FaTag,
  FaUser
} from 'react-icons/fa'
const MainContent = styled.div`
  flex: 1;
  margin-right: 20px;
`
const BlogDetailsWrapper = styled.div`
  display: flex;
`
const BlogDetailsContainer = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Merriweather', serif; /* This font is commonly used on Medium for content */
`

const BlogTitle = styled.h1`
  font-size: 2.8em;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
`

const BlogImage = styled.img`
  width: 100%;
  margin-bottom: 40px;
  border-radius: 8px;
`

const Metadata = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85em;
  margin-bottom: 25px;
  color: #757575;

  div + div {
    margin-left: 20px;
  }

  svg {
    margin-right: 5px;
  }
`

const BlogDescription = styled.div`
  font-size: 1.2em;
  line-height: 1.7;
  color: #444;
  margin-bottom: 30px;
`

const BlogContent = styled.div`
  font-size: 1em;
  line-height: 1.8;
  color: #333;
  p {
    margin-bottom: 25px;
  }
`

const Tags = styled.div`
  margin-top: 20px;
  font-size: 0.85em;
  span {
    background-color: #f5f5f5;
    padding: 5px 12px;
    margin-right: 10px;
    border-radius: 15px;
    color: #555;
  }
`

const OriginalLink = styled.a`
  display: block;
  margin-top: 40px;
  color: #0077cc;
  text-decoration: underline;
  &:hover {
    color: #0055a5;
  }
`

const LikeButton = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${props =>
    props.liked ? '#e0245e' : '#999'}; /* Use Twitter's like color */
  transition: color 0.3s ease;

  &:hover {
    color: #e0245e;
  }
`

const BlogDetails = () => {
  const { blogId } = useParams()
  const blog = blogs.find(b => b.id === parseInt(blogId))
  const [liked, setLiked] = useState(false)

  if (!blog) {
    return <div>Blog not found!</div>
  }

  return (
    <BlogDetailsContainer>
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogImage src={blog.blogImage} alt={blog.title} />
      <Metadata>
        <div>
          <FaCalendarAlt />
          {blog.publishDate}
        </div>
        <div>
          <FaClock />
          {blog.readingTime}
        </div>
        <div>
          <FaComment />
          {blog.commentsCount}
        </div>
        <div>
          <FaTag />
          {blog.category}
        </div>
        <div>
          <FaUser />
          {blog.author}
        </div>
      </Metadata>
      <BlogDescription>{blog.description}</BlogDescription>
      <BlogContent>
        <p>
          <strong>Intro:</strong> {blog.content.intro}
        </p>
        <p>
          <strong>Body:</strong> {blog.content.body}
        </p>
        <p>
          <strong>Conclusion:</strong> {blog.content.conclusion}
        </p>
      </BlogContent>
      <TagComponent tags={blog.tags} />
      <LikeButton liked={liked} onClick={() => setLiked(!liked)}>
        ❤️
      </LikeButton>
      <OriginalLink
        href={blog.blogLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        Original Blog Link
      </OriginalLink>
    </BlogDetailsContainer>
  )
}

export default BlogDetails

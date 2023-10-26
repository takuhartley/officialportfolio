import React from 'react'
import styled from 'styled-components'
import blogs from '../blogs.js' // Please adjust the path as necessary
const Container = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  overflow-x: auto;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const StyledThead = styled.thead`
  background-color: #333;
  color: #fff;
`

const StyledTh = styled.th`
  padding: 10px 20px;
`

const StyledTd = styled.td`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
`

const BlogImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`
const BlogManagement = () => {
  return (
    <Container>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Title</StyledTh>
            <StyledTh>Excerpt</StyledTh>
            <StyledTh>Tags</StyledTh>
            <StyledTh>Image</StyledTh>
            <StyledTh>Publish Date</StyledTh>
            <StyledTh>Reading Time</StyledTh>
            <StyledTh>Comments</StyledTh>
            <StyledTh>Category</StyledTh>
            <StyledTh>Author</StyledTh>
            <StyledTh>Blog Link</StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          {blogs.map(blog => {
            const {
              id,
              title,
              excerpt,
              tags,
              blogImage,
              publishDate,
              readingTime,
              commentsCount,
              category,
              author,
              blogLink
            } = blog

            return (
              <tr key={id}>
                <StyledTd>{title}</StyledTd>
                <StyledTd>{excerpt}</StyledTd>
                <StyledTd>{tags.join(', ')}</StyledTd>
                <StyledTd>
                  <BlogImage src={blogImage} alt={title} />
                </StyledTd>
                <StyledTd>{publishDate}</StyledTd>
                <StyledTd>{readingTime}</StyledTd>
                <StyledTd>{commentsCount}</StyledTd>
                <StyledTd>{category}</StyledTd>
                <StyledTd>{author}</StyledTd>
                <StyledTd>
                  <a href={blogLink} target='_blank' rel='noopener noreferrer'>
                    Read
                  </a>
                </StyledTd>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </Container>
  )
}

export default BlogManagement

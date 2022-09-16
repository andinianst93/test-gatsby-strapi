import React from "react"
import Post from "./Post"
import styled from "styled-components"
const Posts = ({ posts, title }) => {
  return (
    <Wrapper className="section posts">
      <h4>{title}</h4>
      <div className="section-center posts-center">
        {posts.map((post, index) => {
          return <Post key={post.id} index={index} {...post} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    color: #e12d39;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
  @media screen and (min-width: 992px) {
    .posts {
      width: 92vw;
    }
  }
`

export default Posts

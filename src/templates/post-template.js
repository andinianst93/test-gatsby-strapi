import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const PostTemplate = ({ data }) => {
  const {
    title,
    updatedAt: published,
    author,
    content,
    image,
  } = data.strapiArticle
  return (
    <Layout>
      <Wrapper className="blog-template-page">
        <article>
          <GatsbyImage
            image={getImage(image.localFile.childImageSharp)}
            className="main-img"
            alt={title}
          />
          <div className="post-info">
            <h1>{title}</h1>
            <p>by {author.username}</p>
            <p>{published}</p>
            <div className="underline"></div>
            <p className="long-post">{content.data.content}</p>
          </div>
        </article>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h1 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .long-post {
      text-align: left;
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`
export default PostTemplate

export const query = graphql`
  query GetSinglePost($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      author {
        username
      }
      content {
        data {
          content
        }
      }
      title
      updatedAt(formatString: "Do MMMM YYYY")
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

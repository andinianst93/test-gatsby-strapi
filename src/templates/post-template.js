import React, { Children } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Reactmarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
            alt={title}
            className="main-img"
          />
          <div className="post-info">
            <h1>{title}</h1>
            <p>by {author.username}</p>
            <p>{published}</p>
            <div className="underline"></div>
            <div className="paragraph">
              <Reactmarkdown children={content.data.content}></Reactmarkdown>
            </div>
          </div>
        </article>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .paragraph {
    text-align: left;
  }
  .main-img {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
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
      font-size: 2rem;
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
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
      width: 45%;
      display: block;
      margin: 0 auto;
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

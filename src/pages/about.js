import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
const About = ({ data }) => {
  const {
    strapiAbout: { title, image, description },
  } = data
  console.log(image)
  const pathToImage = image.localFile.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Wrapper className="page-center">
        <div className="about-center">
          <GatsbyImage
            image={getImage(pathToImage)}
            className="about-img"
            alt="about me"
          ></GatsbyImage>
          <article className="about-text">
            <h1>{title}</h1>
            <div className="underline"></div>
            <p>{description}</p>
          </article>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      title
      description
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

const Wrapper = styled.section`
  padding: 7rem 0;
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-4);
    margin-left: auto;
    margin-right: auto;
  }
  .about-img {
    margin-bottom: 2rem;
    height: 25rem;
    border-radius: 5%;
  }
  .about-img-svg {
    margin-bottom: 2rem;
    height: 75%;
    width: 100%;
    display: block;
  }
  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: left;
  }
  .about-text .underline {
    margin-left: 0;
    margin-right: 0;
  }
  .about-text p {
    line-height: 2;
  }
  .about-text h1 {
    font-size: 2.5rem;
    line-height: 2;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img,
    .about-img-svg {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
`
export const Head = () => <Seo title="About Us" />

export default About

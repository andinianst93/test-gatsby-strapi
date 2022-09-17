import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Hero = ({ title }) => {
  return (
    <Wrapper>
      <div className="page-center">
        <h3>
          <Link to="/">Home </Link>/ <Link to="/blog">Blog</Link> / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-3);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-white);
  margin-top: 5rem;
  margin-bottom: 2rem;
  h3 {
    font-size: 1.25rem;
  }
  a {
    color: var(--clr-white);
    padding: 0.5rem;
    transition: var(--transition);
    text-decoration: underline;
  }
`
export default Hero

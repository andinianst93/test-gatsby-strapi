import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <header className="hero">
        <StaticImage
          src="../assets/images/main.jpg"
          alt="header"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>We bring you the best content</h1>
            <h4>Expertise, Authoritativeness, and Trustworthiness</h4>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;

  .page {
    min-height: calc(100vh - (6rem + 4rem));
  }

  .hero {
    height: 40vh;
    position: relative;
    margin-bottom: 2rem;
  }
  .hero-img {
    height: 100%;
    border-radius: var(--borderRadius);
  }
  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--borderRadius);
  }
  .hero-text {
    color: #ffffff;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    .hero-text h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .hero-text h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`
export default Hero

import React from "react"
import socialLinks from "../constants/social_links"
import links from "../constants/links"
import { Link } from "gatsby"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()} <span>ADN</span> built
          with GatsbyJS. all rights reserved
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 10rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: uppercase;
  }
  .footer-nav-links {
    color: var(--clr-white);
  }
  span {
    color: var(--clr-primary-4);
  }
  .footer-links {
    margin: 0 auto 1rem auto;
  }
  .social-link {
    color: var(--clr-white);
    padding-right: 1rem;
    font-size: 1.75rem;
  }
  .social-link:hover {
    color: var(--clr-primary-4);
  }
`
export default Footer

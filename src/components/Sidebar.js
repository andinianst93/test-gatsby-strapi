import React from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
const Sidebar = () => {
  const { hideSidebar } = React.useContext(GatsbyContext)
  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar}>
          <MdClose />
        </button>
        <div className="links">
          {links.map(link => {
            const { id, text, url } = link
            return (
              <Link to={url} key={id} onClick={hideSidebar}>
                {text}
              </Link>
            )
          })}
        </div>
        <div className="social-links">
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: grid;
  place-items: center;
  .social-links {
    list-style-type: none;
    display: flex;
    justify-content: center;
    line-height: 25rem;
  }
  .social-link {
    font-size: 1.75rem;
    padding-right: 1rem;
    color: var(--clr-grey-1);
  }
  .social-link:hover {
    color: var(--clr-primary-4);
  }
  .container {
    background: var(--clr-white);
    width: 65vw;
    height: 90vh;
    border-radius: 20px;
    position: relative;
    padding: 4rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      gap: 1rem 2rem;
      align-items: center;
      justify-content: center;
      a {
        display: block;
        text-align: center;
        text-transform: capitalize;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
        margin-bottom: 0.5rem;
        font-size: 2rem;

        border-radius: var(--radius);

        &:hover {
          text-decoration: underline;
          color: var(--clr-primary-4);
        }
      }
    }
  }
`
export default Sidebar

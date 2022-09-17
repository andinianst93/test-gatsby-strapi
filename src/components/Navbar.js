import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { GatsbyContext } from "../context/context"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
const Navbar = () => {
  const { isSidebarOpen, showSidebar } = React.useContext(GatsbyContext)

  return (
    <Wrapper className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {!isSidebarOpen && (
            <button type="button" className="toggle-btn" onClick={showSidebar}>
              <FaAlignRight />
            </button>
          )}
          <Link to="/">
            <StaticImage
              src="../assets/images/gatsby-playground.png"
              className="logo"
              alt="logo"
            ></StaticImage>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  box-shadow: var(--light-shadow);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
  .logo {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 228px;
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header .logo {
    margin-bottom: 0.375rem;
  }
  .toggle-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-4);
    cursor: pointer;
  }
  .toggle-btn:hover {
    color: var(--clr-primary-2);
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) {
    .nav-header {
      margin-bottom: 0.375rem;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    .logo {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 40vw;
    }
  }
`

export default Navbar

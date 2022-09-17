import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
const subscribe = () => {
  return (
    <Layout>
      <Wrapper className="newsletter-page">
        <div className="subs-form">
          <h3>Get all the latest stories to your inbox</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
  display: grid;
  place-items: center;
  padding: 5rem 0;
  .subs-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
  }
  .subs-form:hover {
    box-shadow: var(--dark-shadow);
  }
  .subs-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`
export default subscribe

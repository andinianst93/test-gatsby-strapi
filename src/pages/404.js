import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <h2>oops it's a dead end</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error

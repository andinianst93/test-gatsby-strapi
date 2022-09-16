import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Posts from "../components/Posts"
const blog = ({ data }) => {
  const {
    allStrapiArticle: { nodes: posts },
  } = data
  return (
    <Layout>
      <Posts posts={posts} title="All Posts" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiArticle(limit: 3, sort: { fields: updatedAt, order: DESC }) {
      nodes {
        id
        slug
        title
        updatedAt(formatString: "Do MMMM YYYY")
        description
        author {
          username
        }
        image {
          url
        }
      }
    }
  }
`

export default blog

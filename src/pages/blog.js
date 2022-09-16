import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogPosts from "../components/BlogPosts"
const blog = ({ data }) => {
  const {
    allStrapiArticle: { nodes: posts },
  } = data
  return (
    <Layout>
      <BlogPosts posts={posts} title="All Posts" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiArticle(sort: { fields: updatedAt, order: DESC }) {
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

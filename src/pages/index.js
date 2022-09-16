import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Posts from "../components/Posts"

const IndexPage = ({ data }) => {
  const {
    allStrapiArticle: { nodes: posts },
  } = data

  return (
    <Layout>
      <Posts posts={posts} title="recently published"></Posts>
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
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage

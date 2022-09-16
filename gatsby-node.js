const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post-template.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach(article => {
      createPage({
        path: `/blog/${article.slug}`,
        component: postTemplate,
        context: {
          slug: article.slug,
        },
      })
    })
  }
}

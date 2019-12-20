/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve("./src/templates/blog.js");

    const response = await graphql(`
        {
            allContentfulBlogPost {
            edges {
                node {
                slug
                }
            }
            }
        }
    `)

    response.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path: `/${edge.node.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    })

}
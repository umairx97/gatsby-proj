import React, { Fragment } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Blog from '../templates/blog'

const Markdown = () => {

  const data = useStaticQuery(graphql`
    {
        allMarkdownRemark {
          edges {
            node {
              frontmatter{
                title
                date
              }
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `)

  return (
    <Fragment>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lightgray",
        padding: "10px",
      }}>
        {data.allMarkdownRemark.edges.map(item => (
          <div>
            <Link to={item.node.fields.slug}>
              <h2 style={{ textDecoration: 'underline', color: 'black', }}>
                Title: {item.node.frontmatter.title}
              </h2>
            </Link>
            <h4>Date: {item.node.frontmatter.date}</h4>
          </div>

        ))}
      </div>

    </Fragment>
  )
}

export default Markdown

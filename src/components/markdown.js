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
      <div className="post-container" >
        <div>
          {data.allMarkdownRemark.edges.map(item => (
            <div className="post-item">
              <Link to={item.node.fields.slug} >
                <h2 style={{ textDecoration: 'underline', color: '#444444', margin: 0, padding: 0 }}>
                  Title: {item.node.frontmatter.title}
                </h2>
              </Link>
              <h4 >Date: {item.node.frontmatter.date}</h4>
            </div>
          ))}
        </div>
      </div>

    </Fragment>
  )
}

export default Markdown

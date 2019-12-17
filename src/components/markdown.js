import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
            }
          }
        }
      }
    `)

    return (
        <div>
            {data.allMarkdownRemark.edges.map(item => (
                <React.Fragment>
                    <p>Title: {item.node.frontmatter.title}</p>
                    <p>Date: {item.node.frontmatter.date}</p>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Markdown

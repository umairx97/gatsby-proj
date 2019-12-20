import React, { Fragment } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Blog from '../templates/blog'

const Markdown = () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort:{
        fields: publishedDate,
        order: DESC
      }) {
        edges {
          node {
            id
            slug
            title
            publishedDate(fromNow: true, formatString:"DD MM YYYY")
          
          }
        }
      }
    }
    
    `)

  return (
    <Fragment>
      <div className="post-container" >
        <div>
        {console.log(data)}
          {data.allContentfulBlogPost.edges.map(item => (
            <div className="post-item">
              <Link to={item.node.slug} >
                <h2 style={{ textDecoration: 'underline', color: '#444444', margin: 0, padding: 0 }}>
                  Title: {item.node.title}
                </h2>
              </Link>
              <h4 >Date: {item.node.publishedDate}</h4>
            </div>
          ))}
        </div>
      </div>

    </Fragment>
  )
}

export default Markdown

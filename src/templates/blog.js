import React from 'react';
import { graphql } from 'gatsby'

export const query = graphql`
query ($slug: String!){
    markdownRemark (
    fields:{
        slug:{
        eq: $slug
        }
    }
    ){
        frontmatter {
            title
            date
        }

        html
    }
}
`


const Blog = (props) => {
    return (
        <div className="article-container">
            <div>
                <h1 style={{ margin: 0 }} >{props.data.markdownRemark.frontmatter.title}</h1>
                <h4 style={{ margin: 0 }}>{props.data.markdownRemark.frontmatter.date}</h4>
                <div >
                    <p dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></p>
                </div>
            </div>
        </div>
    )
}

export default Blog
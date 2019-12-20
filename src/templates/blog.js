import React from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const query = graphql`
    query ($slug: String!){ 
        contentfulBlogPost(slug: {eq: $slug}){
            title, 
            publishedDate(formatString: "DD MM YYYY"), 
            body {
                json
            }

        }

    }
`

const Blog = (props) => {

    const options = { 
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file['en-US'].url
                console.log(url)
                return <img height={350} alt={alt} src={url} />
            }
        }
    }
    return (
        <div className="article-container">
            <div>
                <h1 style={{ margin: 0 }} >{props.data.contentfulBlogPost.title}</h1>
                <h4 style={{ margin: 0 }}>{props.data.contentfulBlogPost.publishedDate}</h4>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </div>
    )
}

export default Blog
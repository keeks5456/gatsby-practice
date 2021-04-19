import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const { BLOCKS } = require('@contentful/rich-text-types')

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug } ) {
    title
    publishedDate(formatString: "MMMM Do YYYY")
    body {
      raw
      references {
        contentful_id
        title 
        file {
          url
        }
      }
    }
  }
}
`


const Blog = (props) => {
  // const options = {
  //   renderNode: {
  //     "embeded-asset-block": (node) => {
  //       const alt = node.data.fields.title('en-US')
  //       const url = node.data.target.fields.file('en-US').url
  //       return <img alt={alt} url={url} />
  //     }
  //   }
  // }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        const imageId = node.data.target.sys.id
        const {
          file: {url}, 
          title
       } = props.data.contentfulBlogPost.body.references.find(({contentful_id: id}) => id === imageId);
        // const alt = node.data.fields.title('en-US')
        // const url = node.data.target.fields.file('en-US').url
        return <img alt={title} src={url} />
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options))}
    </Layout>
  );
};

export default Blog;
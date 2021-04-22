import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'


const { BLOCKS } = require('@contentful/rich-text-types')

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug } ) {
    title
    image {
      file {
        url
      }
    }
    publishedDate(formatString: "MMMM Do YYYY")
    body {
      raw
    }
  }
}
`


const Blog = (props) => {

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       const imageId = node.data.target.sys.id
  //       console.log(node.data)
  //       const {
  //         file: {url}, 
  //         title
  //      } = props.data.contentfulBlogPost.image.find(({contentful_id: id}) => id === imageId);
  //       return <img alt={title} src={url} />
  //     }
  //   }
  // }
  
console.log(props.data)
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      <img src={props.data.contentfulBlogPost.image[0].file.url} alt="yur mom"></img>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
    </Layout>
  );
};

export default Blog;
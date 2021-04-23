import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug } ) {
    title
    img {
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


console.log(props.data)
// debugger
  return (
    <Layout>
      <img src={props.data.contentfulBlogPost.img.file.url} alt="yur mom"></img>
      <Head title={props.data.contentfulBlogPost.title}/>
      {/* <h1>{props.data.contentfulBlogPost.title}</h1> */}
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  );
};

export default Blog;
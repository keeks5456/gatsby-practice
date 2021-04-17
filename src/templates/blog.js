import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug } ) {
    title
    publishedDate(formatString: "MMMM Do YYYY")
    body {
      raw
    }
  }
}
`


const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
      {/* figure out a way to get the json valuein playground, figure out why its raw data */}
    </Layout>
  );
};

export default Blog;
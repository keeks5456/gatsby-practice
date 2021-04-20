import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(
      sort: {
        fields:publishedDate,
        order: ASC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate (formatString:"MMMM Do YYYY" )
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Head title="Blog"/>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) =>{
          return (
            // add a key prop to the list later
            <li key={edge.node.id} className={blogStyles.post}>
              <Link to={edge.node.slug}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <Link to="/about">Back to about</Link>
    </Layout>
  );
};

export default Blog;
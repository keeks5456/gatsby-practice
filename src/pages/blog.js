import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`)

  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) =>{
          return (
            // add a key prop to the list later
            <li key={edge.node.id}>
              <Link to={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
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
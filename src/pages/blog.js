import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
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
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <Link to="/about">Back to about</Link>
    </Layout>
  );
};

export default Blog;
import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'

const About = () => {
  
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`) //tagged template literal
  return (
    <Layout>
      <Head title="About"/>
      <h1>{data.site.siteMetadata.author}</h1>
      <p>This is a component about meeee</p>
      <Link to="/contact">Contact me here</Link>
    </Layout>

  );
};

export default About;
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
`)
  return (
    <Layout>
      <Head title="About"/>
      <h1>{data.site.siteMetadata.author}</h1>
      <h2>Hello & Welcome!</h2>
      <p>My love for all things anime started when I was a young girl. My first anime I fell in love with was <b>Inuyasha... or dotHackSign.</b></p>
      <Link to="/contact">Contact me here</Link>
    </Layout>

  );
};

export default About;
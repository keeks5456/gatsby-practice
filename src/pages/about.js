import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const About = () => {
  return (

    <Layout>
      <h1>Akiko Green</h1>
      <p>This is a component about meeee</p>
      <Link to="/contact">Contact me here</Link>
    </Layout>

  );
};

export default About;
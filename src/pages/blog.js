import React from 'react';
import { Link } from "gatsby"
import Layout from '../components/layout'

const Blog = () => {
  return (
    <Layout>
      <p>Blogs page Homie</p>
      <Link to="/about">Back to about</Link>
    </Layout>
  );
};

export default Blog;
import React from 'react';
import { Link } from "gatsby"
import Footer from '../components/footer'
import Header from '../components/header'

const Blog = () => {
  return (
    <div>
      <Header />
      <p>Blogs page Homie</p>
      <Link to="/about">Back to about</Link>
      <Footer />
    </div>
  );
};

export default Blog;
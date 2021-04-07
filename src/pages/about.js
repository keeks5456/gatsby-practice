import { Link } from 'gatsby';
import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'

const About = () => {
  return (
    <div>
      <Header />
      <h1>Akiko Green</h1>
      <p>This is a component about meeee</p>
      <Link to="/contact">Contact me here</Link>
      <Footer />
    </div>
  );
};

export default About;
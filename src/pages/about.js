import { Link } from 'gatsby';
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Akiko Green</h1>
      <p>This is a component about meeee</p>
      <Link to="/contact">Contact me here</Link>
    </div>
  );
};

export default About;
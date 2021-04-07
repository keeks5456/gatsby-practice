import React from 'react';
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Hello From Contact</h1>
      <p>Slide in my DMs for funny memes</p>
      <p>Here is my twitter!</p>
      <a href="https://twitter.com/akikoDotJS" target="_blank">Twitter</a>
      {/* <Link to="https://twitter.com/akikoDotJS">twitter</Link> */}
      <Footer />
    </div>
  );
};

export default Contact;
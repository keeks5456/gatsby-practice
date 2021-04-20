import React from 'react';
// import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'

const Contact = () => {
  return (

    <Layout>
      <Head title="Contacts"/>
      <h1>Hello From Contact</h1>
      <p>Slide in my DMs for funny memes</p>
      <p>Here is my twitter!</p>
      <a href="https://twitter.com/akikoDotJS" target="_blank" rel="noreferrer">Twitter</a>
      {/* <Link to="https://twitter.com/akikoDotJS">twitter</Link> */}
    </Layout>

  );
};

export default Contact;
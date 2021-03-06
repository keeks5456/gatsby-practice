import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import * as aboutStyles from './about.module.scss'

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
      <div className={aboutStyles.container}>
      <h1>{data.site.siteMetadata.author}</h1>
      <h2>About The Creator</h2>
      <p>My love for all things anime started when I was a young girl. My first anime I fell in love with was <b>Inuyasha</b>, a show about a half-demon named <i>Inuyasha</i> who embarks on an adventure with <i>Kagome</i>, <i>Sango</i>, <i>Shippo</i>, and <i>Miroku</i> in hopes of finding the Shikan Jewel to turn him into a full fledged demon. As I grew older, my love for anime grew as well. From the older 1990's anime like Inuyasha and Yu-Yu-Hakusho to the now more modern, popular anime's like Demon Slayer, Attack on Titans, and Boruto, anime has gradually made long lasting positive impacts on my life.</p>
      <br/>
      <p>One way anime has made an impact on my life is the main character underdog archetype. I have always resonated with this from my own personal battles of being seen as the underdog. During my journey to becoming a Software Engineer...</p>
      <Link to="/contact">Contact me here</Link>
      </div>
    </Layout>

  );
};

export default About;
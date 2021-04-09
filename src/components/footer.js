import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

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
    <div>
    <footer>
      <p>created by {data.site.siteMetadata.author}, © 2021</p>
    </footer>
    </div>
  );
};

export default Footer;
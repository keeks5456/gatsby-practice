import React from 'react';
import { Link } from 'gatsby'
// import './header.module.scss'
import * as headerStyles from './header.module.scss'
// note that we need the * becasue we dont have a default export for our styling
const Header = () => {
  return (
    <header>
    <h1>Gatsby Practice Project</h1>
    <nav>
      <ul>
        <li>
          <Link className={headerStyles.link} to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'gatsby'
import './header.module.scss'
// import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header>
    <h1>Gatsby Practice Project</h1>
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
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
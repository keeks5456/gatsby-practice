import React from 'react';
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import './layout.module.scss'

const Layout = (props) => {
  return (
    <div>
      <Header />
      {/* this is JSX elements passed in */}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

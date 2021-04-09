import React from 'react';
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as layoutStyle from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
      <Header />
      {/* this is JSX elements passed in */}
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

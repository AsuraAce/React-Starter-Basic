import React from 'react';
import { Link } from 'react-router';

import cssModules from 'react-css-modules';
import styles from './Navbar.css';

const Navbar = () => (
  <div className="mdl-layout__header-row" styleName="navbar">
    <span className="mdl-layout-title">React Starter Basic</span>
    <div className="mdl-layout-spacer" />
    <nav className="mdl-navigation mdl-layout--large-screen-only">
      <Link className="mdl-navigation__link" to="/">Home</Link>
      <Link className="mdl-navigation__link" to="page1">Link</Link>
      <Link className="mdl-navigation__link" to="page2">Link</Link>
      <Link className="mdl-navigation__link" to="page3">Link</Link>
    </nav>
  </div>
);

export default cssModules(Navbar, styles);

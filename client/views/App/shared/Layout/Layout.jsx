import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Layout.css';

const Layout = ({ children }) => (
  <div styleName="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default cssModules(Layout, styles);

import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Main.css';

const Main = ({ children }) => (
  <main styleName="main">
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default cssModules(Main, styles);

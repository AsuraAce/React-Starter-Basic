import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Header.css';

const Header = ({ children }) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      {children}
    </header>
  </div>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default cssModules(Header, styles);

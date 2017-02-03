import React from 'react';

import cssModules from 'react-css-modules';
import styles from './Footer.css';

const Footer = () => (
  <footer className="mdl-mini-footer" styleName="footer">
    <div className="mdl-mini-footer__left-section">
      <div className="mdl-logo">Title</div>
      <ul className="mdl-mini-footer__link-list">
        <li>Help</li>
        <li>Privacy &amp; Terms</li>
      </ul>
    </div>
  </footer>
);

export default cssModules(Footer, styles);

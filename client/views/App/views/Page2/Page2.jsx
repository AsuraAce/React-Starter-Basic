import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Page2.css';

const Page2 = ({ location }) => (
  <article styleName="page2" key={location.pathname}>
    <h1>Page 2</h1>
  </article>
);

Page2.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string }).isRequired,
};

export default cssModules(Page2, styles);

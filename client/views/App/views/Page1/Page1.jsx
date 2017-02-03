import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Page1.css';

const Page1 = ({ location }) => (
  <article styleName="page1" key={location.pathname}>
    <h1>Page 1</h1>
  </article>
);

Page1.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string }).isRequired,
};

export default cssModules(Page1, styles);

import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Page3.css';

const Page3 = ({ location }) => (
  <article styleName="page3" key={location.pathname}>
    <h1>Page 3</h1>
  </article>
);

Page3.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string }).isRequired,
};

export default cssModules(Page3, styles);

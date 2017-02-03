import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './Home.css';

const Home = ({ location }) => (
  <article styleName="home" key={location.pathname}>
    <h1>Home</h1>
  </article>
);

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string }).isRequired,
};

export default cssModules(Home, styles);

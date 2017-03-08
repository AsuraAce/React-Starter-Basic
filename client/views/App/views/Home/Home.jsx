import React from 'react';

import cssModules from 'react-css-modules';
import styles from './Home.css';

const Home = () => (
  <article styleName="home">
    <h1>Home</h1>
  </article>
);

export default cssModules(Home, styles);

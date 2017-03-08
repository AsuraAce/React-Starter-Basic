import React from 'react';

import cssModules from 'react-css-modules';
import styles from './Page1.css';

const Page1 = () => (
  <article styleName="page1">
    <h1>Page 1</h1>
  </article>
);

export default cssModules(Page1, styles);

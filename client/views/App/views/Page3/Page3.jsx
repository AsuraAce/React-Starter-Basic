import React from 'react';

import cssModules from 'react-css-modules';
import styles from './Page3.css';

const Page3 = () => (
  <article styleName="page3">
    <h1>Page 3</h1>
  </article>
);

export default cssModules(Page3, styles);

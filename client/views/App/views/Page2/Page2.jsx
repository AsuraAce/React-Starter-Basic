import React from 'react';

import cssModules from 'react-css-modules';
import styles from './Page2.css';

const Page2 = () => (
  <article styleName="page2">
    <h1>Page 2</h1>
  </article>
);

export default cssModules(Page2, styles);

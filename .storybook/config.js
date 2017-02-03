import { configure } from '@kadira/storybook';
// import '../client/styles.css';

function loadStories() {
  require('./stories/library.jsx');
  // require as many stories as you need.
}

configure(loadStories, module);

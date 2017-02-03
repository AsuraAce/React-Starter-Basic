import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked the button')}>My First Button</button>
));

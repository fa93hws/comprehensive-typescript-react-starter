import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('with text', () => (
    <div>Hello Button</div>
  ))
  .add('with emoji', () => (
    <div><span role="img" aria-label="so cool">😀 😎 👍 💯</span></div>
  ));

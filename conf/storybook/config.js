import { configure } from '@storybook/react';

function loadStories() {
  // eslint-disable-next-line global-require
  const req = require.context('../../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

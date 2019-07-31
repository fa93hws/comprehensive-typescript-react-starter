/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createPage } from './pages/hello-world/page';

const HelloWorldPage = createPage();

ReactDOM.render(<HelloWorldPage/>, document.getElementById('root'));

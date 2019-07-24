import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHelloWorld } from './hello-world/hello-world';

const HelloWorld = createHelloWorld();

ReactDOM.render (<HelloWorld/>,document.getElementById('root'));

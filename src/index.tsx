/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./mainPane.tsx"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPane = require('./mainPane');
      
ReactDOM.render(<MainPane/>, document.getElementById('app'));
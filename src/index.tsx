/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./spinMaster.tsx"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SpinMaster = require('./spinMaster');
      
ReactDOM.render(<SpinMaster/>, document.getElementById('app'));
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./spinMaster.tsx"/>
var React = require('react');
var ReactDOM = require('react-dom');
var SpinMaster = require('./spinMaster');
ReactDOM.render(React.createElement(SpinMaster, null), document.getElementById('app'));

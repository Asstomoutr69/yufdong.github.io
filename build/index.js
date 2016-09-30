/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./mainPane.tsx"/>
var React = require('react');
var ReactDOM = require('react-dom');
var MainPane = require('./mainPane');
ReactDOM.render(React.createElement(MainPane, null), document.getElementById('app'));

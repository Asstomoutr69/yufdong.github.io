/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./spinMaster.tsx"/>
/// <reference path="./infoDialog.tsx"/>
/// <reference path="./controlPanel.tsx"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SpinMaster = require('./spinMaster');
var InfoDialog = require('./infoDialog');
var MainPane = (function (_super) {
    __extends(MainPane, _super);
    function MainPane(props) {
        _super.call(this, props);
        this.state = {};
    }
    MainPane.prototype.render = function () {
        return (React.createElement("div", {"id": "mainPane", "style": { position: "relative", width: "100%", height: "100%" }}, React.createElement(SpinMaster, null), React.createElement(InfoDialog, null)));
    };
    MainPane.defaultProps = {};
    return MainPane;
})(React.Component);
module.exports = MainPane;

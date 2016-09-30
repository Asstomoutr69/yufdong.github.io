/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/modules/react-bootstrap/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ControlPanel = (function (_super) {
    __extends(ControlPanel, _super);
    function ControlPanel(props) {
        _super.call(this, props);
        this.state = {};
    }
    ControlPanel.prototype.render = function () {
        return (React.createElement("span", {"className": "control-panel"}, React.createElement("div", {"style": { display: "inline-block", margin: "auto" }}, React.createElement(ReactBootstrap.Glyphicon, {"glyph": "step-backward", "className": "control-panel-glyph"}), React.createElement("span", {"style": { display: "block", color: "white" }}, "Play")), React.createElement("div", {"style": { display: "inline-block", margin: "auto" }}, React.createElement(ReactBootstrap.Glyphicon, {"glyph": "play", "className": "control-panel-glyph"}), React.createElement("span", {"style": { display: "block", color: "white" }}, "Play")), React.createElement("div", {"style": { display: "inline-block", margin: "auto" }}, React.createElement(ReactBootstrap.Glyphicon, {"glyph": "step-forward", "className": "control-panel-glyph"}), React.createElement("span", {"style": { display: "block", color: "white" }}, "Play"))));
    };
    ControlPanel.defaultProps = {};
    return ControlPanel;
})(React.Component);
module.exports = ControlPanel;

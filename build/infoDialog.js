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
var InfoDialog = (function (_super) {
    __extends(InfoDialog, _super);
    function InfoDialog(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            showModal: true
        };
        this.open = function () {
            _this.setState({ showModal: true });
        };
        this.close = function () {
            _this.setState({ showModal: false });
        };
        this.modalTitle = "Rikka Finger Spin";
        this.controlsText = React.createElement("div", {"className": "custom-font-large"}, React.createElement("div", null, React.createElement("b", null, "Controls:")), React.createElement("div", {"className": "indent"}, "Spacebar - Play/pause", React.createElement("br", null), "Left Arrow Key - Next frame", React.createElement("br", null), "Right Arrow Key - Previous frame"));
        this.chuu2WikiLink = React.createElement("a", {"href": "https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai"}, "Chuunibyou demo Koi ga Shitai!");
        this.knowYourMemeLink = React.createElement("a", {"href": "http://knowyourmeme.com/memes/rikka-s-finger-spin"}, "internet meme");
        this.gitHubLink = React.createElement("a", {"href": "https://github.com/yufdong/yufdong.github.io"}, "GitHub Repository");
        this.aboutText = React.createElement("div", {"className": "custom-font-large"}, React.createElement("div", null, React.createElement("b", null, "About:")), React.createElement("div", {"className": "indent"}, "The qt3.14 anime grill is ", React.createElement("i", null, "Rikka Takanashi"), " from ", this.chuu2WikiLink, "." + ' ' + "The clip of Rikka spinning her fingers was featured in the opening theme for the first season of the anime series." + ' ' + "Rikka's cute finger spin caught much attention from fans and it quickly became an ", this.knowYourMemeLink, ", spawning" + ' ' + "countless variations and parodies.", React.createElement("br", null), React.createElement("br", null), this.gitHubLink, React.createElement("br", null), "（σ回ω・）σ←↖↑↗→↘↓↙←↖↑↗"));
    }
    InfoDialog.prototype.render = function () {
        return (React.createElement(ReactBootstrap.Modal, {"show": this.state.showModal, "onHide": this.close}, React.createElement(ReactBootstrap.Modal.Header, {"closeButton": true}, React.createElement(ReactBootstrap.Modal.Title, null, React.createElement(ReactBootstrap.Glyphicon, {"glyph": "info-sign"}), " ", '\u00a0', React.createElement("b", {"className": "custom-font-large"}, this.modalTitle))), React.createElement(ReactBootstrap.Modal.Body, null, this.controlsText, React.createElement("br", null), this.aboutText), React.createElement(ReactBootstrap.Modal.Footer, null, React.createElement(ReactBootstrap.Button, {"bsStyle": "primary", "onClick": this.close}, "Close"))));
    };
    InfoDialog.defaultProps = {};
    return InfoDialog;
})(React.Component);
module.exports = InfoDialog;

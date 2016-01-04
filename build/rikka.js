/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Rikka = (function (_super) {
    __extends(Rikka, _super);
    function Rikka(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            imageUrl: this.props.imageLinks[0],
            zIndex: [0, 0, 0, 0, 0]
        };
        this.getFocal = function () {
            var xPos = _this.props.length * 0.47 + _this.props.position.x;
            var yPos = _this.props.length * 0.70 + _this.props.position.y;
            return { x: xPos, y: yPos };
        };
        this.onMouseMove = function (pos) {
            var focal = _this.getFocal();
            // Y is reversed because y is reversed in cartesian plane
            var angle = Math.atan2(focal.y - pos.y, pos.x - focal.x);
            if (angle < 0) {
                angle += 2 * Math.PI;
            }
            var index = 0;
            if (angle >= 0 && angle < 1.25664) {
                index = 2;
            }
            else if (angle < 2.51327) {
                index = 1;
            }
            else if (angle < 3.76991) {
                index = 0;
            }
            else if (angle < 5.02655) {
                index = 4;
            }
            else {
                index = 3;
            }
            _this.setFrame(index);
        };
        this.setFrame = function (index) {
            if (index >= 0 && index < _this.state.zIndex.length) {
                var newArray = [0, 0, 0, 0, 0];
                newArray[index] = 1;
                _this.setState({ zIndex: newArray });
            }
        };
    }
    Rikka.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.mouse.x != nextProps.mouse.x || this.props.mouse.y != nextProps.mouse.y) {
            this.onMouseMove(nextProps.mouse);
        }
        else if (this.props.frame != nextProps.frame) {
            this.setFrame(nextProps.frame);
        }
    };
    Rikka.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("image", {"src": this.props.imageLinks[0], "style": { position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex: this.state.zIndex[0],
            width: this.props.length, height: this.props.length }}), React.createElement("image", {"src": this.props.imageLinks[1], "style": { position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex: this.state.zIndex[1],
            width: this.props.length, height: this.props.length }}), React.createElement("image", {"src": this.props.imageLinks[2], "style": { position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex: this.state.zIndex[2],
            width: this.props.length, height: this.props.length }}), React.createElement("image", {"src": this.props.imageLinks[3], "style": { position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex: this.state.zIndex[3],
            width: this.props.length, height: this.props.length }}), React.createElement("image", {"src": this.props.imageLinks[4], "style": { position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex: this.state.zIndex[4],
            width: this.props.length, height: this.props.length }})));
    };
    Rikka.defaultProps = {
        length: -1,
        position: { x: 0, y: 0 },
        mouse: { x: 0, y: 0 },
        frame: 0,
        imageLinks: ["http://imgur.com/W111tCi.png",
            "http://imgur.com/t42bNGy.png",
            "http://imgur.com/5MUGE9i.png",
            "http://imgur.com/W0DB7hW.png",
            "http://imgur.com/1xc0Sva.png"]
    };
    return Rikka;
})(React.Component);
module.exports = Rikka;

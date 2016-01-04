/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./rikka.tsx"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Rikka = require('./rikka');
var SpinMaster = (function (_super) {
    __extends(SpinMaster, _super);
    function SpinMaster(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            mouse: { x: 0, y: 0 },
            numCol: 0,
            numRow: 0,
            offsetX: 0,
            offsetY: 0,
            frame: 0,
            framePause: false,
            mousePause: false,
            animating: false
        };
        /*
        Calculates the position and size of the images.
        Maintain odd number of columns and rows.
        In case of left overs, always position complete images in the centre with the same amount of leftovers on each side.
        (Creates a "border" of incomplete images around the complete images)
        */
        this.resizeWindow = function () {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var imageSize = _this.props.imageSize;
            var numCol = Math.max(Math.ceil(windowWidth / imageSize), 1);
            if (numCol % 2 === 0)
                numCol++; // Always have odd number of columns
            var numRow = Math.max(Math.ceil(windowHeight / imageSize), 1);
            if (numRow % 2 === 0)
                numRow++; // Always have odd number of rows
            var offsetX = (numCol * imageSize - windowWidth) / 2;
            var offsetY = (numRow * imageSize - windowHeight) / 2;
            _this.setState({ windowWidth: windowWidth, windowHeight: windowHeight, numCol: numCol, numRow: numRow, offsetX: offsetX, offsetY: offsetY });
        };
        this.handleMouseMove = function (event) {
            if (!_this.state.mousePause) {
                _this.setState({ mouse: { x: event.clientX, y: event.clientY } });
            }
        };
        this.handleKeyPress = function (event) {
            // Right Arrow 39, Left Arrow 37
            if (event.which === 39 && !_this.state.framePause) {
                _this.pauseFrame();
                var newFrame = (_this.state.frame + 1) % 5;
                _this.setState({ frame: newFrame });
            }
            else if (event.which === 37 && !_this.state.framePause) {
                _this.pauseFrame();
                var newFrame = (_this.state.frame - 1) % 5;
                if (newFrame < 0)
                    newFrame = 4;
                _this.setState({ frame: newFrame });
            }
            else if (event.which === 32) {
                if (_this.state.animating) {
                    _this.stopAnimation();
                }
                else {
                    _this.animateForward();
                }
            }
        };
        this.pauseFrame = function () {
            _this.setState({ framePause: true, mousePause: true });
            var unPauseFrame = function () {
                _this.setState({ framePause: false });
            };
            var unPauseMouse = function () {
                _this.setState({ mousePause: false });
            };
            if (_this.frameTimeout) {
                clearTimeout(_this.frameTimeout);
            }
            if (_this.mouseTimeout) {
                clearTimeout(_this.mouseTimeout);
            }
            _this.frameTimeout = setTimeout(unPauseFrame, _this.props.pauseTime);
            _this.mouseTimeout = setTimeout(unPauseMouse, _this.props.pauseTime * 2);
        };
        this.animateForward = function () {
            var newFrame = (_this.state.frame + 1) % 5;
            _this.setState({ frame: newFrame, framePause: true, mousePause: true, animating: true });
            _this.animationTimeout = setTimeout(_this.animateForward, _this.props.animationDelay);
        };
        this.stopAnimation = function () {
            clearTimeout(_this.animationTimeout);
            _this.setState({ framePause: false, mousePause: false, animating: false });
        };
        this.renderRikkas = function () {
            var rikkas = [];
            for (var i = 0; i < _this.state.numCol; i++) {
                for (var k = 0; k < _this.state.numRow; k++) {
                    rikkas.push(React.createElement(Rikka, {"key": "x:" + i + ",y:" + k, "mouse": _this.state.mouse, "length": _this.props.imageSize, "position": { x: _this.props.imageSize * i - _this.state.offsetX,
                        y: _this.props.imageSize * k - _this.state.offsetY }, "frame": _this.state.frame}));
                }
            }
            return rikkas;
        };
    }
    SpinMaster.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resizeWindow);
        this.resizeWindow();
    };
    SpinMaster.prototype.render = function () {
        return (React.createElement("div", {"onMouseMove": this.handleMouseMove, "onKeyDown": this.handleKeyPress, "tabIndex": 0, "style": { width: this.state.windowWidth, height: this.state.windowHeight, overflow: "hidden" }}, this.renderRikkas(), ";"));
    };
    SpinMaster.defaultProps = {
        imageSize: 200,
        pauseTime: 40,
        animationDelay: 60
    };
    return SpinMaster;
})(React.Component);
module.exports = SpinMaster;

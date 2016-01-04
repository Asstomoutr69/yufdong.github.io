/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./rikka.tsx"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Rikka = require('./rikka');

class SpinMaster extends React.Component<P, S> {
  
  constructor(props: P) {
    super(props);
  }
  
  static defaultProps: any = {
    imageSize: 200,
    pauseTime: 40,
    animationDelay: 60
  }

  state: S = {
    windowWidth: 0,
    windowHeight: 0,
    mouse: {x: 0, y: 0},
    numCol: 0,
    numRow: 0,
    offsetX: 0,
    offsetY: 0,
    frame: 0,
    framePause: false,
    mousePause: false,
    animating: false
  }
  
  frameTimeout: any;
  mouseTimeout: any;
  animationTimeout: any;
  
  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();
  }

  /*
  Calculates the position and size of the images.
  Maintain odd number of columns and rows.
  In case of left overs, always position complete images in the centre with the same amount of leftovers on each side.
  (Creates a "border" of incomplete images around the complete images)
  */
  resizeWindow = () => {
    let windowWidth = window.innerWidth;
    let windowHeight =  window.innerHeight;
    let {imageSize} = this.props; 
    
    let numCol = Math.max(Math.ceil(windowWidth / imageSize), 1);
    if(numCol % 2 === 0) numCol++; // Always have odd number of columns
    let numRow = Math.max(Math.ceil(windowHeight / imageSize), 1);
    if(numRow % 2 === 0) numRow++; // Always have odd number of rows
    
    let offsetX = (numCol * imageSize - windowWidth) / 2;
    let offsetY = (numRow * imageSize - windowHeight) / 2;

    this.setState({windowWidth: windowWidth, windowHeight: windowHeight, numCol: numCol, numRow: numRow, offsetX: offsetX, offsetY: offsetY});
  }
  
  handleMouseMove = (event) => {
    if(!this.state.mousePause) {
      this.setState({mouse: {x: event.clientX, y: event.clientY}});
    }
  }
  
  handleKeyPress = (event) => {
    // Right Arrow 39, Left Arrow 37
    if(event.which === 39 && !this.state.framePause) {
      this.pauseFrame();
      let newFrame = (this.state.frame + 1) % 5;
      this.setState({frame: newFrame});
    }
    else if(event.which === 37 && !this.state.framePause) {
      this.pauseFrame();
      let newFrame = (this.state.frame - 1) % 5;
      if(newFrame < 0) newFrame = 4;
      this.setState({frame: newFrame});
    }
    else if(event.which === 32) {
      if(this.state.animating) {
        this.stopAnimation();
      }
      else {
        this.animateForward();
      } 
    }
  }
  
  pauseFrame = () =>{
    this.setState({framePause: true, mousePause: true});
    var unPauseFrame = () => {
      this.setState({framePause: false});
    }
    var unPauseMouse = () => {
      this.setState({mousePause: false});
    }
    
    if(this.frameTimeout) {
      clearTimeout(this.frameTimeout);
    }
    if(this.mouseTimeout) {
      clearTimeout(this.mouseTimeout);
    }
    this.frameTimeout = setTimeout(unPauseFrame, this.props.pauseTime);
    this.mouseTimeout = setTimeout(unPauseMouse, this.props.pauseTime * 2);
  }
  
  animateForward = () => {
    let newFrame = (this.state.frame + 1) % 5;
    this.setState({frame: newFrame, framePause: true, mousePause: true, animating: true});
    this.animationTimeout = setTimeout(this.animateForward, this.props.animationDelay);
  }
  
  stopAnimation = () => {
    clearTimeout(this.animationTimeout);
    this.setState({framePause: false, mousePause: false, animating: false});
  }
  
  renderRikkas = () => {
    var rikkas = [];
    for(var i = 0; i < this.state.numCol; i++) {
      for(var k = 0; k < this.state.numRow; k++) {
        rikkas.push(
          <Rikka key={"x:" + i + ",y:" + k} 
            mouse={this.state.mouse} 
            length={this.props.imageSize} 
            position={{x: this.props.imageSize * i - this.state.offsetX,
                       y: this.props.imageSize * k - this.state.offsetY }}
            frame={this.state.frame}/>
        );
      }
    }
    return rikkas;
  }

  render() {
    return(
      <div onMouseMove={this.handleMouseMove} onKeyDown={this.handleKeyPress} tabIndex={0}
        style={{width: this.state.windowWidth, height: this.state.windowHeight, overflow: "hidden"}}>
        
        {this.renderRikkas()};
      </div>
    );
  }
  
}


interface P extends React.Props<any> {
  imageSize?: number;
  pauseTime?: number;
  animationDelay?: number;
}

interface S {
  windowWidth?: number;
  windowHeight?: number;
  mouse?: any;
  numCol?: any;
  numRow?: number;
  offsetX?: number; // Offsets left
  offsetY?: number; // Offsets up
  frame?: number;
  framePause?: boolean;
  mousePause?: boolean;
  animating?: boolean;
}

export = SpinMaster;
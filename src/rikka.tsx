/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Rikka extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
  }
  
  static defaultProps: any = {
    length: -1,
    position: {x: 0, y: 0},
    mouse: {x: 0, y: 0},
    frame: 0,
    imageLinks: ["images/Rikka_1.png",
                 "images/Rikka_2.png",
                 "images/Rikka_3.png",
                 "images/Rikka_4.png",
                 "images/Rikka_5.png"],
  }

  state: S = {
    imageUrl: this.props.imageLinks[0],
    zIndex: [0, 0, 0, 0, 0]
  }
  
  componentWillReceiveProps(nextProps: any) {
    if(this.props.mouse.x != nextProps.mouse.x || this.props.mouse.y != nextProps.mouse.y) {
      this.onMouseMove(nextProps.mouse);
    }
    else if(this.props.frame != nextProps.frame) {
      this.setFrame(nextProps.frame);
    }
  }

  getFocal = () => {
    let xPos = this.props.length * 0.47 + this.props.position.x;
    let yPos = this.props.length * 0.70 + this.props.position.y;
    return {x: xPos, y: yPos};
  }

  onMouseMove = (pos: any) => {
    let focal = this.getFocal();
    // Y is reversed because y is reversed in cartesian plane
    let angle = Math.atan2(focal.y - pos.y, pos.x - focal.x);
    if(angle < 0) {
      angle += 2 * Math.PI;
    }
    
    let index = 0;
    if(angle >= 0 && angle < 1.25664) {
      index = 2;
    }
    else if(angle < 2.51327) {
      index = 1;
    }
    else if(angle < 3.76991) {
      index = 0;
    }
    else if(angle < 5.02655) {
      index = 4;
    }
    else {
      index = 3;
    }
    this.setFrame(index);
  }
  
  setFrame = (index: number) => {
    if(index >= 0 && index < this.state.zIndex.length) {
      var newArray = [0, 0, 0, 0, 0];
      newArray[index] = 1;
      this.setState({zIndex: newArray});
    }
  }

  render() {
    return(
      <div>
        <image src={this.props.imageLinks[0]}
          style={{position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex:this.state.zIndex[0],
          width: this.props.length, height: this.props.length}} />
        <image src={this.props.imageLinks[1]}
          style={{position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex:this.state.zIndex[1],
          width: this.props.length, height: this.props.length}} />
        <image src={this.props.imageLinks[2]}
          style={{position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex:this.state.zIndex[2],
          width: this.props.length, height: this.props.length}} />
        <image src={this.props.imageLinks[3]}
          style={{position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex:this.state.zIndex[3],
          width: this.props.length, height: this.props.length}} />
        <image src={this.props.imageLinks[4]}
          style={{position: "absolute", left: this.props.position.x, top: this.props.position.y, zIndex:this.state.zIndex[4],
          width: this.props.length, height: this.props.length}} />
      </div>
    );
  }
}

interface P extends React.Props<any> {
  imageLinks?: string[];
  length?: number;
  position?: any;
  mouse?: any;
  frame?: any;
}

interface S {
  imageUrl?: string;
  zIndex?: number[];
}

export = Rikka;
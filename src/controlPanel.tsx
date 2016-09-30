/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/modules/react-bootstrap/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';

class ControlPanel extends React.Component<P, S> {
  
  constructor(props: P) {
    super(props);
  }
  
  static defaultProps: any = {
  }

  state: S = {
  }

  render() {
    return(
      <span className="control-panel">
        <div style={{display: "inline-block", margin: "auto"}}>
          <ReactBootstrap.Glyphicon glyph="step-backward" className="control-panel-glyph"/>
          <span style={{display: "block", color: "white"}}>Play</span>
        </div>
        <div style={{display: "inline-block", margin: "auto"}}>
          <ReactBootstrap.Glyphicon glyph="play" className="control-panel-glyph"/>
          <span style={{display: "block", color: "white"}}>Play</span>
        </div>
        <div style={{display: "inline-block", margin: "auto"}}>
          <ReactBootstrap.Glyphicon glyph="step-forward" className="control-panel-glyph"/>
          <span style={{display: "block", color: "white"}}>Play</span>
        </div>
      </span>
    );
  }
}

interface P extends React.Props<any> {
}

interface S {
}

export = ControlPanel;
  
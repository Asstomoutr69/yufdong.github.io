/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./spinMaster.tsx"/>
/// <reference path="./infoDialog.tsx"/>
/// <reference path="./controlPanel.tsx"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SpinMaster = require('./spinMaster');
import InfoDialog = require('./infoDialog');
import ControlPanel = require('./controlPanel');

class MainPane extends React.Component<P, S> {
  
  constructor(props: P) {
    super(props);
  }
  
  static defaultProps: any = {
  }

  state: S = {
  }

  render() {
    return(
      <div id="mainPane" style={{position: "relative", width: "100%", height: "100%"}}>
        <SpinMaster/>
        <InfoDialog/>
      </div>
    );
  }

}

interface P extends React.Props<any> {
}

interface S {
}

export = MainPane;
  
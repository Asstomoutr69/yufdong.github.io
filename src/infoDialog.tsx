/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/modules/react-bootstrap/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';

class InfoDialog extends React.Component<P, S> {
  
  constructor(props: P) {
    super(props);
  }
  
  static defaultProps: any = {
  }

  state: S = {
    showModal: true,
  }

  open = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  modalTitle = "Rikka Finger Spin";

  controlsText = 
    <div className="custom-font-large">
      <div>
        <b>Controls:</b>
      </div>
      <div className="indent">
        Spacebar - Play/pause<br/>
        Left Arrow Key - Next frame<br/>
        Right Arrow Key - Previous frame
      </div>
    </div>

  chuu2WikiLink = 
    <a href="https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai">
      Chuunibyou demo Koi ga Shitai!
    </a>

  knowYourMemeLink = 
    <a href="http://knowyourmeme.com/memes/rikka-s-finger-spin">
      internet meme
    </a>

  gitHubLink = 
    <a href="https://github.com/yufdong/yufdong.github.io">
      GitHub Repository
    </a>

  aboutText = 
    <div className="custom-font-large">
      <div>
        <b>About:</b>
      </div>
      <div className="indent">
        The qt3.14 anime grill is <i>Rikka Takanashi</i> from {this.chuu2WikiLink}.
        The clip of Rikka spinning her fingers was featured in the opening theme for the first season of the anime series.
        Rikka's cute finger spin caught much attention from fans and it quickly became an {this.knowYourMemeLink}, spawning 
        countless variations and parodies.<br/>
        <br/>
        {this.gitHubLink}<br/>
        （σ回ω・）σ←↖↑↗→↘↓↙←↖↑↗
      </div>
    </div>

  render() {
    return(
      <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}> 
        <ReactBootstrap.Modal.Header closeButton>
          <ReactBootstrap.Modal.Title>
            <ReactBootstrap.Glyphicon glyph="info-sign" /> {'\u00a0'}
            <b className="custom-font-large">{this.modalTitle}</b>
          </ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>

        <ReactBootstrap.Modal.Body>
          {this.controlsText}
          <br/>
          {this.aboutText}
        </ReactBootstrap.Modal.Body>

        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button bsStyle="primary" onClick={this.close}>
            Close
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
    );
  }

}

interface P extends React.Props<any> {
}

interface S {
  showModal?: boolean;
}

export = InfoDialog;
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideoRequest} from './actions/video-actions'
import './Tile.css';
import tileImgMock from './images/junior_front_end_ui_mock.png'
import tileImgSimple from './images/Simple_Tile.png'

class Tile extends Component {
  constructor() {
    super();
    this.state = {
      tile: []
    }
  }

  render(){
    return(
      <img src={tileImgSimple} style={{width:420}}/>
    )
  }
}

export default Tile;

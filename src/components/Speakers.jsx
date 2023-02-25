import React, { Component } from 'react'
import Caraousel from './Caraousel8'
import Menu from './Menu'
import SpeakersDet from './SpeakersDet'
import TopBar from './TopBar'

export class Speakers extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <SpeakersDet />
      </div>
    )
  }
}

export default Speakers
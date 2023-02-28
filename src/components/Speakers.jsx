import React, { Component } from 'react'
import Caraousel from './Caraousel8'
import SpeakersDet from './SpeakersDet'

export class Speakers extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <SpeakersDet />
      </div>
    )
  }
}

export default Speakers
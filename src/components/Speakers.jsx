import React, { Component } from 'react'
import Caraousel from './Caraousel8'
import SpeakersDet from './SpeakersDet'
import SpeakersDet1 from './SpeakersDet1'

export class Speakers extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        {/* <SpeakersDet /> */}
        <SpeakersDet1 />
      </div>
    )
  }
}

export default Speakers
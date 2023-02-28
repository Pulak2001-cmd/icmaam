import React, { Component } from 'react'
import Caraousel from './Caraousel2'
import ConferenceDet from './ConferenceDet'

export class ConferenceAbout extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <ConferenceDet />
      </div>
    )
  }
}

export default ConferenceAbout
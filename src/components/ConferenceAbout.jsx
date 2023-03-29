import React, { Component } from 'react'
import Caraousel from './Caraousel2'
import ConferenceDet from './ConferenceDet'
import HomeItems from './HomeItems'

export class ConferenceAbout extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <HomeItems />
      </div>
    )
  }
}

export default ConferenceAbout
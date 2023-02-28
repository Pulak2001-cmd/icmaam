import React, { Component } from 'react'
import Caraousel from './Caraousel2'
import ConferenceDet from './ConferenceDet'
import Menu from './Menu'
import TopBar from './TopBar'

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
import React, { Component } from 'react'
import Caraousel from './Caraousel9'
import Menu from './Menu'
import TopBar from './TopBar'
import TravelDet from './TravelDet'

export class Travel extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <TravelDet />
      </div>
    )
  }
}

export default Travel
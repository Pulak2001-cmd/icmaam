import React, { Component } from 'react'
import Caraousel from './Caraousel10'
import DumdumDet from './DumdumDet'
import Menu from './Menu'
import TopBar from './TopBar'

export class Dumdum extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <DumdumDet />
      </div>
    )
  }
}

export default Dumdum
import React, { Component } from 'react'
import Caraousel from './Caraousel13'
import KolkataDet from './KolkataDet'
import Menu from './Menu'
import TopBar from './TopBar'

export class Kolkata extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <KolkataDet />
      </div>
    )
  }
}

export default Kolkata
import React, { Component } from 'react'
import Caraousel from './Caraousel12'
import Menu from './Menu'
import SealdahDet from './SealdahDet'
import TopBar from './TopBar'

export class Sealdah extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <SealdahDet />
      </div>
    )
  }
}

export default Sealdah
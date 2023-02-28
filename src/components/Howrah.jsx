import React, { Component } from 'react'
import Caraousel from './Caraousel11'
import HowrahDet from './HowrahDet'
import Menu from './Menu'
import TopBar from './TopBar'

export class Howrah extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <HowrahDet />
      </div>
    )
  }
}

export default Howrah
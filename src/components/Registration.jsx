import React, { Component } from 'react'
import Caraousel from './Caraousel5'
import Menu from './Menu'
import RegistrationDet from './RegistrationDet'
import TopBar from './TopBar'

export class Registration extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <RegistrationDet />
      </div>
    )
  }
}

export default Registration
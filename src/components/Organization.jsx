import React, { Component } from 'react'
import Caraousel from './Caraousel7'
import Menu from './Menu'
import OrganizationDet from './OrganizationDet'
import TopBar from './TopBar'

export class Organization extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <OrganizationDet />
      </div>
    )
  }
}

export default Organization
import React, { Component } from 'react'
import Caraousel from './Caraousel7'
import OrganizationDet from './OrganizationDet'

export class Organization extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <OrganizationDet />
      </div>
    )
  }
}

export default Organization
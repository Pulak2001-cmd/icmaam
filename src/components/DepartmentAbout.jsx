import React, { Component } from 'react'
import Caraousel from './Caraousel3'
import DepartmentDet from './DepartmentDet'

export class DepartmentAbout extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <DepartmentDet />
      </div>
    )
  }
}

export default DepartmentAbout
import React, { Component } from 'react'
import Caraousel from './Caraousel3'
import DepartmentDet from './DepartmentDet'
import Menu from './Menu'
import TopBar from './TopBar'

export class DepartmentAbout extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
        <Caraousel />
        <DepartmentDet />
      </div>
    )
  }
}

export default DepartmentAbout